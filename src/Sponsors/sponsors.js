import React from 'react';
import './style.css';
import './main.js';
import go from '../Sponsors/sponsors_images/go.png';
import g2 from '../Sponsors/sponsors_images/g2.png';
import sponsors from '../Sponsors/sponsors_images/sponsors.png';
import money from '../Sponsors/sponsors_images/money.gif';
import $ from 'jquery'

function SponsorsContent() {
  return (
   <div className="Sponsors-content" >
        <div className="container">
             <center>
             <img  src={sponsors} />
             <img width="150" height="auto" src={money} />
             </center>
            
             <div className="row ">
                <center>
                 <div className="col s4 m4 l4 responsive-img">
                     <a href="https://github.com/" target="blank"><img  src={go} alt="" />  </a>
                 </div>    
                 </center>
                <center>
                 <div className="col s4 m4 l4  responsive-img ">
                     <a href="https://github.com/"><img  src={g2} alt="" />  </a>
                 </div>  
                 </center>
                <center>
                 <div className="col s4 m4 l4  responsive-img">
                     <a href="https://github.com/"><img  src={go} alt="" />  </a>
                 </div>  
                 </center>
            </div> 
            <div className="row ">
            <center>
                 <div className="col s4 m4 l4  responsive-img">
                     <a href="https://github.com/" target="blank"><img  src={go} alt="" />  </a>
                 </div>    
                 </center>

                <center>
                 <div className="col s4 m4 l4  responsive-img">
                     <a href="https://github.com/"><img  src={g2} alt="" />  </a>
                 </div>  
                 </center>
                <center>
                 <div className="col s4 m4 l4   responsive-img">
                     <a href="https://github.com/"><img  src={go} alt="" />  </a>
                 </div>  
                 </center>
            </div>
          
           <div className="row ">
            <center>
                 <div className="col s4 m4 l4  responsive-img">
                     <a href="https://github.com/" target="blank"><img  src={go} alt="" />  </a>
                 </div>    
                 </center>

                <center>
                 <div className="col s4 m4 l4  responsive-img">
                     <a href="https://github.com/"><img  src={g2} alt="" />  </a>
                 </div>  
                 </center>
                <center>
                 <div className="col s4 m4 l4  responsive-img">
                     <a href="https://github.com/"><img  src={go} alt="" />  </a>
                 </div>  
                 </center>
            </div>
            <div className="row hideme">
            <center>
                 <div className="col s4 m4 l4  responsive-img">
                     <a href="https://github.com/" target="blank"><img  src={go} alt="" />  </a>
                 </div>    
                 </center>

                <center>
                 <div className="col s4 m4 l4  responsive-img">
                     <a href="https://github.com/"><img  src={g2} alt="" />  </a>
                 </div>  
                 </center>
                <center>
                 <div className="col s4 m4 l4   responsive-img">
                     <a href="https://github.com/"><img  src={go} alt="" />  </a>
                 </div>  
                 </center>
            </div>  
            <div className="row hideme">
            <center>
                 <div className="col s4 m4 l4  responsive-img">
                     <a href="https://github.com/" target="blank"><img  src={go} alt="" />  </a>
                 </div>    
                 </center>

                <center>
                 <div className="col s4 m4 l4  responsive-img">
                     <a href="https://github.com/"><img  src={g2} alt="" />  </a>
                 </div>  
                 </center>
                <center>
                 <div className="col s4 m4 l4   responsive-img">
                     <a href="https://github.com/"><img  src={go} alt="" />  </a>
                 </div>  
                 </center>
            </div>  
        </div>  
    </div> 
  )
}

export default SponsorsContent;

