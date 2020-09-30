import styled from 'styled-components';
import { device } from "helpers/device";

export const ProjectsStyled = styled.section`
  padding-bottom: 7rem;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const ItemsStyled = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  background: #000;
  padding: 1rem 5rem;
`;

export const ItemStyled = styled.li.attrs((props) => ({
  className: props.className,
}))`
  padding: .5rem 1rem;
  color: white;
  position: relative;
  margin: 0 1rem;
  z-index: 15;

  &::before {
    content: '';
    position: absolute;
    top: 15%;
    right: -15%;
    width: 2px;
    height: 70%;
    background: #ffffff30;
  }

  &.active, &:hover {
    background: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const ListProjectsStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  gap: 2rem;
  place-items: center;
  padding: 4rem 2rem;
  @media ${device.tablet} {
    display: block;
  }
`;

export const ProjectStyled = styled.article`
  width: 100%;
  height: 300px;
  position: relative;
  z-index: 20;
  overflow: hidden;
  box-shadow: 0 0 7px rgba(0, 0, 0, .5);
  border-radius: 10px;

  &:hover section {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00546Be0;
    transition: all 1s ease;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Modal = styled.section`
  position: absolute;
  top: 100%;
  padding: 2rem;
  transition: all 1s ease;

  div {
  display: flex;
  align-items: center;
    
    h2 {
      color: yellow;
      font-size: 2rem;
      text-transform: uppercase;
      padding-bottom: -5px;
      border-bottom: 3px solid yellow;
    }

    a {
      color: white;
      margin: 0 1rem;
      svg {
        width: 18px;
        height: 18px;
      }

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .description {
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 1rem;
    font-size: 0.95em;
  }

`;

export const Tool = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  color: white;
  z-index: 150;
`; 