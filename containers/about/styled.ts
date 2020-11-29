import styled from 'styled-components';

export const AboutStyled = styled.section`
  padding: 5rem 0;
  border-top: 3px solid rgba(151, 151, 151, 0.3);
  background: ${({ theme }) => theme.colors.secondary};
  position: relative;
  box-shadow: -5px 0 7px rgba(151, 151, 151, 0.3);

  &::before {
    background: rgba(151, 151, 151, 0.1);
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
`;

export const Content = styled.div`
  margin-right: 3rem;
  margin-top: 3rem;
  padding: 3rem 4rem 0 0;
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
    font-size: 1.8em;
  }
  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.95em;
    letter-spacing: 1.1px;
    font-weight: 400;
  }
`;

export const Image = styled.figure`
  img {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    position: absolute;
    top: -40%;
    right: 15%;
    max-width: 220px;
    z-index: 9;
  }
`;
