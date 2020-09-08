import React from 'react';
import LinkedinIcon from 'assets/icons/LinkedinIcon';
import { SocialMediaStyled } from "./styled";

const SocialMedia: React.SFC = () => {
  return (
    <SocialMediaStyled>
      <LinkedinIcon />
      <LinkedinIcon />
      <LinkedinIcon />
      <LinkedinIcon />
    </SocialMediaStyled>
  );
};

export default SocialMedia;
