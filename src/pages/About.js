import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/footer';
import { FadeInSection } from '../component/Fade-in-out';

const About = () => {
  return (
    <main>
      {/* <div className='back-btn-container'>
        <Link to='/' className='btn btn-home'>
          back home
        </Link>
      </div> */}
      <section className="about-section">
        <div className="container about-container">
          <article className="about-info">
            <h2 className="about-title">About.</h2>
            <h5>
              i'm a software developer and UX Designer based
              in Lagos, Nigeria.
            </h5>
            <p className="about-text">
              I love working with technology and using them
              to solve complex problems into easy, usable
              and interactive design solutions.
            </p>
          </article>
          <article className="about-image">
            <img
              src="./portfolio-img.png"
              alt="porfolio-image"
              className="img about-img"
            />
          </article>
        </div>
      </section>

      <section className="story-section">
        <div className="container story-container">
          {/* story image container */}
          <article className="story-img-container ">
            <FadeInSection>
              <img
                src="my-story-pic.jpg"
                alt="story picture"
                className="img story-img"
              />
            </FadeInSection>
          </article>
          <article className="story-info">
            <FadeInSection>
              <h4 className="story-title">My story</h4>
            </FadeInSection>
            <FadeInSection>
              <p className="story-text">
                Growing up, I was always fascinated by
                technology, from messing around with TV
                remote controls and sound systems at home to
                figuring out what each button did, scraping
                for wires, light bulbs to connect to
                batteries, and learning graphic design with
                Corel Draw made me realize I had a knack for
                creativity and problem solving using
                technology.
                <br />
                My interest in coding began when I
                participated in the Schlumberger Technology
                Engagement program as a University student.
                Despite the fact that my role on the team
                was as a geophysicist, I felt left out as I
                watched my teammate work with C# to build
                functionality in Petrel Software. This
                sparked my desire to learn a programming
                language, begin with HTML and CSS, and then
                progress to JavaScript. <br />
                It's always amazing to apply responsive
                design principles to building responsive web
                pages with HTML, CSS, and JavaScript,
                watching how the layout changes to the
                mobile design, which incorporates creativity
                and problem-solving for me, and the thought
                of building digital solutions that help
                people improve their daily lives keeps me
                motivated. When I'm not coding or working,
                I'm either listening to music or playing
                football with friends.
              </p>
            </FadeInSection>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
