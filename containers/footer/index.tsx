import React from 'react';
import { FooterStyled, Info } from './styled';
import LogoIcon from 'assets/icons/LogoIcon';
import SocialMedia from 'components/SocialMedia';

const Footer: React.SFC = () => {
  const year: Date = new Date();

  return (
    <FooterStyled>
      <div className="container">
        <p> &copy; All rights reserved By MikeDev - {year.getFullYear()}</p>
        <Info>
          <SocialMedia>
            <LogoIcon />
          </SocialMedia>
        </Info>
      </div>
    </FooterStyled>
  );
};

export default Footer;
