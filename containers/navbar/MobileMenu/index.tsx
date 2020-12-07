import React from 'react';
import { MobileMenuStyles } from './styled';

interface PropsI {
  changeState?(): void;
}

const MobileMenu: React.FC<PropsI> = ({ children, changeState }) => {
  return <MobileMenuStyles onClick={changeState}>{children}</MobileMenuStyles>;
};

export default MobileMenu;
