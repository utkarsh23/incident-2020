import React from 'react';
// import Lighthouse from '../static/Lighthouse.png';
// import AboutContent from './AboutContent.json';
import Projector from '../static/projector.svg';
import './style.css'
// import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div class="AboutBackground">
        {/* <img alt="Lighthouse" class="lighthouse" src={Lighthouse}></img> */}
        {/* <div class="hero">
          <h1>
            {AboutContent.title}
          </h1>
          <p>
            {AboutContent.paragraph1}
          </p>
          <p>
            {AboutContent.paragraph2}
          </p>
          <p>
            {AboutContent.paragraph3}
          </p>
        </div> */}
        <img src={Projector} className="projector-about" alt="projector" />
        <div className="about-heading">About<br />&nbsp;&nbsp;&nbsp;&nbsp;Incident</div>
      </div>
    );
  }
}

export default About;

// <div>
//   <h1>About Us Page</h1>
//   <Link to="/">
//     <button>Home</button>
//   </Link>
// </div>
