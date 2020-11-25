import React from 'react';
import { FooterStyled } from './styled';
import SocialMedia from 'components/SocialMedia';

const Footer: React.SFC = () => {
  const year: Date = new Date();

  return (
    <FooterStyled>
      <div className="container">
        <SocialMedia />
        <p> &copy; All rights reserved By MikeDev - {year.getFullYear()}</p>
      </div>
    </FooterStyled>
  );
};

export default Footer;
