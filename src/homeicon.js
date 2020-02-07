import React from 'react';
import './static/homeicon.css';
import homeicon from './static/inci_logo_topleft.png';

function Homeicon() {
    return(
        <div>
             <a href="/">
                <img src={homeicon} alt="ham-menu" className="homeicon" />
            </a>
        </div>
    )
}

export default Homeicon;