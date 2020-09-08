import React, { useContext } from 'react';
import { NavbarStyled, Logo, Links, ItemsStyles } from './styled';
import Link from 'next/link';
import { ContextTheme } from 'theme/ThemeContext';

import DarkIcon from 'assets/icons/DarkIcon';
import LigthIcon from 'assets/icons/LigthIcon';
import LogoIcon from 'assets/icons/LogoIcon';

interface itemsArray {
  id: number;
  link: string;
  name: string;
}
const listItems = (): any => {
  const items: itemsArray[] = [
    { id: 0, link: 'home', name: 'home' },
    { id: 1, link: 'about', name: 'about' },
    { id: 2, link: 'contact', name: 'contact' },
    { id: 3, link: 'porfolio', name: 'porfolio' },
  ];
  return items.map((item) => (
    <ItemsStyles key={item.id}>
      <a href={`#${item.link}`}>{item.name}</a>
    </ItemsStyles>
  ));
};

const Navbar: React.SFC = () => {
  const { themeMode, toggleTheme } = useContext(ContextTheme);

  return (
    <NavbarStyled className="navbar">
      <div className="container">
        <Link href="/">
          <Logo><LogoIcon /></Logo>
        </Link>
        <Links className="items">
          {listItems() /* Mostrar items */}
          <ItemsStyles />
          <p onClick={toggleTheme}>
            {themeMode === 'dark' ? <LigthIcon /> : <DarkIcon />}
          </p>
        </Links>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
