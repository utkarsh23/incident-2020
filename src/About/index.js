import React from 'react';
import Projector from '../static/projector.svg';
import hamburger from '../static/hamburger.png';
import Sidenav from '../Sidenav';
import './style.css'

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

class About extends React.Component {
  render() {
    return (
      <div class="AboutBackground">
        <Sidenav />
        <img src={Projector} className="projector-about" alt="projector" />
        <div className="about-heading">About<br />&nbsp;&nbsp;&nbsp;&nbsp;Incident</div>
        <img src={hamburger} alt="ham-menu" onClick={openRightMenu} className="hamburger" />
      </div>
    );
  }
}

export default About;
