import React from 'react';
import {ReactComponent as ShaderLogo} from './svg/shaders.svg';
import {ReactComponent as PresetLogo} from './svg/presets.svg';
import {ReactComponent as FxLogo} from './svg/fx.svg';
import {ReactComponent as WaveLogo} from './svg/sine.svg';
import {ReactComponent as InfoLogo} from './svg/info.svg';
import './Nav.css';

const Nav = ({ windowState, handler }) => {
  const getStyle = (index) => {
    let classList = 'nav-button ';
    if (windowState[index] === 1) {
      classList += 'active '
    } 
    return classList;
  }

  return (
    <nav className="nav">
      <button value={0} className={getStyle(0)} onClick={handler} title="Shader select [Q]">
        <ShaderLogo className="shader-icon" />
      </button>
      <button value={1} className={getStyle(1)} onClick={handler} title="Wave controls [W]">
        <WaveLogo className="wave-icon" />
      </button>
      <button value={2} className={getStyle(2)} onClick={handler} title="Feedback controls [E]">
        <FxLogo className="fbx-icon" />
      </button>
      <button value={3} className={getStyle(3)} onClick={handler} title="Presets [R]">
        <PresetLogo className="preset-icon" />
      </button>
      <button value={4} className={getStyle(4)} onClick={handler} title="About [T]">
        <InfoLogo className="info-icon" />
      </button>
    </nav>
  )
}

export default Nav;