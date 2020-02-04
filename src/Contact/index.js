import React from "react";
import { Link } from "react-router-dom";
import hamburger from '../static/hamburger.png';
import Sidenav from '../Sidenav';
import PhoneSVG from './PhoneSVG';
import "../static/contact.css";

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function Contact() {
  return (
    <div className="contact">
      <Sidenav />
      <PhoneSVG />
      <img src={hamburger} alt="ham-menu" className="hamburger" onClick={openRightMenu} />
      <div className="contact-heading">Contact Us</div>
      <div className="grid-container">
        <div className="card1">
          <h2 style={{
            fontWeight: "bold",
            color: "#424242",
            fontFamily: 'YouthTouchDEMO-Regular, Youth Touch DEMO',
            margin: 20,
            marginBottom: 15,
            fontSize: '3em',
          }}
          >To Sponsor</h2>
          <h6 style={{ margin: 5, fontSize: '1.2em' }}>Vaibhav M Rai</h6>
          <h6 style={{ margin: 5, fontSize: '1.2em' }}>Marketing Head</h6>
          <h6 style={{ margin: 5, fontSize: '1.2em' }}>+91&nbsp;8073&nbsp;368&nbsp;756</h6>
          <h6 style={{ margin: 5, fontSize: '1.2em' }}><a href="mailto:incidentmarketing@nitk.edu.in" className="mail-link">
            incidentmarketing@nitk.edu.in
          </a></h6>
        </div>
        <div className="card2">
          <h2 style={{
            fontWeight: "bold",
            color: "#424242",
            fontFamily: 'YouthTouchDEMO-Regular, Youth Touch DEMO',
            margin: 20,
            marginBottom: 15,
            fontSize: '3em',
          }}
          >For other queries</h2>
          <h6 style={{ margin: 5, fontSize: '1.2em' }}>Sachin V Acharya</h6>
          <h6 style={{ margin: 5, fontSize: '1.2em' }}>Convenor</h6>
          <h6 style={{ margin: 5, fontSize: '1.2em' }}>+91&nbsp;8971&nbsp;569&nbsp;766</h6>
          <h6 style={{ margin: 5, fontSize: '1.2em' }}><a href="mailto:incidentconvenor@nitk.edu.in" className="mail-link">
            incidentconvenor@nitk.edu.in
          </a></h6>
        </div>
      </div>
      <div className="social-contact-wrapper">
        <Link to="#" className="social-contact fa fa-facebook"></Link>
        <Link to="#" className="social-contact fa fa-twitter"></Link>
        <Link to="#" className="social-contact fa fa-youtube-play"></Link>
        <Link to="#" className="social-contact fa fa-instagram"></Link>
        <Link to="#" className="social-contact fa fa-linkedin"></Link>
      </div>
    </div>
  );
}

export default Contact;
