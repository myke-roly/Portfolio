import React from 'react';
import { BurguerMenuStyled } from './styled';

interface PropsI {
  openMenu?(): any;
  isOpenMenu: boolean;
}

const BurguerMenu: React.FC<PropsI> = ({ openMenu, isOpenMenu }) => {
  return (
    <BurguerMenuStyled onClick={openMenu} isOpenMenu={isOpenMenu}>
      <span></span>
      <span></span>
      <span></span>
    </BurguerMenuStyled>
  );
};

export default BurguerMenu;
