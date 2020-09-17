import styled from 'styled-components';
import { device } from 'helpers/device';

export const SkillsStyled = styled.section`
  padding: 7rem 0;
  background-image: url('./images/bg-contact.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  @media ${device.mobileL} {
    padding: 4rem 0;
    background-image: url('./images/null');
  }

  ::before {
    content: '';
    position: absolute;
    background: #000000cc;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const CardStyled = styled.div`
  background: #FFFFFF25;
  width: 300px;
  box-shadow: 0 0 7px #00000077;
  border-radius: 5px;
  margin: 1.7rem 1.2rem;
  z-index: 10;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  position: relative;

  @media ${device.mobileL} {
    width: auto;
  }

  p {
    font-size: .8em;
    color: #C4C4C4;
    margin-left: .86rem;
    letter-spacing: .1rem;
    @media ${device.mobileL} {
      display: none;
    }
  }

  .icon {
    position: absolute;
    right: 5%;
    bottom: 10%;
    padding: .3rem;
  }

`;