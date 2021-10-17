import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main>
      <div className='back-btn-container'>
        <Link to='/' className='btn btn-home'>
          back home
        </Link>
      </div>
      <div>
        <p>
          This Page does not exit go back home
        </p>
      </div>
    </main>
  );
};

export default Error;
