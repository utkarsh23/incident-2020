import React from 'react';
import '../static/events.css';
import Carousel from './Carousel';
import Sidenav from '../Sidenav';
import hamburger from '../static/hamburger.png';

function onLeftiClose(events, index) {
  document.getElementById('events-' + index).style.display='none';
}

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function Events() {
  return (
    <div className="events-wrapper">
      <Sidenav />
      <img src={hamburger} alt="ham-menu" onClick={openRightMenu} className="hamburger" />
      <h1 className="events-heading">Events</h1>
      <div className="center events-bottom-carousel">
        <Carousel />
      </div>
      <div id="events-0" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 0)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Dance Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div id="events-1" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 1)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Music Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div id="events-2" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 2)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Lit Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div id="events-3" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 3)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Biz Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div id="events-4" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 4)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Gaming &amp; Fine Arts</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div id="events-5" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 5)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Haute Couture</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div id="events-6" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 6)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Sports Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
