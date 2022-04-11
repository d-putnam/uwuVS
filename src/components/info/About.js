import React from 'react';
import './info.css';

const About = ({windowState}) => {
	
	const getWindowState = () => {
    let classList = 'info-module ';
    if (windowState[4] === 0) {
      classList += 'hidden '
    } else {
      classList += 'showing '
    }
    return classList;
	}
	
  return (
    <div id="about" className={getWindowState()}>
      <div className="text-container">
        <header style={{fontWeight:'bold'}} className="center label">ABOUT</header>
        <p>uwu-VS is a semi-modular video synthesis instrument for web browsers.</p>  
        <p>Inspired by live coding environments <a href="https://hydra.ojack.xyz/" target="blank">HYDRA</a> by Olivia Jack, and <a href="https://shawnlawson.github.io/The_Force/" target="blank">THE FORCE</a> by Shawn Lawson, I wanted to make a
            browser app flexible enough for live performance but accessible to users without any prior coding experience (though MIDI scripting is encouraged!)</p>
        <p>Built using GLSL and three.js, the structure is as follows:</p>
        <ul>
          <li>Our (drawShader) creates an initial texture based on the sliders in the (WAVES) table
          </li>
          <li>This texture is passed to our (feedbackShader) and processed based on the sliders in the (FEEDBACK) table</li>
        </ul>
        <p>The active (drawShader) can be changed via the (SHADERS) table or keys [z], [x], [c].</p>
        <p>To save a preset, press the [s] key. This will save the current arrangement of sliders (for each shader) to number keys [1]-[0].
            Once all ten slots are filled, saving a preset will overwrite the current selection.
        </p>
        <p>All parameters can be controlled via the Web MIDI API (<a href="https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess#Browser_compatibility" target="blank">click here for supported browsers</a>)
            meaning uwu-VS plays well with others! Try using a control surface or sending MIDI messages from another program (Ableton, Max/MSP, etc.)</p>
        <p>Below you can find a table of accepted keyboard shortcuts and MIDI messages:</p>
        <table>
          <tbody>
						<tr>
							<th>Key</th>
							<th>MIDI CC#</th>
							<th>Function</th>
						</tr>
						<tr>
							<td>[esc]</td>
							<td>-</td>
							<td>fullscreen window</td>
						</tr>
						<tr>
							<td>[~]</td>
							<td>-</td>
							<td>hide all UI elements</td>
						</tr>
						<tr>
							<td>[s]</td>
							<td>40 <br /> (trigger value: 127)</td>
							<td>save current preset</td>
						</tr>
						<tr>
							<td>[1]-[0]</td>
							<td>20-29 <br /> (trigger value: 127)</td>
							<td>recall preset</td>
						</tr>
						<tr>
							<td>[z] [x] [c]</td>
							<td>30, 21, 32 <br /> (trigger value: 127)</td>
							<td>select active drawShader</td>
						</tr>
						<tr>
							<td>-</td>
							<td>0-11 (value 0-127)</td>
							<td>drawShader sliders</td>
						</tr>
						<tr>
							<td>-</td>
							<td>12-15 (value 0-127)</td>
							<td>feedbackShader sliders</td>
						</tr>
          </tbody>
				</table>
				<span style={{fontSize: 'smaller'}}>
					© 2020 d putnam
				</span>
      </div>
    </div>
  )
}

export default About;