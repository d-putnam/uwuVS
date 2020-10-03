import React from 'react';
import './info.css';

const Presets = ({ windowState, presets, activePreset, changeHandler, saveHandler }) => {
  
  const getWindowState = () => {
    let classList = 'info-module ';
    if (windowState[3] === 0) {
      classList += 'hidden '
    } else {
      classList += 'showing '
    }
    return classList;
  }

  const getStyle = (index) => {
    let classList = 'button ';
    if (index === activePreset) {
      classList += 'active '
    } else {
      classList += 'inactive '
      if (presets[index] === undefined) {
        classList += 'empty '
      }
    }
    return classList;
  }

  const getLabel = (index) => {
    let classList = 'preset-label ';
    if (presets[index] !== undefined) {
      classList += 'hidden'
    }  
    return classList;
  }

  const array = [0,1,2,3,4,5,6,7,8,9];

  return (
    <div id="presets" className={getWindowState()}>
      <div className="center label">PRESETS</div>
      <br />
      <div className="center button-wrap">
        { array.map(button => {
            return (
              <div key={button}>
                <button onClick={changeHandler} 
                        value={button} 
                        className={getStyle(button)} 
                        title={'Preset [' + (button + 1) + ']' }>
                  [{button + 1 !== 10 ? button + 1 : 0}]
                </button>
                <span className={getLabel(button)}>EMPTY</span>
              </div>
            )
          })
        }
      </div>
      <div className="center submit-wrap">
        <button className="save button" title="save preset [S]" onClick={saveHandler}>save preset [S]</button>
      </div>
    </div>
  )
}

export default Presets;