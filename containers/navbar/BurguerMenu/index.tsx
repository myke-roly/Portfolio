import React from 'react';
import { BurguerMenuStyled } from './styled';

interface PropsI {
  openMenu: () => any;
}

const BurguerMenu: React.FC<PropsI> = ({ openMenu }) => {
  return (
    <BurguerMenuStyled onClick={openMenu}>
      <span></span>
      <span></span>
      <span></span>
    </BurguerMenuStyled>
  );
};

export default BurguerMenu;
