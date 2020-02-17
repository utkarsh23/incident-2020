import React from 'react';

function Popup2() {
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <p>
                    Thank you for showing interest in Incident '20: A Tryst with Time! <br />

                    Following are the <b>Rules and Regulations for Frames Event</b> to be followed by all participants and visitors during Incident '20: 
                    <p className="point"><b>1.</b> The event is not restricted by theme </p> 
                    <p className="point"><b>2.</b> Use cameras of at least 6 MP resolution and include the EX-IF properties</p> 
                    <p className="point"><b>3.</b> Only minimal editing is allowed. No text overlays or watermarks are allowed in the photograph.</p> 
                    <p className="point"><b>4.</b> Go crazy with the captions for your photograph </p> 
                    <p className="point"><b>5.</b> Photographs will be judged on originality, composition, and overall aesthetics.</p> 
                    <p className="point"><b>6.</b> The Jury is God. Their word is final.</p>
                    <p className="point"><b>7.</b> You can submit a maximum of 3 images. Email them to <b>"nitkphotographyclub@gmail.com"</b> with your Name, Institute Name, Contact Number, Email ID along with the photographs</p> 

                    We hope you complete the registration process smoothly and have a great time at Incident 2020. Team Incident looks forward to hosting you this year!
                </p>
                <a rel="noopener noreferrer" class="waves-effect waves-light btn center black register-lin" id="register" style={{marginTop:'20px'}} target="_blank" href="mailto:photography@nitk.edu.in?Subject=Frames-Submission-inci-2020">Submit</a>
            </div>
        </div>
    )
}

export default Popup2;