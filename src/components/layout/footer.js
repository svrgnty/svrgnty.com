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
        <p>Est. <FontAwesomeIcon icon={solid('dice-d6')} /><span className="element-invisible">Block</span> <a href="https://mempool.space/block/00000000000000000066fd45e09a6bae691b1d9bea1d2b1ccdc7b7adbf89f3a3" target="_blank">488383</a></p>
      </div>
      <div className="footer-social">
        <Link to="/privacy-policy/" className="footer-site">
          Privacy policy
        </Link>
        <ul>
          <li><a href="https://getalby.com/p/svrgnty" target="_blank"><FontAwesomeIcon icon={solid('bolt')} /> <span className="element-invisible">Send some sats with lightning</span></a></li>
          <li><a href="https://github.com/svrgnty/svrgnty.com" target="_blank"><FontAwesomeIcon icon={brands('github')} /> <span className="element-invisible">Github</span></a></li>
          <li><a href="https://snort.social/p/npub17wmr8scqqlp0hmdm6q5v96tnqejsfs238zez6hpy794xtudfpmzqf7kms8" target="_blank"><FontAwesomeIcon icon={solid('feather-pointed')} /> <span className="element-invisible">Nostr</span></a></li>
          <li><a href="https://x.com/svrgnty" target="_blank"><FontAwesomeIcon icon={brands('x-twitter')} /> <span className="element-invisible">X</span></a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;