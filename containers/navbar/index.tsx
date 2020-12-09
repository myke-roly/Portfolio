import React, { useContext, useState } from 'react';
import { NavbarStyled, LinksStyles, ItemsStyles, LinksItemsStyles, ButtonTheme } from './styled';
import Link from 'next/link';
import { ContextTheme } from 'theme/ThemeContext';

import DarkIcon from 'assets/icons/DarkIcon';
import LigthIcon from 'assets/icons/LigthIcon';
import LogoIcon from 'assets/icons/LogoIcon';
import LightLogoIcon from 'assets/icons/LightLogoIcon';

import BurguerMenu from './BurguerMenu';
import MobileMenu from './MobileMenu';

interface itemsArray {
  id: number;
  link: string;
  name: string;
}

export const ListItems: React.FC = (): any => {
  const items: itemsArray[] = [
    { id: 1, link: '', name: 'home' },
    { id: 2, link: 'about', name: 'about' },
    { id: 3, link: 'contact', name: 'contact' },
    { id: 4, link: 'projects', name: 'projects' },
  ];

  return items.map((item) => (
    <ItemsStyles key={item.id}>
      <a href={`#${item.link}`}>{item.name}</a>
    </ItemsStyles>
  ));
};

const Navbar: React.FC = () => {
  const { themeMode, toggleTheme } = useContext(ContextTheme);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  function changeState(): void {
    setIsOpenMenu((state) => !state);
  }

  return (
    <NavbarStyled>
      <Link href="/">
        <a className="logo">{themeMode === 'dark' ? <LogoIcon /> : <LightLogoIcon />}</a>
      </Link>
      <LinksStyles>
        <LinksItemsStyles>
          <ListItems />
        </LinksItemsStyles>
        <ButtonTheme onClick={toggleTheme}>{themeMode === 'dark' ? <LigthIcon /> : <DarkIcon />}</ButtonTheme>
        <BurguerMenu openMenu={() => setIsOpenMenu((state) => !state)} isOpenMenu={isOpenMenu} />
        {isOpenMenu && (
          <MobileMenu changeState={changeState}>
            <ul>
              <ListItems />
            </ul>
          </MobileMenu>
        )}
      </LinksStyles>
    </NavbarStyled>
  );
};

export default Navbar;
