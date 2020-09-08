import styled from 'styled-components';

export const AboutStyled = styled.section`
  padding: 5rem 0;
  background: rgba(0,0,0,50%);
  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
`;

export const Content = styled.div`
  margin-right: 3rem;
  margin-top: 3rem;
  padding: 3rem 4rem 0 3rem;
  width: 50%;
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
    font-size: 1.8em;
  }
  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: .95em;
    letter-spacing: 1.1px;
    font-weight: 400;
  }
`;

export const Image = styled.figure` 
  img {
    box-shadow: 0 0 10px rgba(0,0,0,.7);
    position: absolute;
    top: -40%;
    right: 15%;
    max-width: 250px;
  }
`;