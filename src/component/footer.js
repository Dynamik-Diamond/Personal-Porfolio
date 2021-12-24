import React from 'react';
import { Link } from 'react-router-dom';

function footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footerlink-container container">
          {/* footer-links */}
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/work" className="footer-link">
                Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                contact
              </Link>
            </li>
          </ul>
          {/* end of footer link */}
          <div className="footer-text">
            <p>&copy; 2021 Diamond Imariabe</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
