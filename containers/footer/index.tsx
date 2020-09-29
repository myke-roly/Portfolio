import React from 'react';
import { FooterStyled } from './styled';
import LogoIcon from 'assets/icons/LogoIcon';

const Footer: React.SFC = () => {
  return (
    <FooterStyled>
      <div className="container">
        <p> &copy; All rights reserved mykeDev - 2020</p>
        <LogoIcon />
      </div>
    </FooterStyled>
  );
};

export default Footer;
