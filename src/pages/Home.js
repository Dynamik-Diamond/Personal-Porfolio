import React from 'react';
import Photo from '../images/photo3.png';
import {
  FaEnvelope,
  FaDownload,
  FaEye,
  FaBehanceSquare,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa';

import { data } from '../data';
import { Link } from 'react-router-dom';

const Home = () => {
  const [projects, setProjects] =
    React.useState(data);
  return (
    <main>
      <div className='section hero-section'>
        <div className='container hero-container'>
          <article className='hero-info'>
            <h2 className='hero-title'>
              Hello,{' '}
              <span className='hero-span'>
                I’m Diamond
              </span>
            </h2>
            <p className='hero-text'>
              UX Designer and a Frontend Web
              developer passionate about designing
              and building useful digital
              solutions focused on delivering
              great user experiences.
            </p>
            <div className='hero-buttons'>
              <button className='btn hero-btn flex'>
                <FaEnvelope className='fa-icon' />
                Send a Email
              </button>
              <button className='btn hero-btn-cv flex'>
                <FaDownload className='fa-icon' />
                Download CV
              </button>
            </div>
          </article>
          <div className='hero-img'>
            <img
              className='img photo'
              src={Photo}
              alt='Photo'
            />
          </div>
        </div>
      </div>
      <section className='project'>
        <div className='container'>
          <div className='title-wrapper'>
            <h2 className='title'>
              Recent Projects
            </h2>
          </div>
          <article className='project-info'>
            <h5 className='subtitle'>
              few designs and websites i have
              worked on recently. You Want to see
              more ?{' '}
              <a href='#' className='email-link'>
                Email me
              </a>
            </h5>
            <div className='card container'>
              {projects.map((project) => {
                const { id, desc, view, img } =
                  project;
                return (
                  <article
                    key={id}
                    className='project-card'
                  >
                    <div className='photo-card-container'>
                      <img
                        src={img}
                        alt='project-photo'
                        className='img photo-card'
                      />

                      <div className='photo-info'>
                        <p>{desc}</p>
                        <a
                          href='#'
                          className='btn photo-link'
                        >
                          <FaEye className='eye-icon' />
                          {view}
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
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

export default Home;
