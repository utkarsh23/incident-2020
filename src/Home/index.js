import React from 'react';
import '../static/home.css';
import Logo from '../static/inci_logo.gif';
import Signpost from './Signpost';
import Ladder from './Ladder';
import SocialTab from './SocialTab';
import InciText from '../static/inci_name.png';
import Tv from '../static/tv2.gif';
import CloudM from '../static/cloud_m.png';
import CloudF from '../static/cloud_f.png';
import Sidenav from '../Sidenav-m';
import hamburger from '../static/hamburger.png';
import trystButton from '../static/trystbutton.png';
import LoadingPage from '../Loader.js';
import LoadingPageMobile from '../LoaderMobile.js';

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function linkTrystWithTime() {
  window.location.href = "/tryst-with-time";
}

function HeaderContent() {
  return (
    <div className="App">
      <header className="App-header">
      <Sidenav />
      <img src={Logo} className="App-logo" alt="inci-logo" />
      <img src={InciText} className="inci-text" alt="inci-logo-text" />
      <a target="_blank" rel="noopener noreferrer" href="https://www.townscript.com/e/incident-2020-nitk-surathkal-323431" class="waves-effect waves-light btn home-register-btn">Register</a>
      {/* <a href="/campus" class="waves-effect waves-light btn home-campus-btn">Campus Ambassador</a> */}
      <Signpost />
      <img src={CloudM} className="cloudm-gif hide-on-small-only" alt="middle-cloud" />
      <img src={Tv} className="tv-gif hide-on-small-only" alt="tv-40-years" />
      <img src={CloudF} className="cloudf-gif hide-on-small-only" alt="front-cloud" />
      <img src={trystButton} className="tryst-button hide-on-small-only" alt="tryst button" onClick={linkTrystWithTime} />
      <Ladder />
      <SocialTab />
      <img src={hamburger} alt="ham-menu" onClick={openRightMenu} className="hamburger hide-on-med-and-up" />
    </header>
    </div>
  )
}

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: 0,
      mobile: 0,
    }
  }

  componentDidMount() {
    console.log(window.innerWidth);
    const ismobile =  window.innerWidth <= 600
    if(ismobile){
      this.setState({mobile: 1})
      console.log("mobile device "+this.state.mobile);
    }else{
      this.setState({mobile: 0})
      console.log("desktop device "+this.state.mobile);
    }

    setTimeout(() => {
      this.setState({loaded: 1})
    }, 10000)
  }

  render(){
    return (
      <div>
        {this.state.loaded ? <HeaderContent /> : ( this.state.mobile ? <LoadingPageMobile /> : <LoadingPage /> )}
      </div>
    );
  }
}

export default Home;
