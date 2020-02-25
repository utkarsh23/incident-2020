import React from 'react';
import './static/loaderMobile.css';
import LoadGif from './static/loading.gif';

function Loader() {
    return (
        <div class="wrapper">
        <div class="loader">
        <div className="m-loading-gif">
            <img className="loading-gif-mobile" src={LoadGif} alt="loading-gif" />
        </div>

        <svg class="loading-animation" xmlns="http://www.w3.org/2000/svg" />
            {/* I */}
            <span class="m-tdm m-tdm-i loading-animation__path ">
                <svg>
                    {/* change 82 */}
                    <path d="M10,10
                        l20,0 -10,0 0,52 -10,0 20,0" />
                </svg>
            </span>
            {/* N */}
            <span class="m-tdm m-tdm-n loading-animation__path">
                <svg>
                    {/* change 55, 40, 55, 55  */}
                    <path d="M5,10
                        l00,0 0,0 0,52
                        M5,10
                        l00,0 0,0 40,52
                        M 45 10 v 52
                    " />
                </svg>
            </span>
            {/* C */}
            <span class="m-tdm m-tdm-c loading-animation__path">
                <svg>
                    <path d="M40,10
                        C-10,5 -13,62 40,62" />
                </svg>
            </span>
            {/* I */}
            <span class="m-tdm m-tdm-i2 loading-animation__path">
                <svg>
                    <path d="M15,10
                        l20,0 -10,0 0,52 -10,0 20,0" />
                </svg>
            </span>
            {/* D */}
            <span class="m-tdm m-tdm-d loading-animation__path">
                <svg>
                    <path d="M10,10
                        C50,10 50,60 10,62z" />
                </svg>
            </span>
            {/* E */}
            <span class="m-tdm m-tdm-e loading-animation__path">
                <svg>
                    <path d="m 10 10 v 55 m 0 -55 h 28 m -28 25 h 28 m -28 29 h 28" />
                    {/* <path d="M65,10
                        l-60,0 0,52 30,0
                        M5,36
                        l30,0" /> */}
                </svg>
            </span>
            {/*N */}
            <span class="m-tdm m-tdm-n2 loading-animation__path">
                <svg>
                    <path d="M5,10
                        l00,0 0,0 0,52
                        M5,10
                        l00,0 0,0 40,52
                        M 45 10 v 52
                        " />
                </svg>
            </span>
            {/* T */}
            <span class="m-tdm m-tdm-t loading-animation__path">
                <svg>
                    <path d="M5,10
                        l40,0 -20,0 0,55" />
                </svg>
            </span>
    </div>
</div>
    )
}

export default Loader;