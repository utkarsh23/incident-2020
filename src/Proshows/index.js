import React from 'react';
import '../static/proshows.css';
import Sidenav from '../Sidenav';
import Homeicon from '../homeicon';
import hamburger from '../static/hamburger.png';
import CarouselP from './Carousel';

// function onLeftiCloseP(events, index) {
//   document.getElementById('proshows-' + index).style.display='none';
// }

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function ProShows() {
  return (
    <div className="proshows-wrapper">
      <Homeicon />
      <Sidenav />
      <img src={hamburger} alt="ham-menu" onClick={openRightMenu} className="hamburger" />
      <h1 className="proshows-heading">Proshows</h1>
      <div className="center proshows-bottom-carousel">
        <CarouselP />
      </div>
      {/* Comedy Night */}
      <div id="proshows-0" className="w3-modal">
        {/* <div className="w3-animate-bottom proshows-modal-content">
          <header className="">
            <span onClick={events => onLeftiCloseP(events, 0)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center proshows-modal-heading">Comedy Night</h2>
          </header>
          <div className="proshows-modal-wrapper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet scelerisque odio, sit amet blandit lectus. Suspendisse molestie tempor accumsan. Pellentesque urna nibh, posuere eu sem nec, euismod rhoncus dolor. Sed ullamcorper augue a tellus dapibus, dignissim malesuada urna ullamcorper.
          </div>
        </div> */}
      </div>
      
      {/* Fusion Night */}
      <div id="proshows-1" className="w3-modal">
        <div className="w3-animate-bottom proshows-modal-content">
          {/* <header className="">
            <span onClick={events => onLeftiCloseP(events, 1)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center proshows-modal-heading">Fusion Night</h2>
          </header>
          <div className="proshows-modal-wrapper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet scelerisque odio, sit amet blandit lectus. Suspendisse molestie tempor accumsan. Pellentesque urna nibh, posuere eu sem nec, euismod rhoncus dolor. Sed ullamcorper augue a tellus dapibus, dignissim malesuada urna ullamcorper.
          </div> */}
        </div>
      </div>
      
      {/* DJ Night */}
      <div id="proshows-2" className="w3-modal">
        <div className="w3-animate-bottom proshows-modal-content">
          {/* <header className="">
            <span onClick={events => onLeftiCloseP(events, 2)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center proshows-modal-heading">DJ Night</h2>
          </header>
          <div className="proshows-modal-wrapper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet scelerisque odio, sit amet blandit lectus. Suspendisse molestie tempor accumsan. Pellentesque urna nibh, posuere eu sem nec, euismod rhoncus dolor. Sed ullamcorper augue a tellus dapibus, dignissim malesuada urna ullamcorper.
          </div> */}
        </div>
      </div>
      
      {/* Bollywood Night */}
      <div id="proshows-3" className="w3-modal">
        {/* <div className="w3-animate-bottom proshows-modal-content">
          <header className="">
            <span onClick={events => onLeftiCloseP(events, 3)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center proshows-modal-heading">Bollywood Night</h2>
          </header>
          <div className="proshows-modal-wrapper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet scelerisque odio, sit amet blandit lectus. Suspendisse molestie tempor accumsan. Pellentesque urna nibh, posuere eu sem nec, euismod rhoncus dolor. Sed ullamcorper augue a tellus dapibus, dignissim malesuada urna ullamcorper.
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ProShows;