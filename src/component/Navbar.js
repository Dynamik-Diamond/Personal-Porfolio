import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaBehanceSquare,
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { isSidebarOpen, openSidebar } =
    useGlobalContext();
  return (
    <nav className='navBar'>
      <div className='nav-center'>
        <Link className='logo' to='/'>
          <img
            src='./logo name.svg'
            alt='logo-name'
            className='logo-img img'
          />
        </Link>
        <ul className='nav-links'>
          {/* <li>
            <Link to='/'>Home</Link>
          </li> */}
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/work'>Work</Link>
          </li>
          <li>
            <Link to='/contact'>contact</Link>
          </li>
        </ul>

        {/* icon-links */}
        <ul className='nav-icon-links'>
          <li>
            <a href='' className='nav-icon'>
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a href='' className='nav-icon '>
              <FaBehanceSquare />
            </a>
          </li>
          <li>
            <a href='' className='nav-icon'>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href='' className='nav-icon'>
              <FaEnvelope />
            </a>
          </li>
        </ul>
        {/* end of footer-icons */}
        <button
          className='faBars'
          onClick={openSidebar}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
