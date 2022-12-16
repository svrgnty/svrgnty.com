import React from "react";
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faTimes, faCircle, faAt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faTelegramPlane, faWhatsapp, faRedditAlien } from '@fortawesome/free-brands-svg-icons';

import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
} from 'react-share';

const shareUrl = 'https://svrgnty.com';
const shareTitle = 'Bitcoin Resources';
const shareDescription = 'A curated list of the best Bitcoin resources';
const shareDescriptionTwitter = 'A curated list of the best #Bitcoin resources';
const shareTags = '#Bitcoin';
const shareVia = 'svrgnty';

class Share extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  
  render () {
    return (
      <Menu right customBurgerIcon={ <FontAwesomeIcon icon={faShareAlt} mask={faCircle} transform="shrink-8" /> } customCrossIcon={ <FontAwesomeIcon icon={faTimes} /> }>
        <TwitterShareButton
          url={shareUrl}
          title={shareDescriptionTwitter}
          hashtag={shareTags}
          via={shareVia}
          className="share-link">
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </TwitterShareButton>
        <FacebookShareButton
          url={shareUrl}
          quote={shareDescription}
          hashtag={shareTags}
          className="share-link">
          <FontAwesomeIcon icon={faFacebookF} /> Facebook
        </FacebookShareButton>
        <LinkedinShareButton
          url={shareUrl}
          title={shareTitle}
          description={shareDescription}
          className="share-link">
          <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
        </LinkedinShareButton>
        <TelegramShareButton
          url={shareUrl}
          title={shareDescription}
          className="share-link">
          <FontAwesomeIcon icon={faTelegramPlane} /> Telegram
        </TelegramShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={shareDescription}
          className="share-link">
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </WhatsappShareButton>
        <RedditShareButton
          url={shareUrl}
          title={shareDescription}
          className="share-link">
          <FontAwesomeIcon icon={faRedditAlien} /> Reddit
        </RedditShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={shareTitle}
          body={shareUrl}
          className="share-link">
          <FontAwesomeIcon icon={faAt} /> Email
        </EmailShareButton>
      </Menu>
    );
  }
}

export default Share;
