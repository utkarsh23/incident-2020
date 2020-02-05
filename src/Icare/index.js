import React from 'react';
import ICareBottom from './ICareBottom';
import hamburger from '../static/hamburger.png';
import Sidenav from '../Sidenav';
import "./styles.css";
import Homeicon from '../homeicon';


function onLeftiClose() {
  document.getElementById('icare-left').style.display='none';
}

function onTopiClose() {
  document.getElementById('icare-top').style.display='none';
}

function onBottomiClose() {
  document.getElementById('icare-bottom').style.display='none';
}

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function Icare() {
  return (
    <div className="Icare">
      <img src={hamburger} alt="ham-menu" onClick={openRightMenu} className="hamburger" />
      <ICareBottom />
      <Homeicon />
      <Sidenav />
      <div id="icare-left" className="w3-modal">
        <div className="w3-modal-content w3-animate-bottom icare-modal-content">
          <header className="">
            <span onClick={onLeftiClose}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center icare-modal-heading">i-Care</h2>
          </header>
          <div className="">
            <p className="icare-modal-para">A lot of children belonging to the fishing community in Mangalore dropout of school to help their parents in their daily chores.<br />Beach school tries to reduce this student drop out by instilling in them, an interest towards practical science, mathematics &amp; astronomy.</p>
            <br />
            <p className="right-align icare-modal-para">Volunteers of i-Care teach extra curricular activities like origami, dance to differently-abled children in Lion's School, Surathkal.<br />We plan to have many more such uplifting i-Care activities in the future.</p>
          </div>
        </div>
      </div>
      <div id="icare-top" className="w3-modal">
        <div className="w3-modal-content w3-animate-bottom icare-modal-content">
          <header className="">
            <span onClick={onTopiClose}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center icare-modal-heading">Plastic Recycling</h2>
          </header>
          <div className="">
            <p className="icare-modal-para">Team Incident in association with the Centre for system design, NITK Surathkal have come up with a plastic recycling initiative where student volunteers of I-Care gather waste plastic alongside beaches and recycle them in the campus using injection moulding to produce useful products like keychains, clips etc.</p>
          </div>
        </div>
      </div>
      <div id="icare-bottom" className="w3-modal">
        <div className="w3-modal-content w3-animate-bottom icare-modal-content">
          <header className="">
            <span onClick={onBottomiClose}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center icare-modal-heading">Beach Schooling</h2>
          </header>
          <div className="">
            <p className="icare-modal-para">14 solar lamps were distributed to children of the beach school and 5 solar lamps to the children from NITK Kannada Medium School to light up their homes on Children's Day.</p>
            <br />
            <p className="right-align icare-modal-para">35 additional solar lamps to tenth standard students of NITK Kannada Medium School to facilitate their preparations for board examinations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icare;
