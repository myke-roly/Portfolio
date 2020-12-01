import React from 'react';
import { SocialMediaStyled } from './styled';

import { SiLinkedin, SiInstagram, SiGithub, SiTwitter } from 'react-icons/si';

const SocialMedia: React.FC = () => {
  return (
    <SocialMediaStyled>
      <a href="https://www.linkedin.com/in/myke-roly/" target="_blank" rel="noreferrer noopener nofollow">
        <SiLinkedin />
      </a>
      <a href="https://www.github.com/myke-roly" target="_blank" rel="noreferrer noopener nofollow">
        <SiGithub />
      </a>
      <a href="https://www.instagram.com/myke_roly" target="_blank" rel="noreferrer noopener nofollow">
        <SiInstagram />
      </a>
      <a href="https://www.twitter.com/myke_roly" target="_blank" rel="noreferrer noopener nofollow">
        <SiTwitter />
      </a>
    </SocialMediaStyled>
  );
};

export default SocialMedia;
