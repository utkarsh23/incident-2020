import React from "react";
import "./index.css";
import Incident from "../static/incident.jpg";
import Symbol from "../static/i-symbol.png";
import Festival from "../static/festival.png";
import Leadership from "../static/leadership.png";
import Travel from "../static/travel.png";
import Certificate from "../static/certificate.png";
export default function index() {
  return (
    <div className="wrapper">
      <div className="all">
        <div className="row">
          <div className="backimg col l12">
            <img className="img1 " src={Incident} alt="Incident" />
            <div className="welcome"> Welcome to </div>
            <div className="cap">
              {" "}
              Campus <br /> Ambassador <br /> Program
            </div>
            <p className="apply-p">
              <a
                href="https://forms.gle/NsefKmKmcwvKNRAu6"
                className="btn btn-primary px-4 py-3 mt-3 apply"
              >
                Apply here
              </a>
            </p>
          </div>
        </div>

        <div className="about-cap">
          <div className="row">
            <div className="col l4 m12 s12">
              <img src={Symbol} className="about-cap-img" alt="Inci-Symbol" />
            </div>
            <div className="col l1"></div>
            <div className="col l7 m12 s12">
              <div className="row">
                <div className="col l12 m12 s12">
                  <h3> About Campus Ambassador Program</h3>
                  <p className="about-content">
                    INCI-CAP, or the Incident Campus Ambassador Programme, is an
                    opportunity for students to represent the fest in their
                    respective colleges. Get updates about the fest first hand
                    and also enjoy the perks of Incident merchandise, goodies,
                    free passes and also a chance to win a free trip.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col l4 m4 s12">
                  <strong className="number" data-number="70">
                    70+
                  </strong>
                  <span>Cities</span>
                </div>
                <div className="col l4 m4 s12">
                  <strong className="number" data-number="310">
                    310+
                  </strong>
                  <span>Colleges</span>
                </div>
                <div className="col l4 m4 s12">
                  <strong className="number" data-number="35">
                    38000+
                  </strong>
                  <span>Footfall</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-cap">
          <h3> Why CAP ?</h3>
          <div className="row">
            <div className="col l6 m12 s12">
              <div className="project">
                <div className="col l4 m4 s12">
                  <img className="why-cap-img" src={Festival} alt="Festival" />
                </div>
                <div className="col l8 m8 s12">
                  <div className="why-cap-content">
                    Be a part of the largest student organised college festival
                    in Karnataka. With the upcoming version marking 40 years
                    since its inception in 1980, the Ruby Jubilee Edition of
                    Incident, set along the banks of the Indian Ocean, promises
                    to be an unforgettable experience spanning over four days
                    from February 28th to March 2nd.
                  </div>
                </div>
              </div>
            </div>

            <div className="col l6 m12 s12">
              <div className="project">
                <div className="col l4 m4 s12">
                  <img
                    className="why-cap-img"
                    src={Leadership}
                    alt="Festival"
                  />
                </div>
                <div className="col l8 m8 s12">
                  <div
                    className="why-cap-content"
                    style={{ color: "rgb(100, 98, 98)" }}
                  >
                    Develop interpersonal and leadership skills while
                    familiarising yourself with brand development and strategic
                    outreach analyses. Also connect with prominent ambassadors
                    from various colleges, thus developing and expanding your
                    network to an elite group of student leaders, influencers
                    and hustlers across the country.
                  </div>
                </div>
              </div>
            </div>

            <div className="col l6 m12 s12">
              <div className="project">
                <div className="col l4 m4 s12">
                  <img className="why-cap-img" src={Travel} alt="Festival" />
                </div>
                <div className="col l8 m8 s12">
                  <div
                    className="why-cap-content"
                    style={{ color: "rgb(100, 98, 98)" }}
                  >
                    Other perks include that of free travel, accommodation and
                    passes for all pro-shows and pro-nites that take place
                    during Incident, which has previously hosted various
                    big-name artists, including Vishal-Shekhar, Benny Dayal,
                    Amaal Mallik, Sunidhi Chauhan and KK along with bands like
                    Masala Coffee and the Spain based Itaca Band.
                  </div>
                </div>
              </div>
            </div>

            <div className="col l6 m12 s12">
              <div className="project">
                <div className="col l4 m4 s12">
                  <img
                    className="why-cap-img"
                    src={Certificate}
                    alt="Certificate"
                  />
                </div>
                <div className="col l8 m8 s12">
                  <div
                    className="why-cap-content"
                    style={{ color: "rgb(100, 98, 98)" }}
                  >
                    Attain an i-CAP certificate, validating your efforts and
                    participation in Incident 2020. Exclusive merchandise and
                    goodies await you, should you choose to sign up for i-CAP,
                    also on line is a free trip to place and details go here, so
                    get to work immediately!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq">
        <div className="faq2">
          <h4> FAQ </h4>
          <div className="row">
            <div className="col l1"></div>
            <div className="col l11 s12 m12">
              <span className="question"> What happens after I apply? </span>
              <p>
                {" "}
                Once the selection process is completed, you will get notified
                if you are selected.
              </p>
            </div>
            <div className="col l1"></div>
            <div className="col l11 s12 m12">
              <span className="question">
                {" "}
                What is my responsibility being a part of the program?{" "}
              </span>
              <p>
                {" "}
                As a part of this program, you are required to ideate on and
                execute innovative events, plan, work actively for social media
                publicity, strategize and drive word of mouth publicity
                campaigns in campus events and activities{" "}
              </p>
            </div>
            <div className="col l1"></div>
            <div className="col l11 s12 m12">
              <span className="question"> Who can apply? </span>
              <p>
                {" "}
                Students from all colleges across the globe are welcome to
                apply.{" "}
              </p>
            </div>
            <div className="col l1"></div>
            <div className="col l11 s12 m12">
              <span className="question">
                {" "}
                What are the incentives for being a part of this program?{" "}
              </span>
              <p>
                {" "}
                This is your opportunity to develop strategic, communication and
                leadership skills and get rewarded for your work. Apart from the
                learning experience involved that will benefit your career, you
                will also get incentives like Incident exclusive merchandise &
                accessories, Goodies worth 50K and many more prizes. Top
                students also stand a chance to avail a free trip.
              </p>
            </div>
            <div className="col l1"></div>
            <div className="col l11 s12 m12">
              <span className="question">
                {" "}
                Who can I contact if I have any questions regarding the college
                connect program?
              </span>
              <p>
                {" "}
                You can contact us at <b>incidentpublicity@nitk.edu.in </b>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row monserrat center-align sponsor-contact">
        <div className="col l12 m12 s12">
          <div className="col l12 m12 s12"></div>
          <p className="monserrat contact-title">For any queries :</p>
        </div>

        <div className="col s12 m6 sponsor-col">
          <h5 className="black-text">
            <span style={{ fontWeight: "300" }}>
              <br />
              <b style={{ fontSize: "18px", fontWeight: "200" }}>
                Publicity Convenor:
              </b>
              <br />
              <span style={{ fontSize: "20px" }}>
                Sumanth Nayak <br /> +91&nbsp;8660&nbsp;296&nbsp;350
                <br /> incidentpublicity@nitk.edu.in
              </span>
              <br />
            </span>
          </h5>
        </div>
        <div className="col s12 m6 sponsor-col">
          <h5 className="black-text">
            <span style={{ fontWeight: "300" }}>
              <br />
              <b style={{ fontSize: "18px" }}>I-CAP Coordinator:</b>
              <br />
              <span style={{ fontSize: "20px" }}>
                Rahul Aladageri <br /> +91&nbsp;9148&nbsp;477&nbsp;067
                <br /> incidentpublicity@nitk.edu.in
              </span>
              <br />
              <br />
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
}
