import React from 'react';
import {
  FaTimes,
  FaBehanceSquare,
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } =
    useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen
          ? 'sidebar-wrapper show'
          : 'sidebar-wrapper'
      }`}
    >
      <div className='sidebar'>
        <button
          className='close-btn'
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>

        {/* SUBLINKS */}
        <div className='sublink-container'>
          <ul className='sub-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link
                to='/about'
                className='side-link'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/work'
                className='side-link'
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='side-link'
              >
                contact
              </Link>
            </li>
          </ul>

          {/* icon-links */}
          <ul className='sub-icon-links'>
            <li>
              <a href='' className='sub-icon'>
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a href='' className='sub-icon '>
                <FaBehanceSquare />
              </a>
            </li>
            <li>
              <a href='' className='sub-icon'>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href='' className='sub-icon'>
                <FaEnvelope />
              </a>
            </li>
          </ul>
          {/* end of footer-icons */}
        </div>
      </div>
      {/* END OF SUBLINKS */}
    </aside>
  );
};

export default Sidebar;
