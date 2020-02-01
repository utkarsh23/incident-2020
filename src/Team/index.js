import React from 'react';
// import { Link } from 'react-router-dom';
import TeamCard from './teamCard.js';
import FilterTab from './filterTab.js';
import './style.css'
import './main.js'
import teamData from './teamData.json'
// import TeamSectionImage from '../static/TeamSectionImage.png'
import mixitup from 'mixitup'
import teamBanner from '../static/teambanner.png';


class Team extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line 
    const mixer = mixitup('.con');
  }

  render() {
    return (
      <div className="team-wrapper">
        {/* <div class="hero">
          <div class="heroText">
            Meet our <span style={{ color: "white" }}>Amazing</span> Team which made this possible
          </div>
          <div class="heroText">
            <img alt="animated gimmick" id="heroImg" src={TeamSectionImage}></img>
          </div>
        </div> */}
        <img src={teamBanner} alt="team-banner" className="team-banner" />
        <div className="team-heading">The Incident Team</div>
        <div class="teamSection">
          <FilterTab></FilterTab>
          <div class="con">
            {
              teamData.technical.map(value => {
                return (
                  <TeamCard
                    category={"a"}
                    name={value.name}
                    role={value.role}
                    website={value.website}
                    instagram={value.instagram}
                    linkedin={value.linkedin}
                  />
                )
              })
            }
            {
              teamData.organising.map(value => {
                return (
                  <TeamCard
                    category={"b"}
                    name={value.name}
                    role={value.role}
                    website={value.website}
                    instagram={value.instagram}
                    linkedin={value.linkedin}
                  />
                )
              })
            }
            {
              teamData.faculty.map(value => {
                return (
                  <TeamCard
                    category={"c"}
                    name={value.name}
                    role={value.role}
                    website={value.website}
                    instagram={value.instagram}
                    linkedin={value.linkedin}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Team;

// <div>
//       <h1>Team Page</h1>
//       <Link to="/">
//         <button>Home</button>
//       </Link>
//     </div>
