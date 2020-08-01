import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  min-height: 95vh;
  background: ${({ theme }) => theme.colors.dark};
  position: relative;
  overflow: hidden;
  padding-bottom: 2rem;

  ::before {
    content: '';
    background-image: url('../../../images/bg.svg');
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    right: 5rem;
    top: 5rem;
    width: 30rem;
    height: 100%;
    animation: render 1s ease;
    z-index: 2;
    background-image: url('./images/bg.svg');
    @media (max-width: 720px) {
      left: 0;
      opacity: .5;
    }
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 8rem;
  overflow: hidden;
  position: relative;
  z-index: 10;

  @media (max-width: 720px) {
    margin-top: 15rem;
    font-size: 12px;
  }

  h1 {
    font-size: 3.9em;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    line-height: 1.5;
    letter-spacing: 1.5px;
  }

  p {
    border-left: 5px solid ${({ theme }) => theme.colors.lightBlue};
    font-size: 1em;
    padding-left: .5rem;
    margin: .7rem 0;
    color: gray;
  }
`;

export const WaterStyled = styled.span`
  position: absolute;
  opacity: 0.2;
  font-size: 8em;
  font-weight: 900;
  letter-spacing: 5px;
  bottom: 0;
  right: 5%;

  @media (max-width: 720px) {
    width: 100%;
    font-size: 4.5em;
  }
`;