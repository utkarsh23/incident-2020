import React from 'react';
import './static/sidenav.css';
import PurpleLogo from './static/inci_logo_purple_back.jpg';

function closeRightMenu() {
  // document.getElementById("rightMenu").style.animationName = "closemenu";
  document.getElementById("rightMenu").style.display = "none";
}

function Sidenav() {
  return (
    <div className="w3-sidebar w3-bar-block w3-card w3-animate-right" style={{display: 'none', right:'0'}} id="rightMenu">
      <img className="purpleLogo" src={PurpleLogo} alt="purple_logo" />
      <button onClick={closeRightMenu} className="w3-bar-item w3-button w3-large"> &times;</button>
      <a href="/home" className="w3-bar-item w3-button">Home</a>
      <a href="/about" className="w3-bar-item w3-button">About Us</a>
      <a href="/events" className="w3-bar-item w3-button">Events</a>
      <a href="/icare" className="w3-bar-item w3-button">I-Care</a>
      <a href="/timeline" className="w3-bar-item w3-button">Timeline</a>
      <a href="/team" className="w3-bar-item w3-button">Team</a>
      <a href="/sponsors" className="w3-bar-item w3-button">Sponsors</a>
      <a href="/campus" className="w3-bar-item w3-button">Campus Ambassador</a>
      <a href="/tryst-with-time" className="w3-bar-item w3-button">Tryst With Time</a>
      <a href="/contact" className="w3-bar-item w3-button">Contact</a>
    </div>
  );
}

export default Sidenav;
