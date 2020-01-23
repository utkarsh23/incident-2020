import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';
import video from '../static/incident2020.webm';

var VideoPlayer = () => {
    return(
        <div className="player-wrapper">
            <ReactPlayer 
                className="react-player"
                url = {video}
                playing = "true"
                loop = "true"
                fluid = "false"
                width= '100%'
                height = '100%'
            />
        </div>
    )
}

export default VideoPlayer