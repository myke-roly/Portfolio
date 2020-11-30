import styled, { keyframes } from 'styled-components';
import { device } from 'helpers/device';

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
  padding: 0.85rem 0;
  background: ${({ theme }) => theme.colors.linearGradiant};
  box-shadow: -1px 1px 10px rgba(0, 0, 0, 0.5);
  z-index: 100;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      svg {
        height: 100%;
        width: 35px;
      }
    }
  }
`;

export const LinksStyles = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinksItemsStyles = styled.div`
  display: flex;

  @media ${device.tablet} {
    display: none;
  }
`;

export const ItemsStyles = styled.li`
  margin-left: 2rem;
  height: inherit;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.75rem;
    padding: 0.35rem;
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
      animation: ${link} 0.3s ease;
    }
  }
`;

export const ButtonTheme = styled.button`
  background: none;
  border: none;
  outline: none;
`;
