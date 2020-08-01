import styled, { keyframes } from 'styled-components';

const link = keyframes`
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
`;


export const NavbarStyled = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: .85rem 0;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.5);
  z-index: 100;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.a`
  color: var(--orange-color);
  img {
    width: 2rem;
  }
`;

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemsStyles = styled.li`
  margin-left: 1rem;
  height: inherit;
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.65rem;
    padding: .5rem;
    position: relative;
    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
    :hover::before {
      content: '';
      width: 100%;
      height: 2px;
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      background: ${({ theme }) => theme.colors.gray};
      animation: ${link} 500ms ease;
    }

    svg {
      color: ${({ theme }) => theme.colors.primary};
      width: 1.2em;
      height: auto;
    }
  }
`;