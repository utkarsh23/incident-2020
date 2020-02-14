import React from 'react';
import '../static/events.css';
import Sidenav from '../Sidenav';
import hamburger from '../static/hamburger.png';
import Homeicon from '../homeicon';

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function onLeftiCloseP(events, index) {
  document.getElementById('litpourri-' + index).style.display='none';
}

function onViewClick(event, index) {
  document.getElementById('litpourri-' + index).style.display='block';
}

function LitPourri() {
  return (
    <div className="litpourri-wrapper">
      <Sidenav />
      <h1 className="center">Lit Pourri</h1>
      <br /><br />
      <div className="container center">
        <p className="left-align">Litpourri is an online literary fest held by the Literary, Stage and Debating Society, NITK in collaboration with NITK’s Annual cultural extravaganza, Incident. The fest allows for diverse entries under the banner of four events.<br /><br />Scroll down to read more about each of the events and to participate! The portal closes on 28<sup>th</sup> Feb, so get scribbling!</p>
        <br /><br /><br />
        <div className="waves-effect waves-light btn-large blue-grey darken-4 litpourri-btn" onClick={event => onViewClick(event, 0)}><i class="material-icons left">notes</i>Guidelines</div>
      </div>
      <br /><br /><br /><br /><br />
      <div className="container">
        <h2 className="center">Sy(nope)sis</h2>
        <p className="center"><i>"Misunderstood wizard chap just wants to kill an annoying kid for seven books. He dies."</i></p>
        <p className="center"><i>- Harry Potter</i></p><br />
        <p>J.K Rowling would surely have an angry fit if she read the aforementioned lines as a synopsis of her novels, right?<br /><br />That is exactly what we want you to do in this short submission event. Come up with a way to explain the plot of a book in the worst, but most creative way possible. It is not necessary for the entry to be as concise as the one given as an example above. Run those grey cells, as what counts the most is the creative thought behind the lines.</p>
        <div className="row litpourri-top">
          <div className="col s8 m2 l2 offset-s2 offset-m3 offset-l3"><a rel="noopener noreferrer" href="https://forms.gle/NN9tUvf9Do2Cz47e9" target="_blank" className="waves-effect waves-light btn-large blue-grey darken-4 litpourri-btn"><i class="material-icons left">person_add</i>Register</a></div>
          <div className="col s8 m2 l2 offset-s2 offset-m2 offset-l2"><div onClick={event => onViewClick(event, 1)} className="waves-effect waves-light btn-large blue-grey darken-4 litpourri-btn"><i class="material-icons left">format_list_bulleted</i>Rules</div></div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <div className="container">
        <h2 className="center">The News that wasn’t</h2>
        <p className="center"><i>"Donald Trump wins the Nobel Peace Prize"</i></p>
        <p className="center"><i>"Queen Elizabeth steps down and abolishes the British Monarchy"</i></p>
        <p className="center"><i>"A Cuppa a day keeps the Cancer at bay"</i></p><br />
        <p>How often have you read a piece of news and laughed at how ridiculous it sounded? It’s definitely fake, isn’t it?<br /><br />Here’s a chance for you to summon the inner journalist. Hit us with the fakest and most ostentatious news headline and article you can come up with. Make sure it’s outrageous enough for us to want to read it but at the same time believable.</p>
        <div className="row litpourri-top">
          <div className="col s8 m2 l2 offset-s2 offset-m3 offset-l3"><a rel="noopener noreferrer" href="https://forms.gle/fKKgomCBr1tV69Dg7" target="_blank" className="waves-effect waves-light btn-large blue-grey darken-4 litpourri-btn"><i class="material-icons left">person_add</i>Register</a></div>
          <div className="col s8 m2 l2 offset-s2 offset-m2 offset-l2"><div onClick={event => onViewClick(event, 2)} className="waves-effect waves-light btn-large blue-grey darken-4 litpourri-btn"><i class="material-icons left">format_list_bulleted</i>Rules</div></div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <div className="container">
        <h2 className="center">Mirage</h2>
        <p>Oxymoron. Two contradicting ideas. A single effect.<br /><br />This is precisely what we want you to achieve in this long piece. We want you to explore two contradicting ideas and combine them together in a seamless manner to produce a single magnificent piece.<br /><br />Maybe you’re going to spin a tale of a couple that was lonely together or describe the melancholy merriment of a woman who gave birth at her father’s funeral. Whatever it is that you have in store for us, we are so excited to be taken through your illusionary lens.</p>
        <div className="row litpourri-top">
          <div className="col s8 m2 l2 offset-s2 offset-m3 offset-l3"><a rel="noopener noreferrer" href="https://forms.gle/zYFBaU4VkEuoztDY9" target="_blank" className="waves-effect waves-light btn-large blue-grey darken-4 litpourri-btn"><i class="material-icons left">person_add</i>Register</a></div>
          <div className="col s8 m2 l2 offset-s2 offset-m2 offset-l2"><div onClick={event => onViewClick(event, 3)} className="waves-effect waves-light btn-large blue-grey darken-4 litpourri-btn"><i class="material-icons left">format_list_bulleted</i>Rules</div></div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <div className="container">
        <h2 className="center">Ripples across Time</h2>
        <p className="center"><i>"A butterfly flaps its wings and a typhoon occurs across the world."</i></p><br />
        <p>The Butterfly Effect is a famous idea that large impactful incidents are often caused by small, seemingly insignificant events.<br /><br />Choose one of the two prompts for your piece:<br /><br /><ol><li>Twenty years ago you did something - something insignificant (painting a picture, washing the dishes). Today, twenty years later, you can’t comprehend the role it played in the way your life played out.</li><li>A trivial action today leads to a startling repercussions fifteen years later. What is going to happen in the future?</li></ol><br />Take us through time as you explore decisions and the phenomena of small actions and large consequences.</p>
        <div className="row litpourri-top">
          <div className="col s8 m2 l2 offset-s2 offset-m3 offset-l3"><a rel="noopener noreferrer" href="https://forms.gle/gduYDz6pQGSAE6fB8" target="_blank" className="waves-effect waves-light btn-large blue-grey darken-4 litpourri-btn"><i class="material-icons left">person_add</i>Register</a></div>
          <div className="col s8 m2 l2 offset-s2 offset-m2 offset-l2"><div onClick={event => onViewClick(event, 4)} className="waves-effect waves-light btn-large blue-grey darken-4 litpourri-btn"><i class="material-icons left">format_list_bulleted</i>Rules</div></div>
        </div>
      </div>
      <img src={hamburger} alt="ham-menu" onClick={openRightMenu} className="hamburger" />
      <Homeicon />
      <br /><br /><br />
      <div id="litpourri-0" className="w3-modal">
        <div className="w3-animate-bottom litpourri-modal-content">
          <header className="">
            <span onClick={events => onLeftiCloseP(events, 0)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center litpourri-modal-heading">General Guidelines</h2>
          </header>
          <div className="litpourri-modal-wrapper">
            <ol>
              <li>Kindly adhere to the word limits specified in each category.</li>
              <li>Any entry which the judges deem to be hate speech / discriminatory / violent / racially motivated in nature will stand on the grounds of disqualification.</li>
              <li>Copy good deeds, not words. Plagiarism of any kind is prohibited. If found guilty, the submission will be discarded instantly.</li>
              <li>Our judging panel would also need time to go through all the amazing entries that you submit. Therefore, we expect you to understand our commitment towards working on strict deadlines. The submission deadlines cannot be relaxed under any circumstances.</li>
              <li>Multiple submissions across more than one categories are allowed (In short, go crazy!)</li>
              <li>Entries would be judged on the following parameters: Relevance to category , literary prowess of the piece, creativity and uniqueness of thought.</li>
            </ol>
          </div>
        </div>
      </div>
      <div id="litpourri-1" className="w3-modal">
        <div className="w3-animate-bottom litpourri-modal-content">
          <header className="">
            <span onClick={events => onLeftiCloseP(events, 1)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center litpourri-modal-heading">Rules</h2>
          </header>
          <div className="litpourri-modal-wrapper">
            <ol>
              <li>Word Limit: 30-100 words</li>
              <li>Plagiarism is strictly prohibited.</li>
              <li>Your submission should contain <i>Title of the book</i> and <i>Synopsis</i></li>
            </ol>
          </div>
        </div>
      </div>
      <div id="litpourri-2" className="w3-modal">
        <div className="w3-animate-bottom litpourri-modal-content">
          <header className="">
            <span onClick={events => onLeftiCloseP(events, 2)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center litpourri-modal-heading">Rules</h2>
          </header>
          <div className="litpourri-modal-wrapper">
            <ol>
              <li>Word Limit: 200-300 words</li>
              <li>Plagiarism is strictly prohibited.</li>
              <li>Your submission should contain <i>News Article Headline</i> and <i>Article Content</i></li>
            </ol>
          </div>
        </div>
      </div>
      <div id="litpourri-3" className="w3-modal">
        <div className="w3-animate-bottom litpourri-modal-content">
          <header className="">
            <span onClick={events => onLeftiCloseP(events, 3)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center litpourri-modal-heading">Rules</h2>
          </header>
          <div className="litpourri-modal-wrapper">
            <ol>
              <li>Word Limit: 1500 words</li>
              <li>Plagiarism is strictly prohibited.</li>
              <li>Your submission should highlight the theme. There are no other restrictions or requirements apart from that.</li>
            </ol>
          </div>
        </div>
      </div>
      <div id="litpourri-4" className="w3-modal">
        <div className="w3-animate-bottom litpourri-modal-content">
          <header className="">
            <span onClick={events => onLeftiCloseP(events, 4)}
              className="w3-display-topright"><i className="material-icons white-text">close</i></span>
            <h2 className="center litpourri-modal-heading">Rules</h2>
          </header>
          <div className="litpourri-modal-wrapper">
            <ol>
              <li>Word Limit: 1500 words</li>
              <li>Plagiarism is strictly prohibited.</li>
              <li>Your submission should highlight the theme. There are no other restrictions or requirements apart from that.</li>
            </ol>
          </div>
        </div>
      </div>
   </div>
  );
}

export default LitPourri;
