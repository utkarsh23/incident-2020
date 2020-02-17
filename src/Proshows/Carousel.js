import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import AakashGupta from '../static/proshow/AG.png';
import Aakash from '../static/proshow/AG1.png';
import ComedyNight from '../static/proshow/comedynight1.png';
import BigYSpeckle from '../static/proshow/big_y_speckle.png';
import Layer1 from '../static/proshow/l1.png';

// const proshows_images = [
//   ["Comedy Night", ProshowsComedy, AakashGupta],
//   ["Fusion Night", ProshowsFusion, AakashGupta],
//   ["DJ Night", ProshowsDJ, AakashGupta],
//   ["Bollywood Night", ProshowsBollywood, AakashGupta],
// ];

const back_images = [
  [AakashGupta,Aakash,BigYSpeckle,Layer1,ComedyNight],
  [AakashGupta,Aakash,BigYSpeckle,Layer1,ComedyNight],
  [AakashGupta,Aakash,BigYSpeckle,Layer1,ComedyNight],
  [AakashGupta,Aakash,BigYSpeckle,Layer1,ComedyNight],
]

const image_classes = [
  ["aakash-gupta","aakash-1","blur-1","blur-2","comedy-night"],
  ["aakash-gupta1","aakash-11","blur-11","blur-21","comedy-night1"],
  ["aakash-gupta2","aakash-12","blur-12","blur-22","comedy-night2"],
  ["aakash-gupta3","aakash-13","blur-13","blur-23","comedy-night3"]
]

const move_params = [
  [0.05,0,0,0,0,0,-0.08,0,450,0.15,0,0,0,0,0],
  [0,0,0,0,0,0,-0.08,0,450,0.15,0,0,0,0,0],
  [0,0,0,0,0,0,-0.08,0,450,0.15,0,0,0,0,0],
  [0,0,0,0,0,0,-0.08,0,450,0.15,0,0,0,0,0],
]

function MoveImages(event,i){
  const window_width = window.innerWidth;
  const mouse_posX = event.pageX;
  const dispX = mouse_posX - window_width/2;

  for(var ele=0;ele<image_classes[i].length;ele++){
    var param_var = 3* ele;
    document.getElementById(image_classes[i][ele]).style.transform = "translate3d("+ move_params[i][param_var] * dispX +"px,"+ move_params[i][param_var+1] +"px,"+move_params[i][param_var+2]+"px)";
  }
}

function image_loop(i){
  const ele_len = image_classes[i].length;
  const img_arr = [];

  for(var j=0;j<ele_len;j++){
    img_arr.push(
      <img src={back_images[i][j]} id={image_classes[i][j]} />
    )
  }

  console.log("loop ended");
  
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
          {Array.from(new Array(4)).map((_, i) =>
            <div
              className="proshows-card-wrapper"
              key={i}
              style = {{backgroundColor: 'transparent'}}
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
        {Array.from(new Array(4)).map((_, i) =>
          <div
            className="proshows-card-wrapper"
            key={i}
            style = {{backgroundColor:'transparent'}}
            // onMouseMove = {event => MoveImages(event,i)}
          >
            {image_loop(i)}
          </div>
        )}
      </ItemsCarousel>
    );
  }
}

export default CarouselP;
