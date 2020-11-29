import styled from 'styled-components';
import { device } from 'helpers/device';

export const SkillsStyled = styled.section`
  padding: 5rem 0;
  background-image: url('./images/bg-contact.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: fixed;
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

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }
`;

export const CardStyled = styled.div`
  background: #ffffff25;
  width: 270px;
  box-shadow: 0 0 7px #00000077;
  border-radius: 5px;
  z-index: 10;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  position: relative;

  @media ${device.mobileL} {
    width: auto;
  }

  p {
    font-size: 0.8em;
    color: #c4c4c4;
    margin-left: 0.5rem;
    letter-spacing: 0.1rem;

    @media ${device.mobileL} {
      display: none;
    }
  }

  .icon {
    position: absolute;
    right: 5%;
    bottom: 10%;
    padding: 0.3rem;
  }
`;
