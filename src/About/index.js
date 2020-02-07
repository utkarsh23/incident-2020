import React from 'react';
import Projector from '../static/projector.svg';
import Scroll from '../static/aboutus-m.png';
import hamburger from '../static/hamburger.png';
import Sidenav from '../Sidenav';
import './style.css';
import Homeicon from '../homeicon';

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

class About extends React.Component {
  render() {
    return (
      <div class="AboutBackground">
        <Homeicon />
        <Sidenav />
        <img src={Projector} className="projector-about hide-on-small-only" alt="projector" />
        <img src={Scroll} className="about-m show-on-small" alt="scroll-about" />
        <div className="about-heading">About Us<br /></div>
        <img src={hamburger} alt="ham-menu" onClick={openRightMenu} className="hamburger" />
      </div>
    );
  }
}

export default About;
