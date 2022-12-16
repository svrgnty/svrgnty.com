import React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => (
  <footer className="footer">
    <div className="contain">
      <div className="footer-info">
        <p>No affiliate/referral links.</p>
        <a href="https://paynym.is/+dampmath1f2" className="footer-site">
          https://paynym.is/+dampmath1f2
        </a>
        <p>Last updated: 14 December 2022</p>
      </div>
      <div className="footer-social">
        <Link to="/privacy-policy/" className="footer-site">
          Privacy policy
        </Link>
        <ul>
          <li><a href="https://twitter.com/svrgnty"><FontAwesomeIcon icon={faTwitter} /> <span className="element-invisible">Twitter</span></a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;