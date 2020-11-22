import React from 'react';
import { FooterStyled } from './styled';
import LogoIcon from 'assets/icons/LogoIcon';

const Footer: React.SFC = () => {
  const year: Date = new Date();

  return (
    <FooterStyled>
      <div className="container">
        <p> &copy; All rights reserved By MikeDev - {year.getFullYear()}</p>
        <LogoIcon />
      </div>
    </FooterStyled>
  );
};

export default Footer;
