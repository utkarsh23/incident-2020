import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ProshowsComedy from '../static/litbg.jpg';
import ProshowsFusion from '../static/litbg.jpg';
import ProshowsDJ from '../static/litbg.jpg';
import ProshowsBollywood from '../static/litbg.jpg';
import AakashGupta from '../static/proshow/ag2.png';
import Aakash from '../static/proshow/Aakash1.png';
import Blur1 from '../static/proshow/Blur1.png';
import Blur2 from '../static/proshow/Blur2.png';
import ComedyNight from '../static/proshow/ComedyNight.png';
import PatternBlur from '../static/proshow/PatternBlur.png';
import BigYSpeckle from '../static/proshow/big_y_speckle.png';
import Layer0 from '../static/proshow/l0.png';
import Layer1 from '../static/proshow/l1.png';

const proshows_images = [
  ["Comedy Night", ProshowsComedy, AakashGupta],
  ["Fusion Night", ProshowsFusion, AakashGupta],
  ["DJ Night", ProshowsDJ, AakashGupta],
  ["Bollywood Night", ProshowsBollywood, AakashGupta],
];

const back_images = [
  [Aakash,Blur1,Blur2,ComedyNight,PatternBlur],
  [Aakash,Blur1,Blur2,ComedyNight,PatternBlur],
  [Aakash,Blur1,Blur2,ComedyNight,PatternBlur],
  [Aakash,Blur1,Blur2,ComedyNight,PatternBlur],
]

//this should contain image, its class and the parameter of movement
const image_classes = [
  ["aakash-gupta","blur-1","blur-2","comedy-night"]
]

const image_params = [
  
]

function onViewClick(event, index) {
  document.getElementById('proshows-' + index).style.display='block';
}

function MoveImages(event,i){

  // console.log(image_classes[i].length);
  const window_width = window.innerWidth;
  const mouse_posX = event.pageX;
  const dispX = mouse_posX - window_width/2;

  //move the elements
  // for(var ele=0;ele<proshow_classes[i].length;ele=ele+2){
  //   document.getElementsByClassName(`proshow_classes[i][ele]`).style.transform = 'translateX()';
  // }
}

function image_loop(i){
  // const ele_len = proshow_classes[i].length;
  // const img_arr = [];

  // for(var j=0;j<ele_len;j=j+3){
  //   img_arr.push(
  //     <img src={proshow_classes[i][j]} className={proshow_classes[i][j+1]} />
  //   )
  // }
  // return(
  //   {img_arr}
  // )
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
              // style={{backgroundImage: `url(${proshows_images[i][1]})`}}
              style = {{backgroundColor: 'transparent'}}
            >
              {/* <h1 className="center">{proshows_images[i][0]}</h1>
              <br /><br />
              <div class="waves-effect waves-light btn center black" onClick={event => onViewClick(event, i)}>View Pro Show</div> */}
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
            onMouseMove = {event => MoveImages(event,i)}
          >

            
            <img src={proshows_images[i][2]} alt="aakash-gupta" className="aakash-gupta" />
            <img src={back_images[i][0]} alt="aakash" className="aakash-1" />
            <img src={BigYSpeckle} alt="aakash" className="blur-1" />
            <img src={Layer1} alt="aakash" className="blur-2" />
            <img src={back_images[i][3]} alt="aakash" className="comedy-night" />
            
          </div>
        )}
      </ItemsCarousel>
    );
  }
}

export default CarouselP;
