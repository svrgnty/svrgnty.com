import React from "react";
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

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
const shareTitle = 'Everything Bitcoin';
const shareDescription = 'Bitcoin for financial sovereignty';
const shareDescriptionTwitter = 'Bitcoin for financial sovereignty';
const shareTags = '#Bitcoin';
const shareVia = 'svrgnty';

class Share extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  
  render () {
    return (
      <Menu right customBurgerIcon={ <FontAwesomeIcon icon={solid('share-alt')} mask={solid('circle')} transform="shrink-8" /> } customCrossIcon={ <FontAwesomeIcon icon={solid('times')} /> }>
        <TwitterShareButton
          url={shareUrl}
          title={shareDescriptionTwitter}
          hashtag={shareTags}
          via={shareVia}
          className="share-link">
          <FontAwesomeIcon icon={brands('twitter')} /> Twitter
        </TwitterShareButton>
        <FacebookShareButton
          url={shareUrl}
          quote={shareDescription}
          hashtag={shareTags}
          className="share-link">
          <FontAwesomeIcon icon={brands('facebook-f')} /> Facebook
        </FacebookShareButton>
        <LinkedinShareButton
          url={shareUrl}
          title={shareTitle}
          description={shareDescription}
          className="share-link">
          <FontAwesomeIcon icon={brands('linkedin')} /> LinkedIn
        </LinkedinShareButton>
        <TelegramShareButton
          url={shareUrl}
          title={shareDescription}
          className="share-link">
          <FontAwesomeIcon icon={brands('telegram-plane')} /> Telegram
        </TelegramShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={shareDescription}
          className="share-link">
          <FontAwesomeIcon icon={brands('whatsapp')} /> WhatsApp
        </WhatsappShareButton>
        <RedditShareButton
          url={shareUrl}
          title={shareDescription}
          className="share-link">
          <FontAwesomeIcon icon={brands('reddit-alien')} /> Reddit
        </RedditShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={shareTitle}
          body={shareUrl}
          className="share-link">
          <FontAwesomeIcon icon={solid('at')} /> Email
        </EmailShareButton>
      </Menu>
    );
  }
}

export default Share;
