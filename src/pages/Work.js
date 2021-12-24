import React from 'react';
import { Link } from 'react-router-dom';

import { data } from '../data';

import { FaEye } from 'react-icons/fa';
import Footer from '../component/footer';
import { FadeInSection } from '../component/Fade-in-out';

const Work = () => {
  const [projects, setProjects] = React.useState(data);

  return (
    <main>
      {/* <div className='back-btn-container'>
        <Link to='/' className='btn btn-home'>
          back home
        </Link>
      </div> */}
      <section className="work-section">
        <div className="container work-container">
          <article className="work-info">
            <h2 className="work-title">Projects.</h2>
            <h5>
              check out some of the latest Web Design i have
              worked on
            </h5>
            <p className="work-text">
              Here are some of the projects i have worked on
              using these Web technologies (HTML, CSS,
              JAVASCRIPT AND REACT.JS)
            </p>
          </article>
          <article className="work-image">
            <img
              src="./desktop-preview.jpg"
              alt="porfolio-image"
              className="img work-image"
            />
          </article>
        </div>
      </section>
      <div className="card work-card container">
        {projects.map(project => {
          const { id, desc, view, img, link } = project;
          return (
            <FadeInSection>
              <article key={id} className="project-card">
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
      <Footer />
    </main>
  );
};

export default Work;
