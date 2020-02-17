import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Events from "./Events";
import Timeline from "./Timeline";
import Contact from "./Contact";
import Sponsors from "./Sponsors";
import Campus from './Campus';
import About from "./About";
import Icare from "./Icare";
import Team from "./Team";
import TrystWithTime from "./TrystWithTime";
import LitPourri from "./Events/LitPourri";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/contact" component={Contact} />
        <Route path="/campus" component={Campus} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/about" component={About} />
        <Route path="/icare" component={Icare} />
        <Route path="/team" component={Team} />
        <Route path="/tryst-with-time" component={TrystWithTime} />
        {/* <Route path="/proshows" component={Proshows} /> */}
        <Route path="/litpourri" component={LitPourri} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
