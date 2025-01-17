import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import AakashGupta from '../static/proshow/AG/AG.png';
import Aakash from '../static/proshow/AG/AG1.png';
import ComedyNight from '../static/proshow/AG/comedynight1.png';
import BigYSpeckle from '../static/proshow/AG/big_y_speckle.png';
import Layer1 from '../static/proshow/AG/l1.png';
import TB1 from '../static/proshow/TB/tb1.png';
import TB2 from '../static/proshow/TB/tb2.png';
import TB3 from '../static/proshow/TB/tb3.png';
import TBLogo from '../static/proshow/TB/logo.jpg';
import TBEmblem from '../static/proshow/TB/emblm.png';
import FusionNight from '../static/proshow/TB/fusion-night.png';
import SampleAudio from '../static/audio.mp3';
import TBAudio2 from '../static/proshow/TB/tb-aud-2.mp3';
import SSAudio from '../static/proshow/SS/ssaudio.mp3';
import SS from '../static/proshow/SS/ss.png';
import SSName from '../static/proshow/SS/ss-name.png';
import BollyNight from '../static/proshow/SS/Bollywood-night.png';
import spotlight1 from '../static/proshow/SS/spotlite1.png';
import spotlight2 from '../static/proshow/SS/spotlite2.png';
import SeekBody from '../static/proshow/Seek/DJSeek1.png';
import Seek from '../static/proshow/Seek/DJSeek2.png';
import SeekHand from '../static/proshow/Seek/DJSeek3.png';
import SeekGif from '../static/proshow/Seek/seek.gif';
import SeekAud from '../static/proshow/Seek/seek-aud.mp3';
import SeekBack from '../static/proshow/Seek/SeekBack.png';
import EDM from '../static/proshow/Seek/EDM.png';
import Night from '../static/proshow/Seek/Night.png';
import Tri1 from '../static/proshow/Seek/Tri1.png';
import Tri2 from '../static/proshow/Seek/Tri2.png';
import Danika from '../static/proshow/Danika/Danika.png';
import DanikaAud from '../static/proshow/Danika/DanikaAud.mp3';
import Note1 from '../static/proshow/Danika/note1.png'
import Note2 from '../static/proshow/Danika/note2.png'
import Note3 from '../static/proshow/Danika/note3.png'

const audio1 = new Audio(SampleAudio);
const audio2 = new Audio(TBAudio2);
const audio3 = new Audio(SeekAud);
const audio4 = new Audio(SSAudio);
const audio5 = new Audio(DanikaAud);

const back_images = [
  [AakashGupta, Aakash, BigYSpeckle, Layer1, ComedyNight],
  [TB1, TB2, TB3, TBLogo, TBEmblem, FusionNight],
  [SeekBody, Seek, SeekHand, SeekGif, SeekBack, EDM, Night, Tri1, Tri2],
  [SS, SSName, BollyNight, spotlight1, spotlight2],
  [Danika, Note1, Note2, Note3],
]

const image_ids = [
  ["aakash-gupta", "aakash-1", "blur-1", "blur-2", "comedy-night"],
  ["tb1", "tb2", "tb3", "tblogo", "tbemblem", "fusion-night"],
  ["seek1", "seek2", "seek3", "seek-gif", "seek-back", "edm", "night", "tri1", "tri2"],
  ["SS", "SSgif", "bolly", "spot1", "spot2"],
  ["Danika", "note1", "note2", "note3"]
]

const move_params = [
  [0.05, 0, 0, 0, 0, 0, -0.08, 0, 450, 0.15, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.1, -0.03, 0, 0, 0, 0],
  [0, 0, 0, 0.08, -0.08, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.07, -0.05, 0, 0.07, -0.05, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const audio_files = [audio1, audio2, audio3, audio4, audio5]

function MoveImages(event, i) {
  const window_width = window.innerWidth;
  const mouse_posX = event.pageX;
  const dispX = mouse_posX - window_width / 2;
  const dispY = event.pageY - window.innerHeight / 2;

  const rotate_left = dispX / 15;
  const rotate_right = dispY / 8 * -1;

  for (var ele = 0; ele < image_ids[i].length; ele++) {
    var param_var = 3 * ele;
    document.getElementById(image_ids[i][ele]).style.transform = "translate3d(" + move_params[i][param_var] * dispX + "px," + move_params[i][param_var + 1] * dispY + "px," + move_params[i][param_var + 2] + "px)";
    if (i == 3 && ele >= 3) {
      if (ele == 3) {
        document.getElementById(image_ids[i][ele]).style.transform = "rotateZ(" + rotate_left + "deg)"
        document.getElementById(image_ids[i][ele]).style.transformOrigin = "top right";
      } if (ele == 4) {
        document.getElementById(image_ids[i][ele]).style.transform = "rotateZ(" + rotate_right + "deg)"
        document.getElementById(image_ids[i][ele]).style.transformOrigin = "top left";
      }
    }
  }

  if (i) {
    audio_files[i].play();
  }
}

function image_loop(i) {
  const ele_len = image_ids[i].length;
  const img_arr = [];

  for (var j = 0; j < ele_len; j++) {
    img_arr.push(
      <img src={back_images[i][j]} id={image_ids[i][j]} alt="proshow-pics" />
    )
  }

  return (
    img_arr
  )
}

function stop_audio(x) {
  audio_files[x].pause();
  audio_files[x].currentTime = 0;
}

function onViewClick(event, index) {
  document.getElementById('proshows-' + index).style.display='block';
}

function CarouselP() {
  const isMobile = window.innerWidth <= 600;
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  if (isMobile) {
    return (
      <ItemsCarousel
        infiniteLoop={false}
        gutter={12}
        activePosition={'center'}
        chevronWidth={100}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={1}
        slidesToScroll={1}
        outsideChevron={false}
        showSlither={true}
        firstAndLastGutter={true}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={setActiveItemIndex}
        rightChevron={<i className="material-icons large">keyboard_arrow_right</i>}
        leftChevron={<i className="material-icons large">keyboard_arrow_left</i>}
      >
        {Array.from(new Array(4)).map((_, i) =>
          <div
            className="proshows-card-wrapper"
            key={i}
          >
            {image_loop(i)}
            <button className="register_eve" onClick={event => onViewClick(event, i)}> Book Tickets </button>
          </div>
        )}
      </ItemsCarousel>
    );
  }
  else {
    return (
      <ItemsCarousel
        infiniteLoop={false}
        gutter={12}
        activePosition={'center'}
        chevronWidth={100}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={1}
        slidesToScroll={1}
        outsideChevron={false}
        showSlither={true}
        firstAndLastGutter={true}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={setActiveItemIndex}
        rightChevron={<i className="material-icons large">keyboard_arrow_right</i>}
        leftChevron={<i className="material-icons large">keyboard_arrow_left</i>}
      >
        {Array.from(new Array(4)).map((_, i) =>
          <div
            className="proshows-card-wrapper"
            key={i}
            onMouseMove={event => MoveImages(event, i)}
            onMouseLeave={stop_audio(i)}
          >
            {image_loop(i)}
            <button className="register_eve" onClick={event => onViewClick(event, i)}> Book Tickets </button>
          </div>
        )}
      </ItemsCarousel>
    );
  }
}

export default CarouselP;
