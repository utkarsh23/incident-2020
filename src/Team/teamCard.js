import React from 'react';

class TeamCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div class={"our-team mix " + this.props.category}>
        <div class="picture">
          <img
            class="img-fluid"
            src="https://cdn.glitch.com/21943bea-5c73-4cf3-81b5-1b7fd62627ba%2Fpro.jpg?v=1576657391203"
            alt="member"
          />
        </div>
        <div class="team-content">
          <h3 class="name">{this.props.name}</h3>
          <h4 class="title">{this.props.role}</h4>
        </div>
        <ul class="social">
          <li>
            <a
              href="/team"
              class="fa fa-facebook"
              aria-hidden="true"
            >&nbsp;</a>
          </li>
          <li>
            <a
              href="/team"
              class="fa fa-twitter"
              aria-hidden="true"
            >&nbsp;</a>
          </li>
          <li>
            <a
              href="/team"
              class="fa fa-google-plus"
              aria-hidden="true"
            >&nbsp;</a>
          </li>
          <li>
            <a
              href="/team"
              class="fa fa-linkedin"
              aria-hidden="true"
            >&nbsp;</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TeamCard;
