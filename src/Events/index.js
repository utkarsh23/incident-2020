import React from 'react';
import '../static/events.css';
import Carousel from './Carousel';
import Sidenav from '../Sidenav';
import hamburger from '../static/hamburger.png';
import Homeicon from '../homeicon';

function onLeftiClose(events, index) {
  document.getElementById('events-' + index).style.display='none';
}

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function Events() {
  return (
    <div className="events-wrapper">
      <Homeicon />
      <Sidenav />
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
                <h1>Tandav</h1>
                <p><b>Semi-professional Eastern and Contemporary Group Dance Competition</b><br />Diversity defines India. So get ready to define it with your dancing talent as we present to you the Indian classical dance competition, Tandav. Come, unite the East, West, North and the South on one stage with stupendous choreography and blend these Indian dance forms up into a wonderful story for the world to witness.</p>
              </li>
              <li>
                <h1>Promenade</h1>
                <p><b>Western Group Dance Competition</b> <br />A leisurely stroll would seem so relieving, but what if you get to see your favourite dance moves creating it’s magic outside the dance floor? Presenting to you, the group Street dance competition, Promenade. So does your group have it to turn eyes around and make it an amazing dance Promenade? Join in and find out yourself.</p>
              </li>
              <li>
                <h1>Step Up Duet</h1>
                <p>What’s better than watching a live story, enacted by two people, shaping up with that eye catching choreography? Let the two speak with their moves as Incident presents to you the duet version of Step Up where you step up the level with double the talent.So let the double magic come across!</p>
              </li>
              <li>
                <h1>Step Up Solo</h1>
                <p>Step up the volume, step up the beats, step up the electrifying mood, step up those dance moves. Incident gives you a chance to take your talent one step higher with Step Up, the solo dance contest. So are you geared up to step up? Gyrate with your moves and prove it then.</p>
              </li>
              {/* <li>
                <h1>PUBG</h1>
                <p></p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p></p>
              </li> */}
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
                <p><b>Western Acoustic and A-cappella Band Competition</b> <br />A starry night. Gentle winds. A crackling bonfire. Waves on the beach. The strum of a guitar. String new notes and make new music. Mix melodies with your mind. Enthral your senses and expand your horizons. Experience contentment and enlightenment at Unplugged. Be it Western acoustic spectacle or an Acapella wonder, unplug your heart and let the music take over!</p>
                <p><b>Eastern Acoustic Band Competition</b> <br />This Incident allow your soul to marvel at the wonders of the Eastern music. Let the whimsical notes of the flute sweep you off your feet. Let the cheeky twang of a sitar snap at the strings of your heart. Let the lively beat of the tabla incite fire in your veins. Let Dhwanik, Incident's Eastern acoustic sensation, leave you craving for more.</p>
              </li>
              <li>
                <h1>Pulse</h1>
                <p><b>Semi-Professional Western Rock Band Competition</b>Have you ever dreamt of selling out Madison Square Garden? Ever wondered how it would feel to witness a full-house crowd chant your name? Team Incident provides just the experience and invites you to rule the stage at Pulse, the Western battle of bands. We promise you a crowd unlike anything you have ever seen and will ever see! What are you waiting for? Register today!</p>
              </li>
              <li>
                <h1>Bandish</h1>
                <p><b>Semi-Professional Hindustani and Carnatic Rock Band Competition</b><br/> Thermal and Quarter. Raghu Dixit Project. Thaikkudam Bridge. Let it be remembered in the pages of history that nobody does rock better than our desi boyz! Adorn your heart with the tricolour at Bandish, the Eastern rock phenomenon. Because who says only the Westerners should have all the fun?</p>
              </li>
              {/* <li>
                <h1></h1>
                <p></p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p></p>
              </li> */}
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
                <h1>Lone Wolf Quiz:</h1>
                <p>Feel bogged down by your teammates all the time? <br />Do you wish to make your own mark in quizzing?
                  Put your skills to the test in this solo quiz where it’s all up to you to find out the right answer. A journey through trivia and facts you never knew, brought to you by our ex-convenor, this quiz is bound to be a battle of extreme wit and will pique your curiosity for sure!
                </p>
              </li>
              <li>
                <h1>General Quiz:</h1>
                <p>Get ready for the biggest quiz of Incident 2020 with the General quiz by none other than Major Chandrakant Nair <br />
                    A quizmaster who needs no introduction, the General Quiz is the best opportunity to put your brains against the best in the business. Come in teams of three or less and attempt to take home the trophy in one of the best quizzes in a South India that is sure to leave you astounded yet entertained throughout!
                </p>
              </li>
              <li>
                <h1>Theme Quiz:</h1>
                <p>Another quiz by Major Chandrakant Nair, the theme quiz is based on the overall theme of Incident 2020- ‘A Tryst With Time’ <br />
                    The quiz is an enigmatic journey through time itself, as one flows through the chronology of the universe hoping to uncover it in the form of trivia and unknown tidbits of information that will be a pleasant surprise for us all
                </p>
              </li>
              <li>
                <h1>Thespian:</h1>
                <p>“All the world's a stage, And all the men and women merely players.” - Shakespeare
                  Stage! Where dreams are born and come true, the place where the true essence of life can be felt within a small period of time. All you have to do is captivate the audience in a manner like never before! <br />
                  It is said that the stage has an energy that takes us on a journey of imagination and creativity; energy that is ephemeral, leaving behind a stimulated conscience and a captivated audience. This Incident - Thespian - gives you the opportunity to immerse yourself in your emotions and actions. As you bring your characters to life, set the stage ablaze and soak yourself with the applause. The moment is yours for the taking.
                </p>
              </li>
              <li>
                <h1>Fandom MUN:</h1>
                <p>From the team that brought you NITK-MUN, we've given the traditional MUN format a superhero twist, featuring an all marvel based crisis committee where delegates will represent characters from the Marvel universe and collaborate to solve an immediate crisis!</p>
              </li>
              <li>
                <h1>JAM:</h1>
                <p>Calling all chatterboxes! Are you ready to put your oratory prowess to the ultimate test? See if you can hold your ground talking for Just A Minute without pauses, grammatical errors or redundancies. Sounds simple? It is!</p>
              </li>
              <li>
                <h1>Change My Mind:</h1>
                <p>A free for all debate, come by our Change My Mind stall and take your shot at changing our contender's mind on the topic we put up below. Debate for 5 minutes to an hour, no format, have a one on one discussion to debate to your heart's content.</p>
              </li>
              <li>
                <h1>Online Events:</h1>
                <p>The Online 'Lit'fest preceding Incident aims to provide a platform for literary enthusiasts to display their prowess in writing and creativity. Check the various categories out wherein there's something for every style you'd want to explore. Submit the most peculiar of poems and quirkiest of tales to win these battles of words. May the odds be ever in your favour!</p>
              </li>
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
              </li>
              <li>
                <h1>Best Management Team</h1>
                <p>“Limitations live in our minds. But if we use our imaginations, our possibilities become limitless.” The purpose of this event is to surface the latent talents of creativity and initiation through comprehensive and rigorous management. In the world of corruption, scandals and unreliable disclosures, the ability to move mountains and adapt with changing tides have become the need of the hour. Between adrenaline rushes, managing people, your brand equity, finances and much more; this event will ultimately help you learn and polish your skills.
                  <b>Team Size:2 Cash Prize: 20k </b> <br />
                </p>
              </li>
              <li>
                <h1>Crisis Management </h1>
                <p>“A time when a difficult or important decision must be made” One-of-a-kind event hosted for the managers of Industrial revolution 5.0. Crisis is a global phenomenon whose occurrence cannot be predicted even by the complex algorithms built by man. Crisis management is an essential skill to be equipped by all the people of the functional and management departments alike. At In-Spire 2020, we invite you to prove your crisis management mettle and emerge as the champions of spontaneous decision makers.
                  <b> Team Size:2 Cash Prize: 20k </b><br />
                </p>
              </li>
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
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Still remember Dust and Nuke? Or are you a professional? Doesn't matter, here you got to prove your worth. What counts is how fast you can take that crucial head shot or knife the bad guy! CT or Terrorist you decide</p>
              </li>
              <li>
                <h1>Call of Duty (COD)</h1>
                <p>Strap on your armour, Pick up your Assault Rifles, load your magazine, fill up some grenades or even a knife will do. As you fight it out in an urban or a jungle scape.</p>
              </li>
              <li>
                <h1>FIFA</h1>
                <p>Let's bring out the baller in you, as you score more than your friends. We mean in the game though and also we got your food cravings covered!</p>
              </li>
              <li>
                <h1>Kalakriti</h1>
                <p>Lose yourself to jaw-dropping, eye-popping and magical pieces of art and craft. Art forms ranging from sketches to paintings, origami, kirigami and other craftwork, Kalakriti is home to all. The artist in you is sure to be motivated and inspired by the spectacular creativity packaged into this exhibition!</p>
              </li>
              <li>
                <h1>Newspaper Costume Design</h1>
                <p>Do you think you have a knack for fashion designing? Then take this challenge of styling your partner by remodeling everyday newspaper into iconic party wear and watch the newspaper clad mannequins walk the ram.</p>
              </li>
              <li>
                <h1>Body Painting</h1>
                <p>Get ready to turn your partners into canvas and showcase your expertise by painting them into realistic illustrations based on a spot theme!</p>
              </li>
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
              </li>
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
                <h1>PUBG</h1>
                <p></p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p></p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p></p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p></p>
              </li>
              <li>
                <h1>PUBG</h1>
                <p></p>
              </li>
              <li>
                <h1>Counter Strike Global Offensive (CS: GO)</h1>
                <p>Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Beach Eve */}
      <div id="events-7" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 7)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Beach Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>Kite Festival</h1>
                <p>Kite flying is a sport that brings out the little child in each one of us and lights up a smile on our face. As the kites fly higher and higher so does our spirit and cheerfulness. This Incident, join us as these colourful creative kites take to the air and paint the sky with joy! Come, fly a kite and travel back to your childhood!</p>
              </li>
              <li>
                <h1>Beach Informalz</h1>
                <p>Not finding any events to your taste? Bored out of your mind? No worries! All you gotta do is take a stroll to 'The Beach'. The Informalz is awaiting you! From mind-blowing games to silly competitions between your buddies, the Beach Informalz offers a dose of fun and frolic that you cannot refuse!</p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Photography */}
      {/* <div id="events-8" className="w3-modal">
        <div className="w3-animate-bottom events-modal-content">
          <header className="">
            <span onClick={events => onLeftiClose(events, 8)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center events-modal-heading">Potpourri Events</h2>
          </header>
          <div className="events-list-wrapper">
            <ol>
              <li>
                <h1>Frames</h1>
                <p>The biggest annual cultural festival of NIT Karnataka, Surathkal Incident '20, is back again and FRAMES, invites all those passionate photographers to participate in its online photography contest.It's a great opportunity to have your photographs exhibited during Expose, the photo exhibition which is a part of Incident ‘20. Through this you can also compete with the other college photographers and show the people how creative you are to this world.</p>
              </li>
              <li>
                <h1>Expose</h1>
                <p>A picture is Prizes Worth a thousand words, said a great, wise man. Be wired to experience breathtaking images, thought-provoking scenarios and some magnificent editing wonders. Treat your eyes to some iconic photography at Incident 2020’s very own Expose, the world through the lens.</p>
              </li>
            </ol>
          </div>
        </div>
      </div> */}

      
    </div>
  );
}

export default Events;
