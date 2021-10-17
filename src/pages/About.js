import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main>
      <div className='back-btn-container'>
        <Link to='/' className='btn btn-home'>
          back home
        </Link>
      </div>
      <section className='about-section'>
        <div className='container about-container'>
          <article className='about-info'>
            <h2 className='about-title'>
              About.
            </h2>
            <h5>
              i'm a software developer and UX
              Designer based in Lagos, Nigeria.
            </h5>
            <p className='about-text'>
              I love working with technology and
              using them to solve complex problems
              into easy, usable and interactive
              design solutions.
            </p>
          </article>
          <article className='about-image'>
            <img
              src='./portfolio-img.png'
              alt='porfolio-image'
              className='img about-img'
            />
          </article>
        </div>
      </section>
      <footer className='footer'>
        <div className='footerlink-container container'>
          {/* footer-links */}
          <ul className='footer-links'>
            <li>
              <Link
                to='/'
                className='footer-link'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='footer-link'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/work'
                className='footer-link'
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='footer-link'
              >
                contact
              </Link>
            </li>
          </ul>
          {/* end of footer link */}
          <div className='footer-text'>
            <p>&copy; 2021 Diamond Imariabe</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default About;
