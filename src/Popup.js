import React from 'react';

function showRegister() {
    document.getElementById("register").style.display = "block";
}

function Popup() {
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <p>
                    Thank you for showing interest in Incident '20: A Tryst with Time! <br />

                    Following are the <b>General Rules and Regulations</b> to be followed by all participants and visitors during Incident '20: <br />
                    <p className="point">a) Anyone who wishes to visit NITK Surathkal during Incident '20 must complete registration and obtain their Inci ID.</p> <br />
                    <p className="point">b) The Inci ID allows for participation in any event held at Incident '20, and participants are only required to register once, even if they wish to participate in multiple events.</p> <br />
                    <p className="point">c) Tickets/Inci IDs are not transferrable, and can only be used by the registrant.</p> <br />
                    <p className="point">d) All participants must publish a permission letter (along with valid college and government ID) from their college/institution, certifying that they are a student at that college/institution.</p> <br />
                    <p className="point">e) Any kind of flammable goods, weapons, arms and ammunition, knives etc are not allowed on the premises.</p> <br />
                    <p className="point">f) Entry to the NITK Beach is only permitted between 5 PM to 7 PM. The sea is extremely rough on this coast, therefore venturing into the water is prohibited at any time of the day.</p> <br />
                    <p className="point">g) Consumption or possession of alcohol, tobacco or any other narcotic substances is prohibited. Legal action will be strictly taken against persons found with the above-mentioned in their possession.</p> <br />
                    <p className="point">h) NITK will not be responsible for any injury, damage, theft or loss incurred by the participant during Incident '20.</p> <br />
                    <p className="point">i) Every participant is expected to maintain decorum and will be held responsible for their actions. Persons causing disturbance or disruption during any event, in terms of violent behaviour, physical or verbal abuse, or obscenity will be handed over to the police immediately.</p> <br />
                    <p className="point">j) The ticket cancellation policy is as per Townscript's Rules and Regulations. Incident NITK is not responsible for any errors or charges incurred while registering on the platform. </p><br />

                    We hope you complete the registration process smoothly and have a great time at Incident 2020. Team Incident looks forward to hosting you this year!
                </p>
                <button class="agree" onClick={showRegister}>I Agree</button>
                <a rel="noopener noreferrer" class="waves-effect waves-light btn center black register-lin" id="register" style={{ display: 'none' }} target="_blank" href="https://www.townscript.com/e/incident-2020-nitk-surathkal-323431">Register</a>
            </div>
        </div>
    )
}

export default Popup;