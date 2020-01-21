import React from 'react';
import '../static/home.css';
// import Logo from './Logo';
import Logo from '../static/inci_logo.png';
import '../static/logo.css';
import Signpost from './Signpost';
import Ladder from './Ladder';
import SocialTab from './SocialTab';
import InciText from '../static/inci_name.png';
import Tv from '../static/tv.gif';
import CloudM from '../static/cloud_m.png';
import CloudF from '../static/cloud_f.png';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Logo /> */}
        <img src={Logo} className="App-logo" alt="inci-logo" />
        <img src={InciText} className="inci-text" alt="inci-logo-text" />
        <Signpost />
        <img src={CloudM} className="cloudm-gif" alt="middle-cloud" />
        <img src={Tv} className="tv-gif" alt="tv-40-years" />
        <img src={CloudF} className="cloudf-gif" alt="front-cloud" />
        <Ladder />
        <SocialTab />
      </header>
    </div>
  );
}

export default Home;
