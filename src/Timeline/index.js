import React from "react";
// import $ from "jquery";
import "./timeline.css";
import data from "./details.json";

function Timeline() {
  // useEffect(() => {
  //   (function($) {
  //     $.fn.timeline = function() {
  //       var selectors = {
  //         id: $(this),
  //         item: $(this).find(".timeline-item"),
  //         activeClass: "timeline-item--active",
  //         img: ".timeline__img"
  //       };
  //       selectors.item.eq(0).addClass(selectors.activeClass);
  //       selectors.id.css(
  //         "background-image",
  //         "url(" +
  //           selectors.item
  //             .first()
  //             .find(selectors.img)
  //             .attr("src") +
  //           ")"
  //       );
  //       var itemLength = selectors.item.length;
  //       $(window).scroll(function() {
  //         var max, min;
  //         var pos = $(this).scrollTop();
  //         selectors.item.each(function(i) {
  //           min = $(this).offset().top;
  //           max = $(this).height() + $(this).offset().top;
  //           var that = $(this);
  //           if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
  //             selectors.item.removeClass(selectors.activeClass);
  //             selectors.id.css(
  //               "background-image",
  //               "url(" +
  //                 selectors.item
  //                   .last()
  //                   .find(selectors.img)
  //                   .attr("src") +
  //                 ")"
  //             );
  //             selectors.item.last().addClass(selectors.activeClass);
  //           } else if (pos <= max - 300 && pos >= min) {
  //             selectors.id.css(
  //               "background-image",
  //               "url(" +
  //                 $(this)
  //                   .find(selectors.img)
  //                   .attr("src") +
  //                 ")"
  //             );
  //             selectors.item.removeClass(selectors.activeClass);
  //             $(this).addClass(selectors.activeClass);
  //           }
  //         });
  //       });
  //     };
  //   })($);

  //   $("#timeline-1").timeline();
  // }, []);
  return (
    <div>
      <div className="timeline-container" id="timeline-1">
        <div className="timeline-header">
          <h2 className="timeline-header__title">Timeline</h2>
          <h3 className="timeline-header__subtitle">HISTORY OF INCIDENT</h3>
        </div>
        <div className="timeline">
          {data.map(d => {
            return (
              <div
                className="timeline-item timeline-item--active"
                data-text={d.dataText}
              >
                <div className="timeline__content">
                  <img ALT="inci-year" className="timeline__img" src={d.img} />
                  <h2 className="timeline__content-title">{d.year}</h2>
                  <p className="timeline__content-desc">{d.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
