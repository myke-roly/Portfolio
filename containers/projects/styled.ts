import styled from 'styled-components';

export const ProjectsStyled = styled.section`
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

  &::before {
    content: '';
    position: absolute;
    top: 15%;
    right: -15%;
    width: 2px;
    height: 70%;
    background: #ffffff30;

    &:nth-child(-1) {
      width: 0;
    }
  }

  &.active, &:hover {
    background: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 4px;
    cursor: pointer;
  }
`;
