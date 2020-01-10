import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
  return (
    <div>
      <h1>Team Page</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Team;
