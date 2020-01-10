import React from 'react';
import { Link } from 'react-router-dom';

function Events() {
  return (
    <div>
      <h1>Events Page</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Events;
