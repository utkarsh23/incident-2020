import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import EventDance from '../static/eventdance.png';
import EventMusic from '../static/eventmusic.png';
import EventLit from '../static/eventlit.png';
import EventBiz from '../static/eventbiz.png';
import EventGaming from '../static/eventgaming.png';
import EventHaute from '../static/eventhaute.png';
import EventSports from '../static/eventsports.png';
import EventBeach from '../static/eventbeach.png';
// import EventPhoto from '../static/eventphoto.png';

const event_images = [
  ["Dance Events", EventDance],
  ["Music Events", EventMusic],
  ["Lit Events", EventLit],
  ["Biz Events", EventBiz],
  ["Gaming & Fine Arts", EventGaming],
  ["Haute Couture", EventHaute],
  ["Sports Events", EventSports],
  ["Beach Events", EventBeach]
];

function onViewClick(event, index) {
  document.getElementById('events-' + index).style.display='block';
}

function Carousel() {
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
          {Array.from(new Array(8)).map((_, i) =>
            <div
              className="event-card-wrapper"
              key={i}
            >
              <h1 className="center">{event_images[i][0]}</h1>
              <br />
              <div className="event-card-img"><img className="event-category-img" src={event_images[i][1]} alt="event category" /></div>
              <br /><br />
              <div><a class="waves-effect waves-light btn center black" onClick={event => onViewClick(event, i)}>View Events</a></div>
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
        {Array.from(new Array(8)).map((_, i) =>
          <div
            className="event-card-wrapper"
            key={i}
          >
            <h1 className="center">{event_images[i][0]}</h1>
            <br />
            <div className="event-card-img"><img className="event-category-img" src={event_images[i][1]} alt="event category" /></div>
            <br /><br />
            <div><a class="waves-effect waves-light btn center black" onClick={event => onViewClick(event, i)}>View Events</a></div>
          </div>
        )}
      </ItemsCarousel>
    );
  }
}

export default Carousel;