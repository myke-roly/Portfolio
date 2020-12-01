import styled from 'styled-components';
import { device } from 'helpers/device';

export const SkillsStyled = styled.section`
  padding: 5rem 0;
  background-image: url('./images/bg-contact.jpg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media ${device.mobileL} {
    padding: 4.5rem 0;
  }

  ::before {
    content: '';
    position: absolute;
    background: #000000aa;
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
    gap: 1.8rem;
  }
`;

export const CardStyled = styled.div`
  background: ${({ theme }) => theme.colors.linearGradiant};
  width: 270px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  z-index: 10;
  padding: 1.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  position: relative;

  @media ${device.mobileL} {
    width: auto;
  }

  p {
    font-size: 0.8em;
    color: ${({ theme }) => theme.colors.gray};
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
