import React from 'react';
import { SocialMediaStyled } from './styled';

import { SiLinkedin, SiInstagram, SiGithub, SiTwitter } from 'react-icons/si';

interface Props {
  children: any;
}

function SocialMedia(props: Props) {
  return (
    <SocialMediaStyled>
      <SiLinkedin />
      <SiInstagram />
      <SiGithub />
      <SiTwitter />
      {props.children}
    </SocialMediaStyled>
  );
}

export default SocialMedia;
