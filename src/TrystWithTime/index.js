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
          {/* <img src={require('../static/back-img/1.background.svg')}  className="backgroundNeon" alt="back"/>
          <img src={require('../static/back-img/2.mountainBack.svg')}  className="mb" alt="mb"/>
          <img src={require('../static/back-img/3.mountainMiddle.svg')}  className="mm" alt="mm"/>
          <img src={require('../static/back-img/4.mountainFront.svg')}  className="mf" alt="mf"/>
          <img src={require('../static/back-img/5.treesOne.svg')}  className="to" alt="t1"/>
          <img src={require('../static/back-img/6.treesTwo.svg')}  className="tt" alt="t2"/>
          <img src={require('../static/back-img/7.stars.svg')}  className="stars" alt="stars"/> */}

        </div>

    )
  }
}