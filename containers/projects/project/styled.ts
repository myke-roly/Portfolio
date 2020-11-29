import styled from 'styled-components';

export const ProjectStyled = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  img {
    width: 300px;
    object-fit: cover;
    border-radius: 7px;
  }
`;

export const InfoStyled = styled.article`
  width: 100%;

  p {
    color: ${({ theme }) => theme.colors.gray}99;
    margin-top: 0.9rem;
  }
`;

export const InfoTitleStyled = styled.section`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    font-size: 1.5em;
  }

  svg {
    color: yellow;
    transition: transform 0.3s ease;
    width: 20px;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Tools = styled.ul`
  color: white;
  z-index: 150;
  display: flex;
  gap: 0.3rem;
`;
