import React from 'react';

class TeamCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            


    <div class="our-team mix a">
        <div class="picture">
        <img
            class="img-fluid"
            src="https://picsum.photos/130/130?image=836"
        />
        </div>
        <div class="team-content">
        <h3 class="name">Mary Huntley</h3>
        <h4 class="title">Web Developer</h4>
        </div>
        <ul class="social">
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-facebook"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-twitter"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-google-plus"
              aria-hidden="true"
            ></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              class="fa fa-linkedin"
              aria-hidden="true"
            ></a>
          </li>
        </ul>
    </div>



        );
    }
}
 
export default TeamCard;