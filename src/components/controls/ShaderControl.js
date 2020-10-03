import React from 'react';
import './controls.css';

const ShaderControl = ({ windowState, activeShader, handler }) => {
  const getWindowState = () => {
    let classList = 'ctrl-module ';
    if (windowState[0] === 0) {
      classList += 'hidden '
    } else {
      classList += 'showing '
    }
    return classList;
  }

  return (
    <div id="shader-ctrl" value={activeShader} className={getWindowState()}>
      <div className="center label">SHADERS</div>
      <br />
      <div className="center">
        <button className={activeShader === '0' ? 'button active' : 'button inactive'}
                onClick={handler} 
                value={0} 
                title="Shader 1 [Z]">[Z]</button>
        <button className={activeShader === '1' ? 'button active' : 'button inactive'}
                onClick={handler} 
                value={1}
                title="Shader 2 [X]">[X]</button>
        <button className={activeShader === '2' ? 'button active' : 'button inactive'}
                onClick={handler} 
                value={2} 
                title="Shader 3 [C]">[C]</button>
      </div>
    </div>
  )
}

export default ShaderControl;