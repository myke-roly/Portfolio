import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  position: fixed;
  bottom: 10%;
  right: 5%;
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.lightBlue};
  color: white;
  cursor: pointer;
  z-index: 1111;
  scroll-behavior: smooth;
`;
