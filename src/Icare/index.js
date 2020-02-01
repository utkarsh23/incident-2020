import React from 'react';
// import { Link } from 'react-router-dom';
import ICareBottom from './ICareBottom';
import hamburger from '../static/hamburger.png';
import "./styles.css";

function Icare() {
  return (
    <div className="Icare">
      <img src={hamburger} alt="ham-menu" className="hamburger" />
      <ICareBottom />
    </div>
  );
}

export default Icare;
