import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ProshowsComedy from '../static/litbg.jpg';
import ProshowsFusion from '../static/litbg.jpg';
import ProshowsDJ from '../static/litbg.jpg';
import ProshowsBollywood from '../static/litbg.jpg';

const proshows_images = [
  ["Comedy Night", ProshowsComedy],
  ["Fusion Night", ProshowsFusion],
  ["DJ Night", ProshowsDJ],
  ["Bollywood Night", ProshowsBollywood],
];

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
              style={{backgroundImage: `url(${proshows_images[i][1]})`}}
            >
              <h1 className="center">{proshows_images[i][0]}</h1>
              <br /><br />
              <div class="waves-effect waves-light btn center black" onClick={event => onViewClick(event, i)}>View Pro Show</div>
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
        numberOfCards={3}
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
            style={{backgroundImage: `url(${proshows_images[i][1]})`}}
          >
            <h1 className="center">{proshows_images[i][0]}</h1>
            <br /><br />
            <div class="waves-effect waves-light btn center black" onClick={event => onViewClick(event, i)}>View Pro Show</div>
          </div>
        )}
      </ItemsCarousel>
    );
  }
}

export default CarouselP;
