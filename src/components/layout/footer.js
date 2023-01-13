import React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'


const Footer = () => (
  <footer className="footer">
    <div className="contain">
      <div className="footer-info">
        <p><strong>No affiliate/referral links.</strong> Referral codes only provided when they benefit the user but there is no requirement to use them.</p>
        <a href="https://paynym.is/+dampmath1f2" className="footer-site">
          https://paynym.is/+dampmath1f2
        </a>
      </div>
      <div className="footer-social">
        <Link to="/privacy-policy/" className="footer-site">
          Privacy policy
        </Link>
        <ul>
          <li><a href="https://github.com/svrgnty/svrgnty.com"><FontAwesomeIcon icon={brands('github')} /> <span className="element-invisible">Github</span></a></li>
          <li><a href="https://www.nostr.guru/p/f3b633c30007c2fbedbbd028c2e973066504c15138b22d5c24f16a65f1a90ec4"><img alt="" src={'/images/nostr.png'} /> <span className="element-invisible">Nostr</span></a></li>
          <li><a href="https://twitter.com/svrgnty"><FontAwesomeIcon icon={brands('twitter')} /> <span className="element-invisible">Twitter</span></a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;