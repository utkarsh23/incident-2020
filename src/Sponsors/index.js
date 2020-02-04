import React from 'react';
import '../static/sponsors.css';
import hamburger from '../static/hamburger.png';
import Sidenav from '../Sidenav';

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function Sponsors() {
  return (
    <div>
      <Sidenav />
      <div className="sponsors-wrapper">
        <img src={hamburger} alt="ham-menu" className="hamburger" onClick={openRightMenu} />
        <br /><br />
        <h1 className="sponsors-heading center">Sponsors Page</h1>
        <br /><br /><br /><br />
        <h3 className="sponsors-coming-soon center">Coming Soon.</h3>
      </div>
    </div>
  );
}

export default Sponsors;
