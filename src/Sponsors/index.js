import React from 'react';
import '../static/sponsors.css';
import hamburger from '../static/hamburger.png';
import Sidenav from '../Sidenav';
import Homeicon from '../homeicon';
import spList from "./sponsors.json";

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function Sponsors() {
  return (
    <div>
      <Homeicon />
      <Sidenav />
      <div className="sponsors-wrapper">
        <img src={hamburger} alt="ham-menu" className="hamburger" onClick={openRightMenu} />
        <br /><br />
        <h1 className="sponsors-heading center">Sponsors Page</h1>
        <br /><br /><br /><br />
        <h3 className="sponsors-coming-soon center">Coming Soon.</h3>
      </div>
    </div>
  );
}

// function Sponsors() {
//   return (
//     <div>
//       <Homeicon />
//       <Sidenav />
//       <div className="sponsor-wrapper">
//         <img src={hamburger} alt="ham-menu" className="hamburger" onClick={openRightMenu} />
//         <div className="sponsors">
//           <div className="sp-head">
//             <h1>Our Sponsors</h1>
//           </div>
//           <div className="sp-main">
//             {spList.map(sponsor => {
//               const inlStyle = {
//                 backgroundImage: "url(" + sponsor.link + ")"
//               };
//               return (
//                 <div className="sp-item">
//                   <div className="sp-img" style={inlStyle} />
//                   <div className="sp-line" />
//                   <p>{sponsor.title}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Sponsors;

