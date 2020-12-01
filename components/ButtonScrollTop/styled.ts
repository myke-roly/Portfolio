import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  position: fixed;
  bottom: 10%;
  right: 5%;
  /* width: 35px; */
  /* height: 35px; */
  display: grid;
  place-items: center;
  border: none;
  border-radius: 4px;
  background: #000;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  z-index: 1111;
  scroll-behavior: smooth;
`;
