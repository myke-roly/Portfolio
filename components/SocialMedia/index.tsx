import React from 'react';
import { SocialMediaStyled } from './styled';

import { SiLinkedin, SiInstagram, SiGithub, SiTwitter } from 'react-icons/si';
import logEvent from 'utils/firebase/firebase';
import { EVENTS_NAME } from 'constants/event';

const SocialMedia: React.FC = () => {
  return (
    <SocialMediaStyled>
      <a href="https://www.linkedin.com/in/myke-roly/" target="_blank" rel="noreferrer noopener nofollow">
        <SiLinkedin role="button" onClick={() => logEvent(EVENTS_NAME.LINKEDIN_BTN)} />
      </a>
      <a href="https://www.github.com/myke-roly" target="_blank" rel="noreferrer noopener nofollow">
        <SiGithub role="button" onClick={() => logEvent(EVENTS_NAME.GITHUB_BTN)} />
      </a>
      <a href="https://www.instagram.com/myke_roly" target="_blank" rel="noreferrer noopener nofollow">
        <SiInstagram role="button" onClick={() => logEvent(EVENTS_NAME.INSTAGRAM_BTN)} />
      </a>
      <a href="https://www.twitter.com/myke_roly" target="_blank" rel="noreferrer noopener nofollow">
        <SiTwitter role="button" onClick={() => logEvent(EVENTS_NAME.TWITTER_BTN)} />
      </a>
    </SocialMediaStyled>
  );
};

export default SocialMedia;
