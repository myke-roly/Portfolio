import styled, { keyframes } from 'styled-components';
import { device } from 'helpers/device';

const animateMenu = keyframes`
  from {
    transform: translateX(50%);
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const MobileMenuStyles = styled.div`
  display: none;

  @media ${device.tablet} {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99;
    background: ${({ theme }) => theme.colors.lightBlue};
    display: block !important;
    animation: ${animateMenu} 0.3s ease !important;
    -moz-animation: ${animateMenu} 0.3s ease !important;
    -webkit-animation: ${animateMenu} 0.3s ease !important;

    ul {
      width: 100%;
      height: auto;
      display: grid;
      gap: 1rem;
      padding: 3rem 0;

      li {
        a {
          font-size: 1.5em;
        }
      }
    }
  }
`;
