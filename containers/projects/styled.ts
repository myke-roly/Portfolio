import styled from 'styled-components';
import { device } from 'helpers/device';

export const ProjectsStyled = styled.section`
  padding-bottom: 7rem;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const ItemsStyled = styled.ul`
  background: #000;
  .container {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 1rem 0;
    overflow: scroll;

    &::scrollbar {
      display: none;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    &::-ms-scrollbar {
      display: none;
    }
  }
`;

export const ItemStyled = styled.li.attrs((props) => ({
  className: props.className,
}))`
  padding: 0.5rem 1rem;
  color: white;
  position: relative;
  margin-right: 1rem;
  z-index: 15;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: 15%;
    right: -5%;
    width: 2px;
    height: 70%;
    background: #ffffff30;
  }

  &.active,
  &:hover {
    background: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const ListProjectsStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  place-items: center;
  padding: 4rem 0;
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
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  border-radius: 4px;

  &:hover section {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00546be0;
    transition: all 1s ease;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Modal = styled.section`
  position: absolute;
  top: 100%;
  padding: 1rem 1.5rem;
  transition: all 1s ease;

  div {
    display: flex;
    align-items: center;

    h2 {
      color: yellow;
      font-size: 1.2rem;
      text-transform: capitalize;
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
    font-size: 0.9em;
  }
`;

export const Tool = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 2rem;
  color: white;
  z-index: 150;
`;
