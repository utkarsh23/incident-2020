import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Contact;
