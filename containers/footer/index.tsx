import React from 'react';
import { FooterStyled } from './styled';
import SocialMedia from 'components/SocialMedia';

const Footer: React.FC = () => {
  const year: Date = new Date();

  return (
    <FooterStyled>
      <div className="container" id="contact">
        <SocialMedia />
        <p> &copy; All rights reserved By MikeDev - {year.getFullYear()}</p>
      </div>
    </FooterStyled>
  );
};

export default Footer;
