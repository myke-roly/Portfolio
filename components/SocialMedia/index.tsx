import React from 'react';
import { SocialMediaStyled } from "./styled";

import { SiLinkedin, SiInstagram, SiGithub, SiTwitter } from 'react-icons/si';
import LinkedinIcon from 'assets/icons/LinkedinIcon';

const SocialMedia: React.SFC = () => {
  return (
    <SocialMediaStyled>
      <SiLinkedin />
      <SiInstagram />
      <SiGithub />
      <SiTwitter />
    </SocialMediaStyled>
  );
};

export default SocialMedia;
