import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <main>
      <div className='back-btn-container'>
        <Link to='/' className='btn btn-home'>
          back home
        </Link>
      </div>
    </main>
  );
}

export default Contact;
