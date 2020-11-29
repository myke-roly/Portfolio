import React, { useContext } from 'react';
import { NavbarStyled, Links, ItemsStyles, ButtonTheme } from './styled';
import Link from 'next/link';
import { ContextTheme } from 'theme/ThemeContext';
import { ProjectsContext } from 'state/projests/context';

import DarkIcon from 'assets/icons/DarkIcon';
import LigthIcon from 'assets/icons/LigthIcon';
import LogoIcon from 'assets/icons/LogoIcon';
import LightLogoIcon from 'assets/icons/LightLogoIcon';

interface itemsArray {
  id: number;
  link: string;
  name: string;
}

export const ListItems: React.FunctionComponent = (): any => {
  const items: itemsArray[] = [
    { id: 1, link: 'home', name: 'home' },
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

const Navbar: React.FunctionComponent = () => {
  const { themeMode, toggleTheme } = useContext(ContextTheme);
  const { getProjects } = useContext(ProjectsContext);

  return (
    <NavbarStyled>
      <div className="container">
        <Link href="/">
          <a className="logo">{themeMode === 'dark' ? <LogoIcon /> : <LightLogoIcon />}</a>
        </Link>
        <Links>
          <ListItems />
          <ItemsStyles />
          <ButtonTheme onClick={toggleTheme}>{themeMode === 'dark' ? <LigthIcon /> : <DarkIcon />}</ButtonTheme>
        </Links>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
