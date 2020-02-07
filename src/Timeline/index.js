import React, { Component } from "react";
import "./timeline.css";
import data from "./details.json";
import Observer from '@researchgate/react-intersection-observer';
import hamburger from '../static/hamburger.png';
import timeline1990 from '../static/1980timeline.jpeg';
import timeline1980 from '../static/1990timeline.jpeg';
import timeline1992 from '../static/1992timeline.jpeg';
import timeline2005 from '../static/2005timeline.jpeg';
import timeline2006 from '../static/2006timeline.jpeg';
import timeline2012 from '../static/2012timeline.jpeg';
import timeline2014 from '../static/2014timeline.jpg';
import timeline2015 from '../static/2015timeline.jpg';
import Sidenav from '../Sidenav';
import Homeicon from '../homeicon';

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

const images_list = [
  timeline1980,
  timeline1990,
  timeline1992,
  timeline2005,
  timeline2006,
  timeline2012,
  timeline2014,
  timeline2015
];


class Timeline extends Component {

  constructor(props) {
    super(props);
    this.handleVisible = this.handleVisible.bind(this);
  }

  handleVisible(event, index) {
    if (event.isIntersecting === true) {
      if (index === 0) {
        index = 1;
      }
      document.getElementsByClassName("timeline-wrapper")[0].style.backgroundImage = "url('" + images_list[index] + "')";
    }
  }

  render() {
    return (
      <div>
        <img src={hamburger} alt="ham-menu" onClick={openRightMenu} className="hamburger" />
        <Homeicon />
        <Sidenav />
        <div className="timeline-wrapper">
          <div className="timeline-container" id="timeline-1">
            <div className="timeline-header">
              <h2 className="timeline-header__title">Timeline</h2>
              <h3 className="timeline-header__subtitle">HISTORY OF INCIDENT</h3>
            </div>
            <div className="timeline">
              {data.map((d, index) => {
                return (
                  <Observer key={index} threshold={0.75} onChange={e => this.handleVisible(e, index) }>
                    <div
                      className="timeline-item timeline-item--active"
                      data-text={d.dataText}
                    >
                      <div className="timeline__content">
                        <img alt="inci-year" className="timeline__img" src={images_list[index]} />
                        <h2 className="timeline__content-title">{d.year}</h2>
                        <p className="timeline__content-desc">{d.content}</p>
                      </div>
                    </div>
                  </Observer>
                );
              })}
            </div>
          </div>
        </div>
        <img src={hamburger} alt="ham-menu" className="hamburger" onClick={openRightMenu} />
      </div>
    );
  }
}

export default Timeline;
