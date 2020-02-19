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

const back_images = [
  [AakashGupta,Aakash,BigYSpeckle,Layer1,ComedyNight],
  [TB1,TB2,TB3,TBLogo,TBEmblem,FusionNight]
]

const image_ids = [
  ["aakash-gupta","aakash-1","blur-1","blur-2","comedy-night"],
  ["tb1","tb2","tb3","tblogo","tbemblem","fusion-night"]
]

const move_params = [
  [0.05,0,0,0,0,0,-0.08,0,450,0.15,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,-0.1,-0.03,0,0,0,0]
]

function MoveImages(event,i){
  const window_width = window.innerWidth;
  const mouse_posX = event.pageX;
  const dispX = mouse_posX - window_width/2;
  const dispY = event.pageY - window.innerHeight/2;

  for(var ele=0;ele<image_ids[i].length;ele++){
    var param_var = 3* ele;
    document.getElementById(image_ids[i][ele]).style.transform = "translate3d("+ move_params[i][param_var] * dispX +"px,"+ move_params[i][param_var+1] * dispY +"px,"+move_params[i][param_var+2]+"px)";
  }
}

function image_loop(i){
  const ele_len = image_ids[i].length;
  const img_arr = [];

  for(var j=0;j<ele_len;j++){
    img_arr.push(
      <img alt="looping" src={back_images[i][j]} id={image_ids[i][j]} />
    )
  }
  
  return(
    img_arr
  )
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
          {Array.from(new Array(2)).map((_, i) =>
            <div
              className="proshows-card-wrapper"
              key={i}
            >
              {image_loop(i)}
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
        {Array.from(new Array(2)).map((_, i) =>
          <div
            className="proshows-card-wrapper"
            key={i}
            onMouseMove = {event => MoveImages(event,i)}
          >
            {image_loop(i)}
          </div>
        )}
      </ItemsCarousel>
    );
  }
}

export default CarouselP;
