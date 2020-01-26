import React from 'react';
import Lighthouse from '../static/Lighthouse.png';
import AboutContent from './AboutContent.json';
import './style.css'
import { Link } from 'react-router-dom';

class About extends React.Component {
    constructor(props){
      super(props);
      this.state={
  
      }
    }
    render(){
      return (
        <div>
          <img src={Lighthouse}></img>
          <div class="background"></div>
          <div class="hero">
            <h1>
              {AboutContent.title}
            </h1>
            <p>
              {AboutContent.paragraph1}          
            </p>
            <p>
              {AboutContent.paragraph2}
            </p>
            <p>
              {AboutContent.paragraph3}
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      );
    }  
}
    
  
export default About;


// <div>
//   <h1>About Us Page</h1>
//   <Link to="/">
//     <button>Home</button>
//   </Link>
// </div>
  

