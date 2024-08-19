import React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'


const Footer = () => (
  <footer className="footer">
    <div className="contain">
      <div className="footer-info">
        <p>May contain clearly marked affiliate links and referral codes. They do not influence the content or quality of the information provided. Using them may provide you with a discount and support this website's maintenance and development.</p><br />
        <p>This website provides general information and is not intended as financial or investment advice. Use at your own risk, without warranty, and without reliance on svrgnty.com for losses, injuries, or damages resulting from its use.</p>
      </div>
      <div className="footer-info">
        <p>Est. <FontAwesomeIcon icon={solid('dice-d6')} /><span className="element-invisible">Block</span> 488383</p>
      </div>
      <div className="footer-social">
        <Link to="/privacy-policy/" className="footer-site">
          Privacy policy
        </Link>
        <ul>
          <li><a href="https://getalby.com/p/svrgnty"><FontAwesomeIcon icon={solid('bolt')} /> <span className="element-invisible">Send some sats with lightning</span></a></li>
          <li><a href="https://github.com/svrgnty/svrgnty.com"><FontAwesomeIcon icon={brands('github')} /> <span className="element-invisible">Github</span></a></li>
          <li><a href="https://snort.social/p/npub17wmr8scqqlp0hmdm6q5v96tnqejsfs238zez6hpy794xtudfpmzqf7kms8"><FontAwesomeIcon icon={solid('feather-pointed')} /> <span className="element-invisible">Nostr</span></a></li>
          <li><a href="https://x.com/svrgnty"><FontAwesomeIcon icon={brands('x-twitter')} /> <span className="element-invisible">X</span></a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;