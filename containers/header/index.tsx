import React from 'react';
import Button from 'components/ui/button';
import { HeaderStyled, HeaderContent, WaterStyled } from './styled';

const Header: React.SFC = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <HeaderContent>
          <h1>
            Mike_ <br />
            Front-End <br />
            Developer
          </h1>
          <p>Code is my life!</p>
          <div></div>
          <br />
          <Button
            hrefLink="#portfolio"
            type="large"
            color="orange"
            text="proyectos"
          />
        </HeaderContent>
        <WaterStyled>DEVELOPER</WaterStyled>{/** Marca de agua*/}
      </div>
    </HeaderStyled>
  )
}

export default Header;