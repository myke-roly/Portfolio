import styled, { keyframes } from 'styled-components';

const render = keyframes`
  0%{
    opacity: 0;
  }
  25%{
    opacity: .5;
    transform: scale(1.2)
  }
  100%{
    opacity: 1;
  }
`;

const downText = keyframes`
  from {
    opacity: 0;
    margin-top: -100%;
  }
  to {
    opacity: 1;
    margin-top: 0;
`;

export const HeaderStyled = styled.header`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.secondary};
  position: relative;
  overflow: hidden;
  padding-bottom: 2rem;

  ::before {
    content: '';
    background-image: url('./images/bg.svg');
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    left: 8rem;
    top: 5rem;
    width: 40rem;
    height: 100%;
    animation: ${render} 1s ease;
    z-index: 2;

    @media (max-width: 720px) {
      left: 0;
      opacity: 0.5;
    }
  }
`;

export const HeaderContent = styled.div`
  width: 40%;
  height: 100%;
  margin-top: 8rem;
  overflow: hidden;
  position: relative;
  z-index: 10;
  left: 60%;
  top: 0;

  @media (max-width: 720px) {
    margin-top: 15rem;
    font-size: 12px;
    left: 0%;
    width: 100%;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 4em;
    font-weight: bold;
    line-height: 1.4;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    animation: ${downText} 0.5s ease;

    span {
      color: ${({ theme }) => theme.colors.lightBlue};
    }
  }

  p {
    border-left: 5px solid ${({ theme }) => theme.colors.lightBlue};
    font-size: 1em;
    padding-left: 0.5rem;
    margin: 0.7rem 0;
    color: ${({ theme }) => theme.colors.gray};
    animation: ${downText} 1s ease;
  }
`;

export const WaterStyled = styled.span`
  position: fixed;
  opacity: 0.05;
  font-size: 9em;
  font-weight: bold;
  letter-spacing: 3px;
  top: 90%;
  left: 10%;
  color: ${({ theme }) => theme.colors.gray};
  z-index: 10;
  transform: rotate(-90deg);

  @media (max-width: 720px) {
    font-size: 7em;
  }
`;
