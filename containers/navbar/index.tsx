import React, { useContext } from 'react';
import { NavbarStyled, Logo, Links, ItemsStyles } from './styled';
import Link from 'next/link';
import LightSVG from './icons/light.svg';
import DarkSVG from './icons/dark.svg';
import { ContextTheme } from 'theme/ThemeContext';

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

const Navbar: React.SFC<Props> = () => {
  const { themeMode, toggleTheme } = useContext(ContextTheme);

  return (
    <NavbarStyled className="navbar">
      <div className="container">
        <Link href="/">
          <Logo>
            <img src="./logo.svg" alt="logo" />
          </Logo>
        </Link>
        <Links className="items">
          { listItems() /* Mostrar items */ }
          <ItemsStyles />
          <p onClick={toggleTheme}>{themeMode === 'dark' ? <LightSVG color="yellow" /> : <DarkSVG color="var(--primary)" />}</p>
        </Links>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
