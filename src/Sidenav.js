import React from 'react';
import './static/sidenav.css';

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}

function Sidenav() {
  return (
    <div className="w3-sidebar w3-bar-block w3-card w3-animate-right" style={{display: 'none', right:'0'}} id="rightMenu">
      <button onClick={closeRightMenu} className="w3-bar-item w3-button w3-large">Close &times;</button>
      <a href="#" className="w3-bar-item w3-button">Link 1</a>
      <a href="#" className="w3-bar-item w3-button">Link 2</a>
      <a href="#" className="w3-bar-item w3-button">Link 3</a>
    </div>
  );
}

export default Sidenav;
