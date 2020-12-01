import styled, { keyframes } from 'styled-components';
import { device } from 'helpers/device';

function animate(porcent: number) {
  return keyframes`
  from {
    transform: translateX(${porcent}%);
  }

  to {
    transform: translateX(0);
  }
`;
}

export const ProjectStyled = styled.section`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  @media ${device.tablet} {
    flex-direction: column;
    margin: 1.5rem auto;

    &:nth-child(even) {
      flex-direction: column !important;
    }

    img {
      width: 100% !important;
    }
  }

  &:nth-child(odd) {
    animation: ${animate(-45)} 1s ease;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    animation: ${animate(45)} 1s ease;
  }

  img {
    width: 320px;
    object-fit: cover;
    border-radius: 7px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
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
    color: ${({ theme }) => theme.colors.lightBlue};
    transition: transform 0.3s ease;
    width: 20px;

    @media ${device.tablet} {
      /* color: #333; */
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Tools = styled.ul`
  color: ${({ theme }) => theme.colors.gray};
  z-index: 99;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;

  li {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    padding: 0.3rem 0.7rem;
    color: ${({ theme }) => theme.colors.gray};
    background: ${({ theme }) => theme.colors.default};
    border-radius: 7px;
    font-size: 0.7em;
    white-space: nowrap;
  }
`;
