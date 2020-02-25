import React from 'react';
import './static/loader.css';
import LoadGif from './static/loading.gif';

function Loader() {
    return (
        <div class="wrapper">
    <div class="loader">
        <div className="loading-gif">
            <img className="loading-gif-desktop" src={LoadGif} alt="loading-gif" />
        </div>

        <svg class="loading-animation" xmlns="http://www.w3.org/2000/svg" />
            <span class="tdm loading-animation__path ">
                <svg>
                    <path d="M35,10
                    l20,0 -10,0 0,82 -10,0 20,0" />
                </svg>
            </span>
            <span class="tdm tdm-n loading-animation__path">
                <svg>
                    <path d="M5,10
                    l00,0 0,0 0,85
                    M5,10
                    l00,0 0,0 65,85
                    M 70 10 v 85 
                    " />
                </svg>
            </span>
            <span class="tdm tdm-c loading-animation__path">
                <svg>
                    <path d="M60,10
                    C-10,0 -10,100 60,90" />
                </svg>
            </span>
            <span class="tdm tdm-i2 loading-animation__path">
                <svg>
                    <path d="M35,10
                    l20,0 -10,0 0,82 -10,0 20,0" />
                </svg>
            </span>
            <span class="tdm tdm-d loading-animation__path">
                <svg>
                    <path d="M10,10
                    C90,10 90,90 10,90z" />
                </svg>
            </span>
            <span class="tdm tdm-e loading-animation__path">
                <svg>
                    <path d="M65,10
                    l-60,0 0,80 60,0
                    M5,50
                    l50,0" />
                </svg>
            </span>
            <span class="tdm tdm-n2 loading-animation__path">
                <svg>
                    <path d="M5,10
                    l00,0 0,0 0,85
                    M5,10
                    l00,0 0,0 65,85
                    M 70 10 v 85 
                    " />
                </svg>
            </span>
            <span class="tdm tdm-t loading-animation__path">
                <svg>
                    <path d="M25,10
                    l50,0 -25,0 0,85" />
                </svg>
            </span>
    </div>
</div>
    )
}

export default Loader;