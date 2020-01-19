import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import Card from './cardComponent';
import aboutData from './about.json'

function About() {
  return (
    




    <div className="sliders">

    <h1 id = "title">
      About Us
    </h1>
    
    
      


{aboutData.map(value => {
  if(value.year == 2018){
    return(
      <Card
      state={" active"}
      year={value.year}
      title={value.title}
      p1={value.p1}
      p2={value.p2}
      p3={value.p3}
      p4={value.p4}
      />
    ) 
  }else{
    return(
      <Card
      state={""}
      year={value.year}
      title={value.title}
      p1={value.p1}
      p2={value.p2}
      p3={value.p3}
      p4={value.p4}
      />
    )
  }
  
})}

<div className="prevnext">
  <button className="prevnext-button" id="prev"></button>
  <button className="prevnext-button" id="next"> </button>
</div>
    
    
</div>







  );
}

export default About;


// <div>
//       <h1>About Us Page</h1>
//       <Link to="/">
//         <button>Home</button>
//       </Link>
//     </div>