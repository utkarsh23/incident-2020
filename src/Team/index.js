import React from 'react';
import { Link } from 'react-router-dom';
import TeamCard from './teamCard.js';
import FilterTab from './filterTab.js';
import './style.css'
import './main.js'
import teamData from './teamData.json'


function Team() {
  return (
    <div>
    <FilterTab></FilterTab>
    <div class = "con">
    {
      teamData.technical.map(value => {
        return (
          <TeamCard
          name = {value.name}
          role = {value.role}
          website = {value.website}
          instagram = {value.instagram}
          linkedin = {value.linkedin}
          />
        )
      })
    }
    </div>
    </div> 
  );
}


export default Team;



// <div>
//       <h1>Team Page</h1>
//       <Link to="/">
//         <button>Home</button>
//       </Link>
//     </div>
