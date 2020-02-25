import React from 'react';
import '../static/proshows.css';
import Sidenav from '../Sidenav';
import Homeicon from '../homeicon';
import hamburger from '../static/hamburger.png';
import CarouselP from './Carousel';

function onLeftiCloseP(events, index) {
  document.getElementById('proshows-' + index).style.display = 'none';
}

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function ProShows() {
  return (
    <div className="proshows-wrapper">
      <Homeicon />
      <Sidenav />
      <img src={hamburger} alt="ham-menu" onClick={openRightMenu} className="hamburger" />
      <h1 className="proshows-heading">Proshows</h1>
      <div className="center proshows-bottom-carousel">
        <CarouselP />
      </div>
      {/* Comedy Night */}
      <div id="proshows-0" className="w3-modal">
        <div className="w3-animate-bottom proshows-modal-content">
          <header className="">
            <span onClick={events => onLeftiCloseP(events, 0)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
          </header>
          <div className="proshows-modal-wrapper">
            <p>
            <p className="rule-heading">
              Thank you for showing interest in Incident '20: A Tryst with Time! <br />
              Following are the <b>General Rules and Regulations</b> to be followed by all participants and visitors during Incident '20: <br />
            </p> <br/>
              <span className="point-pro"><b>1.</b> Anyone who wishes to visit NITK Surathkal during Incident '20 must complete registration and obtain their Inci ID.</span><br />
              <span className="point-pro"><b>2.</b> Tickets/Inci IDs are not transferrable, and can only be used by the registrant.</span><br />
              <span className="point-pro"><b>3.</b> All participants must publish a permission letter (along with valid college and government ID) from their college/institution, certifying that they are a student at that college/institution.</span><br />
              <span className="point-pro"><b>4.</b> Any kind of flammable goods, weapons, arms and ammunition, knives etc are not allowed on the premises.</span><br />
              <span className="point-pro"><b>5.</b> Entry to the NITK Beach is only permitted between 5 PM to 7 PM. The sea is extremely rough on this coast, therefore venturing into the water is prohibited at any time of the day.</span><br />
              <span className="point-pro"><b>6.</b> Consumption or possession of alcohol, tobacco or any other narcotic substances is prohibited. Legal action will be strictly taken against persons found with the above-mentioned in their possession.</span><br />
              <span className="point-pro"><b>7.</b> NITK will not be responsible for any injury, damage, theft or loss incurred by the participant during Incident '20.</span><br />
              <span className="point-pro"><b>8.</b> Every participant is expected to maintain decorum and will be held responsible for their actions. Persons causing disturbance or disruption during any event, in terms of violent behaviour, physical or verbal abuse, or obscenity will be handed over to the police immediately.</span><br />
              <span className="point-pro"><b>9.</b> The ticket cancellation policy is as per Townscript's Rules and Regulations. Incident NITK is not responsible for any errors or charges incurred while registering on the platform. </span><br />

              We hope you complete the registration process smoothly and have a great time at Incident 2020. Team Incident looks forward to hosting you this year!
                </p>
            <a target="_blank" rel="noopener noreferrer" class="waves-effect waves-light btn center black register-lin-pro" href="https://www.townscript.com/v1/e/incident-2020-nitk-surathkal-323431/booking" id="register" style={{ display: 'block !important' }}>I Agree</a>
          </div>
        </div>
      </div>

      {/* Fusion Night */}
      <div id="proshows-1" className="w3-modal">
        <div className="w3-animate-bottom proshows-modal-content">
          <header className="">
            <span onClick={events => onLeftiCloseP(events, 1)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
          </header>
          <div className="proshows-modal-wrapper">
          <p>
          <p className="rule-heading">
              Thank you for showing interest in Incident '20: A Tryst with Time! <br />
              Following are the <b>General Rules and Regulations</b> to be followed by all participants and visitors during Incident '20: <br />
            </p> <br/>
              <span className="point-pro"><b>1.</b> Anyone who wishes to visit NITK Surathkal during Incident '20 must complete registration and obtain their Inci ID.</span><br />
              <span className="point-pro"><b>2.</b> Tickets/Inci IDs are not transferrable, and can only be used by the registrant.</span><br />
              <span className="point-pro"><b>3.</b> All participants must publish a permission letter (along with valid college and government ID) from their college/institution, certifying that they are a student at that college/institution.</span><br />
              <span className="point-pro"><b>4.</b> Any kind of flammable goods, weapons, arms and ammunition, knives etc are not allowed on the premises.</span><br />
              <span className="point-pro"><b>5.</b> Entry to the NITK Beach is only permitted between 5 PM to 7 PM. The sea is extremely rough on this coast, therefore venturing into the water is prohibited at any time of the day.</span><br />
              <span className="point-pro"><b>6.</b> Consumption or possession of alcohol, tobacco or any other narcotic substances is prohibited. Legal action will be strictly taken against persons found with the above-mentioned in their possession.</span><br />
              <span className="point-pro"><b>7.</b> NITK will not be responsible for any injury, damage, theft or loss incurred by the participant during Incident '20.</span><br />
              <span className="point-pro"><b>8.</b> Every participant is expected to maintain decorum and will be held responsible for their actions. Persons causing disturbance or disruption during any event, in terms of violent behaviour, physical or verbal abuse, or obscenity will be handed over to the police immediately.</span><br />
              <span className="point-pro"><b>9.</b> The ticket cancellation policy is as per Townscript's Rules and Regulations. Incident NITK is not responsible for any errors or charges incurred while registering on the platform. </span><br />

              We hope you complete the registration process smoothly and have a great time at Incident 2020. Team Incident looks forward to hosting you this year!
                </p>
            <a target="_blank" rel="noopener noreferrer" class="waves-effect waves-light btn center black register-lin-pro" href="https://www.townscript.com/v1/e/incident-2020-nitk-surathkal-323431/booking" id="register" style={{ display: 'block !important' }}>I Agree</a>
          </div>
        </div>
      </div>

      {/* DJ Night */}
      <div id="proshows-2" className="w3-modal">
        <div className="w3-animate-bottom proshows-modal-content">
          <header className="">
            <span onClick={events => onLeftiCloseP(events, 2)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
          </header>
          <div className="proshows-modal-wrapper">
          <p>
          <p className="rule-heading">
              Thank you for showing interest in Incident '20: A Tryst with Time! <br />
              Following are the <b>General Rules and Regulations</b> to be followed by all participants and visitors during Incident '20: <br />
            </p> <br/>
              <span className="point-pro"><b>1.</b> Anyone who wishes to visit NITK Surathkal during Incident '20 must complete registration and obtain their Inci ID.</span><br />
              <span className="point-pro"><b>2.</b> Tickets/Inci IDs are not transferrable, and can only be used by the registrant.</span><br />
              <span className="point-pro"><b>3.</b> All participants must publish a permission letter (along with valid college and government ID) from their college/institution, certifying that they are a student at that college/institution.</span><br />
              <span className="point-pro"><b>4.</b> Any kind of flammable goods, weapons, arms and ammunition, knives etc are not allowed on the premises.</span><br />
              <span className="point-pro"><b>5.</b> Entry to the NITK Beach is only permitted between 5 PM to 7 PM. The sea is extremely rough on this coast, therefore venturing into the water is prohibited at any time of the day.</span><br />
              <span className="point-pro"><b>6.</b> Consumption or possession of alcohol, tobacco or any other narcotic substances is prohibited. Legal action will be strictly taken against persons found with the above-mentioned in their possession.</span><br />
              <span className="point-pro"><b>7.</b> NITK will not be responsible for any injury, damage, theft or loss incurred by the participant during Incident '20.</span><br />
              <span className="point-pro"><b>8.</b> Every participant is expected to maintain decorum and will be held responsible for their actions. Persons causing disturbance or disruption during any event, in terms of violent behaviour, physical or verbal abuse, or obscenity will be handed over to the police immediately.</span><br />
              <span className="point-pro"><b>9.</b> The ticket cancellation policy is as per Townscript's Rules and Regulations. Incident NITK is not responsible for any errors or charges incurred while registering on the platform. </span><br />

              We hope you complete the registration process smoothly and have a great time at Incident 2020. Team Incident looks forward to hosting you this year!
                </p>
            <a target="_blank" rel="noopener noreferrer" class="waves-effect waves-light btn center black register-lin-pro" href="https://www.townscript.com/v1/e/incident-2020-nitk-surathkal-323431/booking" id="register" style={{ display: 'block !important' }}>I Agree</a>
          </div>
        </div>
      </div>

      {/* Bollywood Night */}
      <div id="proshows-3" className="w3-modal">
        <div className="w3-animate-bottom proshows-modal-content">
          <header className="">
            <span onClick={events => onLeftiCloseP(events, 3)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
          </header>
          <div className="proshows-modal-wrapper">
          <p>
            <p className="rule-heading">
              Thank you for showing interest in Incident '20: A Tryst with Time! <br />
              Following are the <b>General Rules and Regulations</b> to be followed by all participants and visitors during Incident '20: <br />
            </p> <br/>
              <span className="point-pro"><b>1.</b> Anyone who wishes to visit NITK Surathkal during Incident '20 must complete registration and obtain their Inci ID.</span><br />
              <span className="point-pro"><b>2.</b> Tickets/Inci IDs are not transferrable, and can only be used by the registrant.</span><br />
              <span className="point-pro"><b>3.</b> All participants must publish a permission letter (along with valid college and government ID) from their college/institution, certifying that they are a student at that college/institution.</span><br />
              <span className="point-pro"><b>4.</b> Any kind of flammable goods, weapons, arms and ammunition, knives etc are not allowed on the premises.</span><br />
              <span className="point-pro"><b>5.</b> Entry to the NITK Beach is only permitted between 5 PM to 7 PM. The sea is extremely rough on this coast, therefore venturing into the water is prohibited at any time of the day.</span><br />
              <span className="point-pro"><b>6.</b> Consumption or possession of alcohol, tobacco or any other narcotic substances is prohibited. Legal action will be strictly taken against persons found with the above-mentioned in their possession.</span><br />
              <span className="point-pro"><b>7.</b> NITK will not be responsible for any injury, damage, theft or loss incurred by the participant during Incident '20.</span><br />
              <span className="point-pro"><b>8.</b> Every participant is expected to maintain decorum and will be held responsible for their actions. Persons causing disturbance or disruption during any event, in terms of violent behaviour, physical or verbal abuse, or obscenity will be handed over to the police immediately.</span><br />
              <span className="point-pro"><b>9.</b> The ticket cancellation policy is as per Townscript's Rules and Regulations. Incident NITK is not responsible for any errors or charges incurred while registering on the platform. </span><br />

              We hope you complete the registration process smoothly and have a great time at Incident 2020. Team Incident looks forward to hosting you this year!
                </p>
            <a target="_blank" rel="noopener noreferrer" class="waves-effect waves-light btn center black register-lin-pro" href="https://www.townscript.com/v1/e/incident-2020-nitk-surathkal-323431/booking" id="register" style={{ display: 'block !important' }}>I Agree</a>
          </div>
        </div>
      </div>

      <div id="proshows-4" className="w3-modal">
        <div className="w3-animate-bottom proshows-modal-content">
          <header className="">
            <span onClick={events => onLeftiCloseP(events, 4)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
          </header>
          <div className="proshows-modal-wrapper">
          <p>
            <p className="rule-heading">
              Thank you for showing interest in Incident '20: A Tryst with Time! <br />
              Following are the <b>General Rules and Regulations</b> to be followed by all participants and visitors during Incident '20: <br />
            </p> <br/>
              <span className="point-pro"><b>1.</b> Anyone who wishes to visit NITK Surathkal during Incident '20 must complete registration and obtain their Inci ID.</span><br />
              <span className="point-pro"><b>2.</b> Tickets/Inci IDs are not transferrable, and can only be used by the registrant.</span><br />
              <span className="point-pro"><b>3.</b> All participants must publish a permission letter (along with valid college and government ID) from their college/institution, certifying that they are a student at that college/institution.</span><br />
              <span className="point-pro"><b>4.</b> Any kind of flammable goods, weapons, arms and ammunition, knives etc are not allowed on the premises.</span><br />
              <span className="point-pro"><b>5.</b> Entry to the NITK Beach is only permitted between 5 PM to 7 PM. The sea is extremely rough on this coast, therefore venturing into the water is prohibited at any time of the day.</span><br />
              <span className="point-pro"><b>6.</b> Consumption or possession of alcohol, tobacco or any other narcotic substances is prohibited. Legal action will be strictly taken against persons found with the above-mentioned in their possession.</span><br />
              <span className="point-pro"><b>7.</b> NITK will not be responsible for any injury, damage, theft or loss incurred by the participant during Incident '20.</span><br />
              <span className="point-pro"><b>8.</b> Every participant is expected to maintain decorum and will be held responsible for their actions. Persons causing disturbance or disruption during any event, in terms of violent behaviour, physical or verbal abuse, or obscenity will be handed over to the police immediately.</span><br />
              <span className="point-pro"><b>9.</b> The ticket cancellation policy is as per Townscript's Rules and Regulations. Incident NITK is not responsible for any errors or charges incurred while registering on the platform. </span><br />

              We hope you complete the registration process smoothly and have a great time at Incident 2020. Team Incident looks forward to hosting you this year!
                </p>
            <a target="_blank" rel="noopener noreferrer" class="waves-effect waves-light btn center black register-lin-pro" href="https://www.townscript.com/v1/e/incident-2020-nitk-surathkal-323431/booking" id="register" style={{ display: 'block !important' }}>I Agree</a>
          </div>
        </div>
      </div>
      
      </div>
  );
}

export default ProShows;