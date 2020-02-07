import React from 'react';
import TeamCard from './teamCard.js';
import FilterTab from './filterTab.js';
import './style.css'
import './main.js'
import teamData from './teamData.json'
import mixitup from 'mixitup'
import teamBanner from '../static/teambanner.png';
import teamBannerM from '../static/teambanner-m.png';
import Sidenav from '../Sidenav';
import hamburger from '../static/hamburger.png';
import Homeicon from '../homeicon';


function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

class Team extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line 
    // const mixer = mixitup('.con');
  }

  // render() {
  //   return (
  //     <div className="team-wrapper">
  //       <Homeicon />
  //       <Sidenav />
  //       <img src={teamBanner} alt="team-banner" className="team-banner hide-on-small-only" />
  //       <img src={teamBannerM} alt="team-banner" className="team-banner show-on-small" />
  //       <div className="team-heading">The Incident Team</div>
  //       <div class="teamSection">
  //         <FilterTab></FilterTab>
  //         <div class="con">
  //           {
  //             teamData.technical.map(value => {
  //               return (
  //                 <TeamCard
  //                   category={"a"}
  //                   name={value.name}
  //                   role={value.role}
  //                   website={value.website}
  //                   instagram={value.instagram}
  //                   linkedin={value.linkedin}
  //                 />
  //               )
  //             })
  //           }
  //           {
  //             teamData.organising.map(value => {
  //               return (
  //                 <TeamCard
  //                   category={"b"}
  //                   name={value.name}
  //                   role={value.role}
  //                   website={value.website}
  //                   instagram={value.instagram}
  //                   linkedin={value.linkedin}
  //                 />
  //               )
  //             })
  //           }
  //           {
  //             teamData.faculty.map(value => {
  //               return (
  //                 <TeamCard
  //                   category={"c"}
  //                   name={value.name}
  //                   role={value.role}
  //                   website={value.website}
  //                   instagram={value.instagram}
  //                   linkedin={value.linkedin}
  //                 />
  //               )
  //             })
  //           }
  //         </div>
  //       </div>
  //       <img src={hamburger} alt="ham-menu" onClick={openRightMenu} className="hamburger" />
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <Homeicon />
        <Sidenav />
        <div className="team-wrapper-two">
          <img src={hamburger} alt="ham-menu" className="hamburger" onClick={openRightMenu} />
          <br /><br />
          <h1 className="sponsors-heading center">Team Page</h1>
          <br /><br /><br /><br />
          <h3 className="sponsors-coming-soon center">Coming Soon.</h3>
        </div>
      </div>
    )
  }
}

export default Team;
