import React from 'react';
import { NavbarStyled, Logo, Links, ItemsStyles } from './styled';
import Link from 'next/link';
import GithubSVG from './github.svg';

type itemsArray = {
  id: number;
  link: string;
  name: string;
}
const Items: React.SFC = () => {
  const items: itemsArray[] = [
    { id: 0, link: 'home', name: 'home' },
    { id: 1, link: 'about', name: 'about' },
    { id: 2, link: 'contact', name: 'contact' },
    { id: 3, link: 'porfolio', name: 'porfolio' },
  ];
  return (
    <>
      {items.map((item) => (
        <ItemsStyles>
          <a href={`#${item.link}`}>{item.name}</a>
        </ItemsStyles>
      ))}
    </>
  );
}

const Navbar: React.SFC = () => {
  return (
    <NavbarStyled className="navbar">
      <div className="container">
        <Link href="/">
          <Logo>
            <img src="./logo.svg" alt="logo" />
          </Logo>
        </Link>
        <Links className="items">
          <Items />
          <ItemsStyles>
            <a href="https://www.github.com/myke-roly" target="_blank" rel="noreferrer noopener nofollow">
              <GithubSVG />
            </a>
          </ItemsStyles>
        </Links>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
