import React from 'react';
import VanillaTilt from 'vanilla-tilt';
import VideoPlayer from './VideoPlayer';
import './index.css'


export default class Tilt extends React.Component {
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
          {/* <img src={require('../static/beach1.png')}  className="stage" alt="stage"/> */}
          {/* <a href="https://www.freepik.com/free-photos-vectors/flower">Flower photo created by kjpargeter - www.freepik.com</a> */}
          {/* <img src={require('../static/10207.jpg')}  className="coconut" alt="coconut"/> */}
          {/* <img src={require('../static/coconut.png')}  className="coconut2" alt="coconut2"/>
          <img src={require('../static/retro-tree.png')}  className="coconut3" alt="coconut3"/>
          <img src={require('../static/retro-tree.png')}  className="coconut4" alt="coconut4"/>
           */}
        </div>

    )
  }
}