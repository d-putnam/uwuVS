import React, { Component } from 'react';
import * as THREE from 'three';
//import {isMobile} from 'react-device-detect';
import { fragShader1 } from './shaders/fragShader01.js'
import { fragShader2 } from './shaders/fragShader02.js'
import { fragShader3 } from './shaders/fragShader03.js'
import { brcosaShader } from './shaders/brcosaShader.js'
import { fbxShader } from './shaders/fbxShader.js'


class Three extends Component {

  constructor(props) {
    super(props);
    this.state = {width: window.innerWidth, height: window.outerHeight}
  }

  componentDidMount() {
    this.sceneSetup();
    this.drawSceneSetup();
    this.brcosaSceneSetup();
    this.fbxSceneSetup();
    this.startAnimationLoop();
    window.addEventListener('resize', this.handleWindowResize);
    //window.addEventListener("orientationchange", this.handlwWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    //window.removeEventListener("orientationchange", this.handlwWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  componentDidUpdate() {
    this.updateSliders();
    this.changeShader();
  }


  sceneSetup = () => {

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera( 
      this.state.width / - 2, 
      this.state.width / 2, 
      this.state.height / 2, 
      this.state.height / - 2, 
      1, 1000 );
    this.camera.position.z = 2;

    this.clock = new THREE.Clock();
    this.now = this.clock.getElapsedTime();

    // plane geometry will be shared across scenes
    this.geometry = new THREE.PlaneBufferGeometry(this.state.width, this.state.height);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.state.width, this.state.height);
    this.mount.appendChild(this.renderer.domElement); // mount using React ref
  }

  drawSceneSetup = () => {
    this.drawScene = new THREE.Scene();
    this.drawTexture = new THREE.WebGLRenderTarget(this.state.width, this.state.height, 
      {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter}
    );
    
    if (this.props.activeShader === '0') {
      this.fshader = fragShader1;
    } else if (this.props.activeShader === '1') {
      this.fshader = fragShader2;
    } else if (this.props.activeShader === '2') {
      this.fshader = fragShader3;
    }

    this.drawMaterial = new THREE.ShaderMaterial({
      uniforms: {
        u_resolution: {value: {x: this.state.width, y: this.state.height}},
        u_time: {value: this.now},
        u_0: {value: this.props.uniforms[0]},
        u_1: {value: this.props.uniforms[1]},
        u_2: {value: this.props.uniforms[2]},
        u_3: {value: this.props.uniforms[3]},
        u_4: {value: this.props.uniforms[4]},
        u_5: {value: this.props.uniforms[5]},
        u_6: {value: this.props.uniforms[6]},
        u_7: {value: this.props.uniforms[7]},
        u_8: {value: this.props.uniforms[8]},
      },
      fragmentShader: this.fshader
    });
    this.drawPlane = new THREE.Mesh(this.geometry, this.drawMaterial);
    this.drawScene.add(this.drawPlane);
  }

  brcosaSceneSetup = () => {
    this.brcosaScene = new THREE.Scene();
    this.brcosaTexture = new THREE.WebGLRenderTarget(this.state.width, this.state.height, 
      {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter}
    );

    this.brcosaMaterial = new THREE.ShaderMaterial({
      uniforms: {
        drawTexture: {type: "t", value: this.drawTexture.texture},
        u_resolution: {value: {x: this.state.width, y: this.state.height}},
        u_time: {value: this.now},
        u_9: {value: this.props.uniforms[9]},
        u_10: {value: this.props.uniforms[10]},
        u_11: {value: this.props.uniforms[11]},
      },
      fragmentShader: brcosaShader
    });
    this.brcosaPlane = new THREE.Mesh(this.geometry, this.brcosaMaterial);
    this.brcosaScene.add(this.brcosaPlane);
  }

  fbxSceneSetup = () => {
    this.fbxScene = new THREE.Scene();
    // Create 2 buffer textures
    this.textureA = new THREE.WebGLRenderTarget(this.state.width, this.state.height, 
      {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter}
    );
    this.textureB = new THREE.WebGLRenderTarget(this.state.width, this.state.height, 
      {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter}
    );
    // Pass textureA to shader
    this.fbxMaterial = new THREE.ShaderMaterial({
      uniforms: {
       bufferTexture: {type: "t", value: this.textureA.texture},
       u_resolution: {value: {x: this.state.width, y: this.state.height}},
       drawTexture: {type: "t", value: this.brcosaTexture.texture},
       u_time: {value: this.now},
       u_12: {value: this.props.uniforms[12]}, 
       u_13: {value: this.props.uniforms[13]}, 
       u_14: {value: this.props.uniforms[14]}, 
       u_15: {value: this.props.uniforms[15]}, 
      },
      fragmentShader: fbxShader
    });
    this.fbxPlane = new THREE.Mesh(this.geometry, this.fbxMaterial);
    this.fbxScene.add(this.fbxPlane);
    
    //Draw finalTexture (textureB) to screen 
    this.finalMaterial =  new THREE.MeshBasicMaterial({map: this.textureB});
    this.outputPlane = new THREE.Mesh(this.geometry, this.finalMaterial);
    this.scene.add(this.outputPlane);
  }


  startAnimationLoop = () => {

    this.now = this.clock.getElapsedTime();
    this.drawMaterial.uniforms.u_time.value = this.now;
    this.fbxMaterial.uniforms.u_time.value = this.now;
    
    // Draw our DRAW scene
    this.renderer.setRenderTarget(this.drawTexture);
    this.renderer.render(this.drawScene, this.camera);
    this.renderer.setRenderTarget(null);

    //brcosa
    this.renderer.setRenderTarget(this.brcosaTexture);
    this.renderer.render(this.brcosaScene, this.camera);
    this.renderer.setRenderTarget(null);

    // Draw to textureB
    this.renderer.setRenderTarget(this.textureB);
    this.renderer.render(this.fbxScene, this.camera);
    this.renderer.setRenderTarget(null);
    
    // Swap textureA and B
    let t = this.textureA;
    this.textureA = this.textureB;
    this.textureB = t;
    this.outputPlane.material.map = this.textureB.texture;
    this.fbxMaterial.uniforms.bufferTexture.value = this.textureA.texture;

    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  handleWindowResize = () => {
    this.setState({width: window.innerWidth, height: window.outerHeight})
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = this.state.width / this.state.height;
    this.camera.updateProjectionMatrix();
  };



  updateSliders = () => {
    // update each slider
    for (let i=0; i<16; i++) {
      let target = 'u_' + i;
      let value = this.props.uniforms[i];
      if (i < 9) {
        this.drawMaterial.uniforms[target] = {value: value};
      } else if (i >= 9 && i <= 11) {
        this.brcosaMaterial.uniforms[target] = {value: value};
      } else if (i > 11) {
        this.fbxMaterial.uniforms[target] = {value: value};
      }
    }
  }

  changeShader = () => {
    // update the active shader
    if (this.props.activeShader === '0'){
      this.drawMaterial.fragmentShader = fragShader1;
    } else if (this.props.activeShader === '1'){
      this.drawMaterial.fragmentShader = fragShader2;
    } else {
      this.drawMaterial.fragmentShader = fragShader3;
    }
    this.drawMaterial.needsUpdate = true;
  }

  render() {
    return <div className="canvas" ref={ref => (this.mount = ref)} />;
  }
}

export default Three;
