import React from 'react';
import '../static/events.css';
import Carousel from './Carousel';
import Sidenav from '../Sidenav';
import hamburger from '../static/hamburger.png';
import Homeicon from '../homeicon';
import Popup from '../Popup';
import Popup2 from '../PopUp2';

function onLeftiClose(events, index) {
  document.getElementById('events-' + index).style.display = 'none';
}

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function ShowPopUp() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("register").style.display = "block";
}

function ShowPopUp2(){
  document.getElementById("popup2").style.display = "block";
  document.getElementById("register").style.display = "block";
}

function ClosePopUp() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("register").style.display = "none";
}

function ClosePopUp2(){
  document.getElementById("popup2").style.display = "none";
  document.getElementById("register").style.display = "none";
}

function ShowToolTip(e) {
  console.log("came here");
  document.getElementById("pop-up").style.display = "block";
  document.getElementById("pop-up").style.top = (e.pageY -125).toString() + 'px';
  document.getElementById("pop-up").style.left = (e.pageX -50).toString() + 'px';
}

function CloseToolTip() {
  document.getElementById("pop-up").style.display = "none";
}

function Events() {
  return (
    <div className="events-wrapper">
      <Homeicon />
      <Sidenav />
      <div id="popup" style={{ display: 'none' }}>
        <Popup />
        <button className="closepop" onClick={ClosePopUp}>Close</button>
      </div>

      <div id="popup2" style={{display: 'none'}}>
        <Popup2 />
        <button className="closepop" onClick={ClosePopUp2}>Close</button>
      </div>

      <div id="pop-up">
        <p>
          <b style={{ color: 'black' }}>Login in with your '<b style={{ color: 'rgb(96, 136, 35)' }}>nitk.edu.in</b>' account to access the forms</b>
          <a className="btn center black reg-but" href="https://forms.gle/eeBsYPXqjzdia7jN7" target="_blank" rel="noopener noreferrer"> OK </a>
          <button className="closepop2" onClick={CloseToolTip}> X </button>
        </p>
      </div>

      <img src={hamburger} alt="ham-menu" onClick={openRightMenu} className="hamburger" />
      <h1 className="events-heading">Events</h1>
      <div className="center events-bottom-carousel">
        <Carousel />
      </div>

      {/* Dance Events */}
      <div id="events-0" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 0)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Dance Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>Nritya</h1>
                <p><b>Semi-professional Eastern and Contemporary Solo Dance Competition</b><br />A feeling of soltitude and being lost in the art, expressing one's inner side through Dance forms. Come witness these artists express their talent through the beauty of this art<br/>
                  <b> Prizes Worth: 12k </b> <br />
                  <p><b>Date: 28th Feb </b></p>
                </p>
              </li>
              <li>
                <h1>Tandav</h1>
                <p><b>Semi-professional Eastern and Contemporary Group Dance Competition</b><br />Diversity defines India. So get ready to define it with your dancing talent as we present to you the Indian classical dance competition, Tandav. Come, unite the East, West, North and the South on one stage with stupendous choreography and blend these Indian dance forms up into a wonderful story for the world to witness.<br/>
                  <b> Prizes Worth: 60k </b> <br />
                  <p><b>Date: 28th Feb </b></p>
                </p>
              </li>
              <li>
                <h1>Step Up Solo</h1>
                <p>Step up the volume, step up the beats, step up the electrifying mood, step up those dance moves. Incident gives you a chance to take your talent one step higher with Step Up, the solo dance contest. So are you geared up to step up? Gyrate with your moves and prove it then.<br/>
                  <b> Prizes Worth: 10k </b> <br />
                  <p><b>Date: 1st Mar </b></p>
                </p>
              </li>
              <li>
                <h1>Step Up Duet</h1>
                <p>What’s better than watching a live story, enacted by two people, shaping up with that eye catching choreography? Let the two speak with their moves as Incident presents to you the duet version of Step Up where you step up the level with double the talent.So let the double magic come across!<br/>
                  <b> Prizes Worth: 14k </b> <br />
                  <p><b>Date: 1st Mar </b></p>
                </p>
              </li>
              <li>
                <h1>Promenade</h1>
                <p><b>Western Group Dance Competition</b> <br />A leisurely stroll would seem so relieving, but what if you get to see your favourite dance moves creating it’s magic outside the dance floor? Presenting to you, the group Street dance competition, Promenade. So does your group have it to turn eyes around and make it an amazing dance Promenade? Join in and find out yourself.<br/>
                  <b>Prizes Worth: 60k </b> <br />  
                  <p><b>Date: 1st Mar </b></p>
                </p>
              </li>
              <li>
                <h1>Dance Workshop</h1>
                <p><b>By Sushant Pujari</b> <br /> Date: 29Feb , Time: 10am - 12pm <br />
                <p><b>Date: 29th Feb </b></p>
                <b> Entry Fee per Person: 500/- </b> <br />
                </p>
                <br />
              </li>
              <button class="openpop btn center black" onClick={ShowPopUp}>Register(Non-NITK)</button>
              <button class="waves-effect waves-light btn center black reg-but" onClick={ShowToolTip} >Register(NITK) </button>
              <a class="waves-effect waves-light btn center black reg-but" target="_blank" rel="noopener noreferrer" href="https://s3.ap-south-1.amazonaws.com/townscript-production/event-files/175527-dance-event-final-(1).pdf">Rules</a>
            </ol>
          </div>
        </div>
      </div>

      {/* Music Events */}
      <div id="events-1" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 1)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Music Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>Unplugged: </h1>
                <p><b>Western Acoustic Band Competition</b> <br />A starry night. Gentle winds. A crackling bonfire. Waves on the beach. The strum of a guitar. String new notes and make new 				music. Mix melodies with your mind. Enthral your senses and expand your horizons. Experience contentment and enlightenment at Unplugged. Be it Western acoustic spectacle or an 			Acapella wonder, unplug your heart and let the music take over!</p>
                <p><b>Eastern Acoustic Band Competition</b> <br />This Incident allow your soul to marvel at the wonders of the Eastern music. Let the whimsical notes of the flute sweep you off your feet. Let the cheeky twang of a sitar snap at the strings of your heart. Let the lively beat of the tabla incite fire in your veins. Let Dhwanik, Incident's Eastern acoustic sensation, leave you craving for more. <br/>
                  <b> Prizes Worth: 35k </b> <br />  
                  <p><b>Date: 28th Feb </b></p>
                  <button class="openpop btn center black " onClick={ShowPopUp}>Register(Non-NITK)</button>
                  <button class="waves-effect waves-light btn center black reg-but" onClick={ShowToolTip} >Register(NITK) </button>
                </p>
              </li>
              <li>
                <h1>Pulse</h1>
                <p><b>Semi-Professional Western Rock Band Competition</b> <br />Have you ever dreamt of selling out Madison Square Garden? Ever wondered how it would feel to witness a full-house crowd chant your name? Team Incident provides just the experience and invites you to rule the stage at Pulse, the Western battle of bands. We promise you a crowd unlike anything you have ever seen and will ever see! What are you waiting for? Register today! <br />
                  <b> Prize Worth: 65k + 4L worth Promotion Deal </b> <br />  
                  <p><b>Date: 29th Feb </b></p>
                </p>
                <a class="waves-effect waves-light btn center black reg-but2" target="_blank" rel="noopener noreferrer" href="http://bit.ly/2HC0lVH">Register</a>
              </li>
              <li>
                <h1>Bandish</h1>
                <p><b>Semi-Professional Hindustani and Carnatic Rock Band Competition</b><br /> Thermal and Quarter. Raghu Dixit Project. Thaikkudam Bridge. Let it be remembered in the pages of history that nobody does rock better than our desi boyz! Adorn your heart with the tricolour at Bandish, the Eastern rock phenomenon. Because who says only the Westerners should have all the fun?<br/>
                  <b> Cash Prize: 75k + 4L worth Music Promotion Deal </b> <br />
                  <p><b>Date: 1st Mar </b></p>
                </p>
                <a class="waves-effect waves-light btn center black reg-but2" target="_blank" rel="noopener noreferrer" href="http://bit.ly/3bKebU1">Register</a>
              </li>

              <li>
                <h1>Raaga-Rhapsody (Voice Of Inci)</h1>
                <p>Pure, Raw, Strong and moving. INCIDENT 2020 Musicals brings to you, Raaga-Rhapsody, the solo vocals competition. From Ballads to Alaaps, this event gives you a stage to wow us with your 			singing and a chance to win the title of "Voice of Inci"<br/>
                  <b> Prizes Worth: 20k + 2L worth Promotional Deal</b> <br />
                  <p><b>Date: 28th Feb </b></p>
                </p>
                <a class="waves-effect waves-light btn center black reg-but2" target="_blank" rel="noopener noreferrer" href=" http://bit.ly/2uTDEJV">Register</a>
              </li>
              
              <a class="waves-effect waves-light btn center black reg-but2" target="_blank" rel="noopener noreferrer" href="https://s3.ap-south-1.amazonaws.com/townscript-production/event-files/175527-music-events.pdf">Rules (All Events)</a>
            </ol>
          </div>
        </div>
      </div>

      {/* Lit Events */}
      <div id="events-2" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 2)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Lit Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>Lit Pourri</h1>
                <p>Litpourri is an online literary fest held by the Literary, Stage and Debating Society, NITK in collaboration with NITK’s Annual cultural extravaganza, Incident. The fest allows for diverse entries under the banner of four events.
                  <b> Prizes Worth: 15k</b> <br />
                </p>
                <a class="waves-effect waves-light btn center black" target="_blank" rel="noopener noreferrer" href="/litpourri">Lit Pourri registration</a>
              </li>
              <li>
                <h1>Lone Wolf Quiz:</h1>
                <p>Feel bogged down by your teammates all the time? <br />Do you wish to make your own mark in quizzing?
                  Put your skills to the test in this solo quiz where it’s all up to you to find out the right answer. A journey through trivia and facts you never knew, brought to you by our ex-convenor, this quiz is bound to be a battle of extreme wit and will pique your curiosity for sure! <br/>
                  <b> Prizes Worth: 10k</b> <br />
                </p>
                <p><b>Date: 29th Feb </b></p>
              </li>
              <li>
                <h1>General Quiz:</h1>
                <p>Get ready for the biggest quiz of Incident 2020 with the General quiz by none other than Major Chandrakant Nair <br />
                  A quizmaster who needs no introduction, the General Quiz is the best opportunity to put your brains against the best in the business. Come in teams of three or less and attempt to take home the trophy in one of the best quizzes in a South India that is sure to leave you astounded yet entertained throughout! <br/>
                  <b> Prizes Worth: 15k</b> <br />
                </p>
                <p><b>Date: 28th Feb </b></p>
              </li>
              <li>
                <h1>Theme Quiz:</h1>
                <p>Another quiz by Major Chandrakant Nair, the theme quiz is based on the overall theme of Incident 2020- ‘A Tryst With Time’ <br />
                  The quiz is an enigmatic journey through time itself, as one flows through the chronology of the universe hoping to uncover it in the form of trivia and unknown tidbits of information that will be a pleasant surprise for us all <br/>
                  <b> Prizes Worth: 15k</b> <br />
                </p>
                <p><b>Date: 28th Feb </b></p>
              </li>
              <li>
                <h1>NITK-MUN: MARVEL CRISIS COMMITTEE</h1>
                <p>From the team that brought you NITK-MUN, we've given the traditional MUN format a superhero twist, featuring an all marvel based crisis committee where delegates will represent characters from the Marvel universe and collaborate to solve an immediate crisis! <br/>
                  <b> Cash Prize: 6k</b> <br />
                </p>
                <p><b>Date: 1st Mar </b></p>
              </li>
              <li>
                <h1>JAM:</h1>
                <p>Calling all chatterboxes! Are you ready to put your oratory prowess to the ultimate test? See if you can hold your ground talking for Just A Minute without pauses, grammatical errors or redundancies. Sounds simple? It is! <br/>
                <b> Prizes Worth: 14k</b> <br />
                </p>
                <p><b>Date: 29th Feb </b></p>
              </li>
              <li>
                <h1>Change My Mind:</h1>
                <p>A free for all debate, come by our Change My Mind stall and take your shot at changing our contender's mind on the topic we put up below. Debate for 5 minutes to an hour, no format, have a one on one discussion to debate to your heart's content.</p> <br/>
                <p><b>Date: 29th Feb </b></p>
              </li>
              <button class="openpop btn center black " onClick={ShowPopUp}>Register(Non-NITK)</button>
              <button class="waves-effect waves-light btn center black reg-but" onClick={ShowToolTip} >Register(NITK) </button>
              <a class="waves-effect waves-light btn center black  reg-but" target="_blank" rel="noopener noreferrer" href="https://s3.ap-south-1.amazonaws.com/townscript-production/event-files/175527-lit-event-final.pdf">Rules</a>
            </ol>
          </div>
        </div>
      </div>

      {/* Biz Events */}
      <div id="events-3" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 3)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Biz Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>B-Plan</h1>
                <p>The best startups generally come from somebody needing to scratch an itch. B-Plan is an event where participants have the perception to bring about a revolution in the business world. For this, you have to create a draft of your business plan and get a platform to bring out your idea in front of an esteemed panel of investors. <br />
                  <b>Team Size:2 Cash Prize: 20k </b>
                </p>
                <p><b>Date: 28th - 29th Feb </b></p>
              </li>
              <li>
                <h1>Best Management Team</h1>
                <p>“Limitations live in our minds. But if we use our imaginations, our possibilities become limitless.” The purpose of this event is to surface the latent talents of creativity and initiation through comprehensive and rigorous management. In the world of corruption, scandals and unreliable disclosures, the ability to move mountains and adapt with changing tides have become the need of the hour. Between adrenaline rushes, managing people, your brand equity, finances and much more; this event will ultimately help you learn and polish your skills.
                  <b>Team Size:2 Prizes Worth: 30k </b> <br />
                </p>
                <p><b>Date: 28th - 29th Feb </b></p>
              </li>
              <li>
                <h1>Crisis Management </h1>
                <p>“A time when a difficult or important decision must be made” One-of-a-kind event hosted for the managers of Industrial revolution 5.0. Crisis is a global phenomenon whose occurrence cannot be predicted even by the complex algorithms built by man. Crisis management is an essential skill to be equipped by all the people of the functional and management departments alike. At In-Spire 2020, we invite you to prove your crisis management mettle and emerge as the champions of spontaneous decision makers.
                  <b> Prizes Worth: 30k </b><br />
                </p>
                <p><b>Date: 28th - 29th Feb </b></p>
              </li>
              <button class="openpop btn center black " onClick={ShowPopUp}>Register(Non-NITK)</button>
              <button class="waves-effect waves-light btn center black reg-but" onClick={ShowToolTip} >Register(NITK) </button>
              <a class="waves-effect waves-light btn center black  reg-but" target="_blank" rel="noopener noreferrer" href="https://s3.ap-south-1.amazonaws.com/townscript-production/event-files/175527-rule-book_inspire(1).pdf">Rules</a>
            </ol>
          </div>
        </div>
      </div>

      {/* Gaming and Arts */}
      <div id="events-4" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 4)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Gaming &amp; Fine Arts</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>PUBG</h1>
                <p> Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident '20. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
                <p><b>Date: 28th Feb </b></p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Still remember Dust and Nuke? Or are you a professional? Doesn't matter, here you got to prove your worth. What counts is how fast you can take that crucial head shot or knife the bad guy! CT or Terrorist you decide</p>
                <p><b>Date: 28th Feb </b></p>
              </li>
              <li>
                <h1>Call of Duty Mobile (CODM)</h1>
                <p>Strap on your armour, Pick up your Assault Rifles, load your magazine, fill up some grenades or even a knife will do. As you fight it out in an urban or a jungle scape.</p>
                <p><b>Date: 28th Feb </b></p>
              </li>
              <li>
                <h1>NFS: Most Wanted</h1>
                <p>Exhilarating. Thrilling. Memorable. Magical. These are the words you're going to describe the racing action of your Need For Speed.  So quit horsing around and come to our gaming event and become the MOST WANTED.</p>
                <p><b>Date: 28th Feb </b></p>
              </li>
              <li>
                <h1>FIFA</h1>
                <p>Let's bring out the baller in you, as you score more than your friends. We mean in the game though and also we got your food cravings covered!</p>
                <p><b>Date: 28th Feb </b></p>
              </li>
              <li>
                <h1>Kalakriti</h1>
                <p>Lose yourself to jaw-dropping, eye-popping and magical pieces of art and craft. Art forms ranging from sketches to paintings, origami, kirigami and other craftwork, Kalakriti is home to all. The artist in you is sure to be motivated and inspired by the spectacular creativity packaged into this exhibition!</p>
              </li>
              <li>
                <h1>Newspaper Costume Design</h1>
                <p>Do you think you have a knack for fashion designing? Then take this challenge of styling your partner by remodeling everyday newspaper into iconic party wear and watch the newspaper clad mannequins walk the ramp.</p>
              </li>
              <li>
                <h1>Body Painting</h1>
                <p>Get ready to turn your partners into canvas and showcase your expertise by painting them into realistic illustrations based on a spot theme!</p>
              </li>
              <button class="openpop btn center black " onClick={ShowPopUp}>Register(Non-NITK)</button>
              <button class="waves-effect waves-light btn center black reg-but" onClick={ShowToolTip} >Register(NITK) </button>
              <a class="waves-effect waves-light btn center black  reg-but" target="_blank" rel="noopener noreferrer" href="https://s3.ap-south-1.amazonaws.com/townscript-production/event-files/175527-gaming-events.pdf">Rules</a>
            </ol>
          </div>
        </div>
      </div>

      {/* Haute Couture */}
      <div id="events-5" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 5)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Haute Couture</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>Haute Couture</h1>
                <p>A showcase of glamour and glitz where only the elite make it to the center stage. The viewers need to brace themselves to be mesmerized by the models with their diva skills, as they walk the ramp with elegance and beauty unparalleled. You have one round to bring out your creativity, so make the most of it!</p>
                <p><b>Date: 29th Feb </b></p>
              </li>
              <button class="openpop btn center black " onClick={ShowPopUp}>Register(Non-NITK)</button>
              <button class="waves-effect waves-light btn center black reg-but" onClick={ShowToolTip} >Register(NITK) </button>
              <a class="waves-effect waves-light btn center black  reg-but" target="_blank" rel="noopener noreferrer" href="https://s3.ap-south-1.amazonaws.com/townscript-production/event-files/175527-haute-couture-final.pdf">Rules</a>
            </ol>
          </div>
        </div>
      </div>

      {/* Sports Events */}
      <div id="events-6" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 6)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Sports Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>Slam Dunk</h1>
                <p>Gear up as top basketball teams from across India compete for the coveted Slam Dunk Trophy! <br />
                  Nail biting finishes, Adrenaline boosts, last minute surprises we have seen it all over the previous years. This time we can’t wait to get lost in the crowd and support our favourite teams! <br />
                  Stay tuned for more updates.
                  <b>Prizes Worth: 100k </b>  
                </p>
                <p><b>Date: 27th Feb - 1st Mar </b></p>
                  <a class="waves-effect waves-light btn center black reg-but2" target="_blank" rel="noopener noreferrer" href="https://s3.ap-south-1.amazonaws.com/townscript-production/event-files/175527-slamdunk_compressed.pdf">Rules</a>
              </li>
              <li>
                <h1>Spike It</h1>
                <p>Pass. Set. Spike! <br />
                  Get set to participate and witness adrenaline-filled fast-paced matches as teams from across India battle it out, point by point in the volleyball court. From neck-to-neck point tallies to unbelievable comebacks, this Incident is going to have it all! <br />
                  Stay tuned for more updates.
                  <b> Prizes Worth: 75k </b>
                </p>
                <p><b>Date: 28th Feb - 1st Mar </b></p>
                <a class="waves-effect waves-light btn center black reg-but2" target="_blank" rel="noopener noreferrer" href="https://s3.ap-south-1.amazonaws.com/townscript-production/event-files/175527-volleyboll-(1).pdf">Rules</a>
              </li>
              <li>
                <h1>Spin Shock</h1>
                <p>
                  Watch the ball whiz past your eyes and create tension in the air with the blend of spin, precision and grace being fueled by healthy competitive spirit. Come grab this unique opportunity to etch your name in the sand of winning INCIDENT 's fourth edition of inter-collegiate women Throwball competition! <br/> STAY TUNED!!<br/>
                  <b>Prizes Worth: 20k</b>
                </p>
                <p><b>Date: 29th Feb </b></p>
                <a class="waves-effect waves-light btn center black reg-but2" target="_blank" rel="noopener noreferrer" href="https://s3.ap-south-1.amazonaws.com/townscript-production/event-files/175527-throwball.pdf">Rules</a>
              </li>
              <button class="openpop btn center black " onClick={ShowPopUp}>Register(Non-NITK)</button>
              <button class="waves-effect waves-light btn center black reg-but" onClick={ShowToolTip} >Register(NITK) </button>
            </ol>
          </div>
        </div>
      </div>

      {/* Theatre Events */}
      <div id="events-7" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 7)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Theatre Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>Thespian:</h1>
                <p>“All the world's a stage, And all the men and women merely players.” - Shakespeare
                  Stage! Where dreams are born and come true, the place where the true essence of life can be felt within a small period of time. All you have to do is captivate the audience in a manner like never before! <br />
                  It is said that the stage has an energy that takes us on a journey of imagination and creativity; energy that is ephemeral, leaving behind a stimulated conscience and a captivated audience. This Incident - Thespian - gives you the opportunity to immerse yourself in your emotions and actions. As you bring your characters to life, set the stage ablaze and soak yourself with the applause. The moment is yours for the taking.
                  <b> Prizes Worth : 25k </b> <br />
                </p>
                <p><b>Date: 1st Mar </b></p>
              </li>
              <li>
                <h1>Nukkad:</h1>
                <p>Deeply rooted in the Indian tradition,breaking the formal barriers and approaching the people directly. Both the performer and audience have always felt a deep connect through the message of the play! <br/>
                    A passion for theatre and the zeal to act is all you need to set the stage on fire. The ultimate arena for actors, directors and script-writers alike, this is where the action happens. Incident’20 presents Nukkad,a street play competition.
                  <b> Prizes Worth : 40k </b> <br />
                </p>
                <p><b>Date: 1st Mar </b></p>
              </li>
              <button class="openpop btn center black " onClick={ShowPopUp}>Register(Non-NITK)</button>
              <button class="waves-effect waves-light btn center black reg-but" onClick={ShowToolTip} >Register(NITK) </button>
              <a class="waves-effect waves-light btn center black  reg-but" target="_blank" rel="noopener noreferrer" href="https://s3.ap-south-1.amazonaws.com/townscript-production/event-files/175527-theater-final-(1).pdf">Rules</a>
            </ol>
          </div>
        </div>
      </div>

      {/* Beach Eve */}
      <div id="events-8" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 8)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Beach Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>Kite Festival</h1>
                <p>Kite flying is a sport that brings out the little child in each one of us and lights up a smile on our face. As the kites fly higher and higher so does our spirit and cheerfulness. This Incident, join us as these colourful creative kites take to the air and paint the sky with joy! Come, fly a kite and travel back to your childhood!</p>
                <p><b>Date: 1st Mar </b></p>
              </li>
              <li>
                <h1>Beach Informalz</h1>
                <p>Not finding any events to your taste? Bored out of your mind? No worries! All you gotta do is take a stroll to 'The Beach'. The Informalz is awaiting you! From mind-blowing games to silly competitions between your buddies, the Beach Informalz offers a dose of fun and frolic that you cannot refuse!</p>
                <p><b>Date: 1st Mar </b></p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Online Events */}
      <div id="events-9" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 9)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Online Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>Frames</h1>
                <p> What is photography but freezing a moment in time forever. <br/>At  “Frames”, Incident NITK, in association with the Photography Club NITK, presents you an opportunity to display your photography skills for everyone to feast their eyes on. <br/>
                  <b> Prizes Worth : 30k </b> <br />
                </p>
              </li>
              <button class="openpop btn center black " onClick={ShowPopUp2}>Event Rules</button>
              {/* <a class="waves-effect waves-light btn center black  reg-but" onMouseEnter={ShowToolTip} onMouseLeave={CloseToolTip} target="_blank" rel="noopener noreferrer" href="https://forms.gle/eeBsYPXqjzdia7jN7">Register(NITK)</a>
              <a class="waves-effect waves-light btn center black  reg-but" target="_blank" rel="noopener noreferrer" href="https://s3.ap-south-1.amazonaws.com/townscript-production/event-files/175527-theater-final.pdf">Rules</a> */}
            </ol>
          </div>
        </div>
      </div>

      {/* TechoBytes */}
      <div id="events-10" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 10)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Techobyte Workshop</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>Ethical Hacking</h1>
                <p> Technical workshop events from nitk surathkal</p>
                <p> Date: 29 Feb-1 Mar 2020 </p>
              </li>
              <li>
                <h1>Android App Development</h1>
                <p>Technical workshop events from nitk surathkal</p>
                <p> Date: 29 Feb-1 Mar  2020 </p>
              </li>
              <li>
                <h1> Machine Learning With AI </h1>
                <p>Technical workshop events from nitk surathkal</p>
                <p> Date: 29 Feb-1 Mar 2020 </p>
              </li>
              <li>
                <h1> Humanoid Robotics With IOT  </h1>
                <p>Technical workshop events from nitk surathkal</p>
                <p> Date: 29 Feb-1 Mar 2020 </p>
              </li>
              <a class="waves-effect waves-light btn center black " target="_blank" rel="noopener noreferrer" href="https://www.instamojo.com/techo/techo-workshop-series-at-nitk-surathkal-29th/">Register</a>
            </ol>
          </div>
        </div>
      </div>

      {/* Multicity */}
      <div id="events-11" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 11)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Inci Spotlight Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>Multicity</h1>
                <p>For the first time ever, Incident at your door step. A multicity Audition not only giving you an opportunity to showcase your talent but also win exciting prizes worth INR 1.2 lakhs.<br /> Come grab the spotlight when we come to your city and avail free travel and accommodation to Incident.</p>
                <p>Hyderabad - Feb 1st and 2nd</p>
                <p>Bengaluru - Feb 15th</p>
                <p>Manipal - Feb 16th</p>
                <p>Kochi - Feb 21st</p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Inci Special */}
      <div id="events-12" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 12)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Inci Specials</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>World Fest</h1>
                <p> We have travelled across oceans to bring you, Messrs Emilio and Leandro Ponce from The Twin's Trip, all the way across the oceans from Argentina, to enthral us with their high energy performances complete with juggling, clowning and visual effects. </p>
                <p><b>Date: 28Feb - 29Feb (Venue: SAC)</b></p>
              </li>
              <li>
                <h1> Stunt Show</h1>
                <p> Watch team HellRyderz-Mysore as they burn their tyres and woo you with their jaw dropping stunts! We sure can't wait to see them in action during Incident’20 </p>
                <p><b>Date: 1st Mar - 3pm </b></p>
              </li>
              <li>
                <h1>Auto Expo</h1>
                <p> Incident’20 presents youo Auto Expo! Buckle up your seat belts and head down to the Auto Expo to go back in time and relish these classic beauties. Lambretta to Jawa and Chetaks to Vijay Super. Come enjoy these lost treasure of motorcycles and cars as Incident'20 takes you back in time! </p>
                <p><b>Date: 1st March - 10am to 1pm</b></p>
              </li>
              <li>
                <h1>Ace Adventura</h1>
                <p> Want to settle a score with a friend? Or want to show off the cow-boy in you? Soccer skills on point? <br/> Incident’20 presents you Ace Adventura! We have Mechanical Bull, Archery, Sumo Wrestling, Slip Soccer right here. </p>
                <p> <b> Date: 28th and 29th Feb </b></p>
              </li>
              <button class="openpop btn center black" onClick={ShowPopUp}>Register(Non-NITK)</button>
            </ol>
          </div>
        </div>
      </div>

      <div id="events-13" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 13)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Inci Talks</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>World Fest</h1>
                <p> We have travelled across oceans to bring you, Messrs Emilio and Leandro Ponce from The Twin's Trip, all the way across the oceans from Argentina, to enthral us with their high energy performances complete with juggling, clowning and visual effects. </p>
                <p><b>Date: 28Feb - 29Feb (Venue: SAC)</b></p>
              </li>
              <li>
                <h1> Stunt Show</h1>
                <p> Watch team HellRyderz-Mysore as they burn their tyres and woo you with their jaw dropping stunts! We sure can't wait to see them in action during Incident’20 </p>
                <p><b>Date: 1st Mar - 3pm </b></p>
              </li>
              <li>
                <h1>Auto Expo</h1>
                <p> Incident’20 presents youo Auto Expo! Buckle up your seat belts and head down to the Auto Expo to go back in time and relish these classic beauties. Lambretta to Jawa and Chetaks to Vijay Super. Come enjoy these lost treasure of motorcycles and cars as Incident'20 takes you back in time! </p>
                <p><b>Date: 1st March - 10am to 1pm</b></p>
              </li>
              <li>
                <h1>Ace Adventura</h1>
                <p> Want to settle a score with a friend? Or want to show off the cow-boy in you? Soccer skills on point? <br/> Incident’20 presents you Ace Adventura! We have Mechanical Bull, Archery, Sumo Wrestling, Slip Soccer right here. </p>
                <p> <b> Date: 28th and 29th Feb </b></p>
              </li>
              <button class="openpop btn center black" onClick={ShowPopUp}>Register(Non-NITK)</button>
            </ol>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Events;
