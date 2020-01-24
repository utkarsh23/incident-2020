import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

function Icare() {
  return (
    <div className="Icare">
      <div className="iContainer">
        <div class="abc" />

        <h1>
          <i>i-CARE</i>
        </h1>

        <center>
          <img
            className="I-care2"
            src="http://incident.nitk.ac.in/assets/images/icare/icare_intro_1.jpg"
            width="100%"
          />
        </center>

        <div className="iCard-left">
          <div className="iPara">
            {" "}
            A lot of children belonging to the fishing community in Mangalore
            dropout of school to help their parents in their daily chores.
            <br />
            Beach school tries to reduce this student drop out by instilling in
            them, an interest towards practical science, mathematics &
            astronomy.
            <br />
            <br />
            <br />
          </div>
          <div>
            <img
              className="I-care1"
              src=" http://incident.nitk.ac.in/assets/images/icare/icare_intro.jpg"
            />
          </div>
        </div>

        <div className="iCard-right">
          <div className="iPara">
            A lot of children belonging to the fishing community in Mangalore
            dropout of school to help their parents in their daily chores.
            <br />
            Beach school tries to reduce this student drop out by instilling in
            them, an interest towards practical science, mathematics &
            astronomy.
          </div>
          <div>
            {" "}
            <img
              className="I-care1"
              src=" http://incident.nitk.ac.in/assets/images/icare/icare_intro.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icare;
