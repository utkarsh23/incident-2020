import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/i.png';
import '../static/home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="nav-links">
        <Link to="/events">Events</Link><br />
        <Link to="/timeline">Timeline</Link><br />
        <Link to="/contact">Contact Us</Link><br />
        <Link to="/sponsors">Sponsors</Link><br />
        <Link to="/about">About Us</Link><br />
        <Link to="/icare">i-Care</Link><br />
        <Link to="/team">Team</Link><br />
      </div>
    </div>
  );
}

export default Home;
