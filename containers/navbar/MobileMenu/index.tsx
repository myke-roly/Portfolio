import React from 'react';
import { MobileMenuStyles } from './styled';

const MobileMenu: React.FC = ({ children }) => {
  return <MobileMenuStyles>{children}</MobileMenuStyles>;
};

export default MobileMenu;
