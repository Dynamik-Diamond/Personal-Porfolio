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
      <div className="sidebar">
        <button
          className="close-btn"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>

        {/* SUBLINKS */}
        <div className="sublink-container">
          <ul className="sub-links">
            <li>
              <Link to="/" onClick={closeSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="side-link"
                onClick={closeSidebar}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="side-link"
                onClick={closeSidebar}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="side-link"
                onClick={closeSidebar}
              >
                contact
              </Link>
            </li>
          </ul>

          {/* icon-links */}
          <ul className="sub-icon-links">
            <li>
              <a
                href="https://github.com/Stone535"
                target="_blank"
                className="sub-icon"
                onClick={closeSidebar}
              >
                <FaGithubSquare />
              </a>
            </li>
            {/* <li>
              <a
                href=""
                target="_blank"
                className="sub-icon "
              >
                <FaBehanceSquare />
              </a>
            </li> */}
            <li>
              <a
                href="http://www.linkedin.com/in/diamond-imariabe"
                target="_blank"
                className="sub-icon"
                onClick={closeSidebar}
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="mailto:imariabediamond@gmail.com"
                target="_blank"
                className="sub-icon"
                onClick={closeSidebar}
              >
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
