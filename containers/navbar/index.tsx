import React, { useContext } from 'react';
import { NavbarStyled, Links, ItemsStyles, ButtonTheme } from './styled';
import Link from 'next/link';
import { ContextTheme } from 'theme/ThemeContext';

import DarkIcon from 'assets/icons/DarkIcon';
import LigthIcon from 'assets/icons/LigthIcon';
import LogoIcon from 'assets/icons/LogoIcon';
import LightLogoIcon from 'assets/icons/LightLogoIcon';

interface itemsArray {
  id: number;
  link: string;
  name: string;
}

const ListItems: React.SFC = (): any => {
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
    <NavbarStyled>
      <div className="container">
        <Link href="/">
          <a className="logo">
            {themeMode === 'dark' ? <LogoIcon /> : <LightLogoIcon />}
          </a>
        </Link>
        <Links>
          <ListItems />
          <ItemsStyles />
          <ButtonTheme onClick={toggleTheme}>
            {themeMode === 'dark' ? <LigthIcon /> : <DarkIcon />}
          </ButtonTheme>
        </Links>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
