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

import { data1 } from '../data';
import { Link } from 'react-router-dom';
import Footer from '../component/footer';
import { FadeInSection } from '../component/Fade-in-out';
const Home = () => {
  const [projects, setProjects] = React.useState(data1);
  return (
    <main>
      <div className="section hero-section">
        <div className="container hero-container">
          <article className="hero-info">
            <h2 className="hero-title">
              Hello,{' '}
              <span className="hero-span">I’m Diamond</span>
            </h2>
            <p className="hero-text">
              A Frontend Web developer passionate about
              designing and building useful digital
              solutions focused on delivering great user
              experiences.
            </p>
            <div className="hero-buttons">
              <button className="btn hero-btn">
                Let's work together!
              </button>
              {/* <button className="btn hero-btn flex">
                <FaEnvelope className="fa-icon" />
                Send a Email
              </button>
              <button className="btn hero-btn-cv flex">
                <FaDownload className="fa-icon" />
                Download CV
              </button> */}
            </div>
          </article>
          <div className="hero-img">
            <img
              className="img photo"
              src={Photo}
              alt="Photo"
            />
          </div>
        </div>
      </div>
      <section className="project">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="title">Recent Projects</h2>
          </div>
          <article className="project-info">
            <h5 className="subtitle">
              few designs and websites i have worked on
              recently. You Want to see more ?{' '}
              <li className="email-list-link">
                <a
                  href="mailto:imariabediamond@gmail.com"
                  className="email-link"
                >
                  Email me
                </a>
              </li>
            </h5>
            <div className="card container">
              {projects.map(project => {
                const { id, desc, view, img, link } =
                  project;
                return (
                  <FadeInSection>
                    <article
                      key={id}
                      className="project-card home-card"
                    >
                      <div className="photo-card-container">
                        <img
                          src={img}
                          alt="project-photo"
                          className="img photo-card"
                        />

                        <div className="photo-info">
                          <p>{desc}</p>
                          <a
                            href={link}
                            className="btn photo-link"
                            target="_blank"
                          >
                            <FaEye className="eye-icon" />
                            {view}
                          </a>
                        </div>
                      </div>
                    </article>
                  </FadeInSection>
                );
              })}
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
