import React from 'react';
import { Link } from 'react-router-dom';

function Icare() {
  return (
    <div>
      <h1>i-Care Page</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Icare;
