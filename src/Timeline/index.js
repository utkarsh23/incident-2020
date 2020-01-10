import React from 'react';
import { Link } from 'react-router-dom';

function Timeline() {
  return (
    <div>
      <h1>Timeline Page</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Timeline;
