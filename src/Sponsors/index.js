import React from 'react';
import '../static/sponsors.css';
import hamburger from '../static/hamburger.png';
import Sidenav from '../Sidenav';
import Homeicon from '../homeicon';
import spList from "./sponsors.json";

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function Sponsors() {
  return (
    <div>
      <Homeicon />
      <Sidenav />
      <div className="sponsor-wrapper">
        <img src={hamburger} alt="ham-menu" className="hamburger" onClick={openRightMenu} />
        <div className="sponsors">
          <div className="sp-head">
            <h1>Our Sponsors</h1>
          </div>
          <div className="sp-main">
            {spList.map(sponsor => {
              const pic_path = sponsor.path
              const pic_link = "https://www.facebook.com"

              return (
                <div className="sp-item">
                  <div className="sp-img">
                    <a href={pic_link} target="_blank"  rel="noopener noreferrer">
                    <img alt="sponsor" className="sp-img-tdm" src={require(`../static/sponsors/${pic_path}`)} />
                    </a> 
                  </div>
                  <div className="sp-line" />
                  <p>{sponsor.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;

