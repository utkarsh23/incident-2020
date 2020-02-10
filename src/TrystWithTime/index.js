import React from 'react';
import { Link } from "react-router-dom";
import VanillaTilt from 'vanilla-tilt';
import VideoPlayer from './VideoPlayer';
import NeonLogo from '../static/neon-logo.png';
import RightProp from '../static/right-prop.png';
import LeftProp from '../static/light-sabre.png';
import './index.css'


class Tilt extends React.Component {
  componentDidMount() {
    VanillaTilt.init(this.rootNode, {
      max: 10,
      speed: 800,
      glare: false,
      'max-glare': 0.5,
      easing: "cubic-bezier(.17,.67,.83,.67)",
      gyroscope: true,
    })

    document.body.style.overflow = 'hidden';
  }

  componentDidUnmount(){
    document.body.style.overflow = 'scroll';
  }

  render() {
    return (
        <div
          ref={node => (this.rootNode = node)}
          className="tilt-root"
        >
          <VideoPlayer />
          <Link to="/"><img src={NeonLogo} className="neon-logo-tryst" alt="neon logo" /></Link>
          <img className="rightprop" src={RightProp} alt="right-prop" />
          {/* <img className="leftprop" src={LeftProp} alt="left-prop" /> */}
        </div>

    )
  }
}

export default Tilt;
