import styled from 'styled-components';

export const ProjectsStyled = styled.section`
  padding-bottom: 7rem;
  background: ${({ theme }) => theme.colors.linearGradiant};
`;

export const ItemsStyled = styled.ul`
  background: ${({ theme }) => theme.colors.default};

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

export const ItemStyled = styled.li`
  border-radius: 4px;
  background: ${(props: Props) => (props.active ? props.theme.colors.lightBlue : '')};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  text-transform: capitalize;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  z-index: 15;

  &::before {
    content: '';
    position: absolute;
    top: 33%;
    right: -5%;
    width: 2px;
    height: 33%;
    background: #ffffff20;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const ListProjectsStyled = styled.section`
  margin: 1rem 0;
  overflow: hidden;
`;

interface Props {
  active?: boolean;
  theme?: any;
}
