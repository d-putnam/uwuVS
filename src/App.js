import React, {Component} from 'react';
import Three from "./components/canvas/Three.js";
import Nav from "./components/nav/Nav.js"
import ShaderControl from "./components/controls/ShaderControl.js"
import WaveControl from "./components/controls/WaveControl.js"
import FbxControl from "./components/controls/FbxControl.js"
import Presets from "./components/info/Presets.js"
import About from "./components/info/About.js"
import {scale, lerp, sleep} from "./helpers.js"; 
import {defaultData} from "./defaultData.js";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    window.localStorage.getItem('ursprst')
      // Load from local storage if available
      ? this.state = {
          sliders: JSON.parse(localStorage.getItem('ursprst'))[0]['sliders'],
          activeShader: JSON.parse(localStorage.getItem('ursprst'))[0]['activeShader'],
          activePreset: 0,
          windowState: window.screen.width < 415
                        ? [1, 0, 0, 0, 0]
                        : [1, 1, 1, 0, 0],
          hideAllState: false,
          uniforms: JSON.parse(localStorage.getItem('ursprst'))[0]['uniforms'],
          presets: JSON.parse(localStorage.getItem('ursprst'))
        }
      // Load defaults if no local storage data
      : this.state = {
          sliders: defaultData,
          activeShader: '0',
          activePreset: 0,
          windowState: window.screen.width < 415
                        ? [1, 0, 0, 0, 0]
                        : [1, 1, 1, 0, 0],          
          hideAllState: false,
          uniforms: defaultData[0].map(slider => 
            scale(slider[3], [slider[1], slider[2]], [0, 127])),
          presets: [{activeShader: '0',
            sliders: defaultData, 
            uniforms: defaultData[0].map(slider => 
            scale(slider[3], [slider[1], slider[2]], [0, 127]))}]
      }
  }

  //
  // set up listeners on mount
  //
  componentDidMount() {
    window.scrollTo(0, 1);
    // Keydown listener for keyboard events
    window.addEventListener('keydown', this.handleKeyPress)
    if (typeof window.orientation === 'undefined'){
      window.location.protocol === "https:"
      ? this.midiMount()
      : alert('connect via HTTPS to use MIDI features!')
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress)
  }
 

  //
  // shader & slider handlers
  //
  handleShaderChange = (e) => {
    this.setState({activeShader: e.target.value})
    this.setState({uniforms: this.state.sliders[e.target.value].map(slider => 
      scale(slider[3], [slider[1], slider[2]], [0, 127])
    )});
  }

  handleSliderChange = (e) => {  
    let target = Number(e.target.dataset.target);
    // Clone array and update slider value
    let sliderArray = this.state.sliders.map(slider => slider);
    sliderArray[this.state.activeShader][target][3] = Number(e.target.value);
    this.setState({sliders: sliderArray})
    // Get ranges for scaling
    let xRange = [
      sliderArray[this.state.activeShader][target][1],
      sliderArray[this.state.activeShader][target][2]
    ]
    let yRange = [Number(0), Number(127)];
    // Interpolate between original and target values
    const slide = async () => {
      for(let i=0; i<10; i++) {
        // get original, scaled slider value from uniform
        let scaledVal = this.state.uniforms[target];
        // get new target value
        let targetVal = scale(this.state.sliders[this.state.activeShader][target][3], xRange, yRange) / 1.0;
        // get incremental unit
        let unit = (scaledVal - lerp(scaledVal, targetVal, 0.1)) * -1.0;
        // initialize our output variable
        let newVal = scaledVal;
        // clone our uniforms array and update
        let uniformArray = this.state.uniforms.map(uniform => uniform);
        newVal += Number(unit);
        uniformArray[target] = newVal;
        this.setState({uniforms: uniformArray});
        await sleep(15);
      }
    }
    slide();    
  }

  //
  // preset handlers
  //
  handlePresetChange = (e) => {
    if (this.state.presets[e.target.value]) {
      this.setState({
        activePreset: Number(e.target.value),
        activeShader: this.state.presets[e.target.value]['activeShader'],
        sliders: this.state.presets[e.target.value]['sliders'],
        uniforms: this.state.presets[e.target.value]['uniforms']
      })
    }
  }

  handlePresetSave = () => {
    // Deep clone our sliders to lose reference
    let slidersClone = JSON.parse(JSON.stringify(this.state.sliders))
    let preset = {
      activeShader: this.state.activeShader, 
      sliders: slidersClone, 
      uniforms: this.state.uniforms
    }
    // Clone our presets array
    let presetArray = this.state.presets.map(set => set);

    // Only 10 presets, then becomes overwrite
    if (presetArray.length < 10) {
      this.setState({activePreset: presetArray.length})
      let output = presetArray.concat(preset)
      this.setState({presets: output})
      window.localStorage.setItem(`ursprst`, JSON.stringify(output));
    } else {
      presetArray[this.state.activePreset] = preset
      this.setState({presets: presetArray})
      window.localStorage.setItem(`ursprst`, JSON.stringify(presetArray));
    }
  }

  //
  // window handlers
  //
  handleWindowChange = (e) => {
    let windowArray = this.state.windowState.map(window => window);
    if (window.screen.width < 415) {
      if (windowArray[e.target.value] === 1){
        windowArray = this.state.windowState.map(() => 0)
      } else {
        windowArray = this.state.windowState.map(() => 0)
        windowArray[e.target.value] = 1
      }
    } else {
      if (windowArray[e.target.value] === 0) {
        windowArray[e.target.value] = 1
      } else {
        windowArray[e.target.value] = 0
      }
    }
    this.setState({windowState: windowArray})
  }

  showHideControls = () => {
    let classList = 'controls '
    if (this.state.windowState[0] === 0 && this.state.windowState[1] === 0 && this.state.windowState[2] === 0) {
      classList += 'hidden'
    } else {
      classList += 'showing'
    }
    return classList
  }

  //
  // keypress handlers
  //
  handleKeyPress = (e) => {
    if (e.keyCode === 81) {
      this.handleWindowChange({'target': {'value': 0}});
    } else if (e.keyCode === 87) {
      this.handleWindowChange({'target': {'value': 1}});
    } else if (e.keyCode === 69) {
      this.handleWindowChange({'target': {'value': 2}});
    } else if (e.keyCode === 82) {
      this.handleWindowChange({'target': {'value': 3}});
    } else if (e.keyCode === 84) {
      this.handleWindowChange({'target': {'value': 4}});
    } else if (e.keyCode === 90) {
      this.handleShaderChange({'target': {'value': '0'}});
    } else if (e.keyCode === 88) {
      this.handleShaderChange({'target': {'value': '1'}});
    } else if (e.keyCode === 67) {
      this.handleShaderChange({'target': {'value': '2'}});
    } else if (e.keyCode >= 49 && e.keyCode <= 57) {
      if (this.state.presets.length >= e.keyCode - 48) {
        this.handlePresetChange({'target': {'value': e.keyCode - 49}});
      }
    } else if (e.keyCode === 48) {
      if (this.state.presets.length === 10) {
        this.handlePresetChange({'target': {'value': 9}});
      }
    } else if (e.keyCode === 83) {
      this.handlePresetSave(); //save [s]
    } else if (e.keyCode === 192) {
      if (this.state.hideAllState === false) {
        this.setState({hideAllState: true})
      } else {
        this.setState({hideAllState: false})
      }
    } else if (e.keyCode === 27) {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }      
    }
  }

  //
  // midi handlers
  //
  midiMount = () => {
    // Request MIDI access
    navigator.requestMIDIAccess()
      .then(this.onMIDISuccess, this.onMIDIFailure);
  }
  onMIDIFailure = () => {
    console.log('Could not access your MIDI devices.');
  }
  // On success, set up listeners
  onMIDISuccess = (midiAccess) => {
    for (var input of midiAccess.inputs.values()) {
      input.onmidimessage = this.getMIDIMessage;
    }
  }
  getMIDIMessage = (midiMessage) => {
    let data = midiMessage.data
    if (data[1] <= 15) {
      let e = {'target': {'dataset': {'target': data[1]}, 'value': data[2] } }
      this.handleSliderChange(e)
    } 
    // SHADER CHANGE MESSAGES
    else if (data[1] === 30 && data[2] === 127) {
      this.handleShaderChange({target: {value: '0'}});
    } else if (data[1] === 31 && data[2] === 127) {
      this.handleShaderChange({target: {value: '1'}});
    } else if (data[1] === 32 && data[2] === 127) {
      this.handleShaderChange({target: {value: '2'}});
    }
    // PRESET CHANGE MESSAGES
    else if (data[1] >= 20 && data[1] <= 29 && data[2] === 127) {
      if (data[1] === 29) {
        this.handlePresetChange({target: {value: 9}});
      } else {
        this.handlePresetChange({target: {value: data[1] - 20}});
      }
    }
    // SAVE PRESET MESSAGE
    else if (data[1] === 40 && data[2] === 127) {
      this.handlePresetSave();
    }
  }

  render() {
    return (
      <div>
        <Three activeShader={this.state.activeShader} uniforms={this.state.uniforms} />
        <div style={this.state.hideAllState === true 
                ? {'visibility':'hidden'} 
                : {'visibility':'visible'}}>
          <div style={window.screen.width < 415
                ? {'display':'block'}
                : {'display':'flex'}}
            className={'container'}>
            <Nav windowState={this.state.windowState}
              handler={this.handleWindowChange} />
            <div className={this.showHideControls()}>
              <ShaderControl 
                windowState={this.state.windowState} 
                activeShader={this.state.activeShader} 
                handler={this.handleShaderChange} />
              <WaveControl 
                windowState={this.state.windowState} 
                activeShader={this.state.activeShader} 
                sliders={this.state.sliders} 
                handler={this.handleSliderChange} />
              <FbxControl 
                windowState={this.state.windowState} 
                activeShader={this.state.activeShader} 
                sliders={this.state.sliders} 
                handler={this.handleSliderChange} />
            </div>
            <div className={'info'}>
              <Presets 
                presets={this.state.presets}
                windowState={this.state.windowState} 
                activePreset={this.state.activePreset} 
                changeHandler={this.handlePresetChange} 
                saveHandler={this.handlePresetSave} />
              <About windowState={this.state.windowState} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
