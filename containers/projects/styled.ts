import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const ProjectsStyled = styled.section`
  padding-bottom: 7rem;
  background: ${({ theme }) => theme.colors.linearGradiant};
`;

export const ItemsStyled = styled.ul`
  background: ${({ theme }) => theme.colors.default};
  & > div {
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
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  margin-right: 1rem;
  z-index: 15;
  white-space: nowrap;
  text-transform: capitalize;

  &::before {
    content: '';
    position: absolute;
    top: 15%;
    right: -5%;
    width: 2px;
    height: 70%;
    background: #ffffff30;
  }

  &:nth-child(1),
  &:hover {
    background: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const ListProjectsStyled = styled.section`
  padding: 1rem 0;
  overflow: hidden;
`;
