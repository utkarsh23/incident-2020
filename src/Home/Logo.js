import React from 'react';
import '../static/logo.css';
import Dial from '../static/dial.png';
import Logoprops from '../static/logoprops.png';

function Logo() {
  return (
    <svg className="App-logo" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 544.20624 554.98226">
      <g id="Layer_1_Applogo" data-name="Layer 1">
        <image width="717" height="942" transform="translate(2.22775 2.92684) scale(0.75279)" href={Dial} />
      </g>
      <g id="Layer_2_Applogo" data-name="Layer 2">
        <image width="717" height="942" transform="scale(0.759)" href={Logoprops} />
      </g>
    </svg>
  );
}

export default Logo;
