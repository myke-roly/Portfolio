import React, { PropsWithChildren } from 'react';
import { NavbarStyled, Logo, Links, ItemsStyles } from './styled';
import Link from 'next/link';
import GithubSVG from './github.svg';

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

type Props = {
  changeTheme: () => any
}

const Navbar: React.SFC<Props> = ({ changeTheme }) => {
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
          <ItemsStyles>
            <a
              href="https://www.github.com/myke-roly"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <GithubSVG />
            </a>
          </ItemsStyles>
          <button onClick={changeTheme}>Dark mode</button>
        </Links>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
