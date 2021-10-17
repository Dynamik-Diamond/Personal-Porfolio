import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <main>
      <div className='back-btn-container'>
        <Link to='/' className='btn btn-home'>
          back home
        </Link>
      </div>
    </main>
  );
};

export default Work;
