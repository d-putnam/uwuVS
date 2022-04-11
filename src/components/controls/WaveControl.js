import React from 'react';
import './controls.css';


const WaveControl = ({ windowState, activeShader, sliders, handler }) => {

  const getWindowState = () => {
    let classList = 'ctrl-module ';
    if (windowState[1] === 0) {
      classList += 'hidden '
    } else {
      classList += 'showing '
    }
    return classList;
  } 

  return (
    <div id="wave-ctrl" className={getWindowState()}>
      <header className="center label">WAVES</header>
      <br />
      <div className="slider-wrap">
        { sliders[activeShader].filter(slider => slider[0] <= 11).map(slider => {
            return (
              <div className="slider-row" key={slider[0]}>
                <input className="slider"
                  type="range" 
                  min = {0}
                  max = {127}
                  data-target = {slider[0]}
                  data-min = {slider[1]}
                  data-max = {slider[2]}
                  value = {slider[3]} 
                  onChange = {handler} />
                <span className="slider-label">{slider[4]}</span>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default WaveControl;
