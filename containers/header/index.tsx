import React from 'react';
import { HeaderStyled, HeaderContent, WaterStyled } from './styled';

import SocialMedia from "components/SocialMedia";

const Header: React.SFC = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <HeaderContent>
          <div>
            <p>Code is my life!</p>
            <h1>
              Mike_ <br />
              Front<span>End</span> <br />
              Developer
            </h1>
            <SocialMedia />
          </div>
        </HeaderContent>
        <WaterStyled>DEVELOPER</WaterStyled>{/** Marca de agua*/}
      </div>
    </HeaderStyled>
  )
}

export default Header;