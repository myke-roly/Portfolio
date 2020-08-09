import styled from 'styled-components';

export const SkillsStyled = styled.section`
  padding: 7rem 0;
  background-image: url('./images/bg-contact.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    background: #000000cc;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const Card = styled.div`
  background: #ffffff55;
  width: 300px;
  height: 110px;
  box-shadow: 0 0 7px #00000077;
  border-radius: 5px;
  margin: 1.7rem 1.2rem;
  z-index: 200;
`;