import styled from 'styled-components';
import { device } from 'helpers/device';

export const AboutStyled = styled.section`
  padding: 4rem 0;
  border-top: 3px solid rgba(151, 151, 151, 0.3);
  background: ${({ theme }) => theme.colors.default};
  position: relative;
  box-shadow: -5px 0 7px rgba(151, 151, 151, 0.3);

  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    gap: 4rem;

    @media ${device.tablet} {
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }
`;

export const Content = styled.div`
  margin-top: 3rem;
  padding: 1rem 0;

  @media ${device.tablet} {
    padding: 2rem 0 0 0;
    margin-right: 0;
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
    font-size: 1.8em;
  }

  p {
    color: ${({ theme }) => theme.colors.gray}cc;
    font-size: 0.95em;
    letter-spacing: 1.1px;
    font-weight: 400;
  }
`;

export const Image = styled.figure`
  img {
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    max-width: 200px;
    object-fit: cover;
    z-index: 9;

    @media ${device.tablet} {
    }
  }
`;
