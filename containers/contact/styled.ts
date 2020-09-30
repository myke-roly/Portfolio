import styled from 'styled-components';
import { device } from 'helpers/device';

export const ContactStyled = styled.section`
  background: ${({ theme }) => theme.colors.default + '50'};
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

    @media ${device.tablet} {
        flex-direction: column-reverse;
    }
  }
`;

export const Right = styled.div`
  width: 100%;
  text-align: center;

  form {
    transform: translateY(-35%);
    border-radius: 7px;
    background: #00000069;
    padding: 3rem 4rem 2rem;

    input,
    textarea {
      width: 100%;
      border: 0;
      border-bottom: 1px solid white;
      padding: 1rem;
      margin-bottom: 2rem;
      background: transparent;
      outline: none;
      color: white;

      &::placeholder {
        color: ${({ theme }) => theme.colors.grey};
      }
    }

    button {
      width: 100%;
    }
    h2 {
      color: ${({ theme }) => theme.colors.primary};
      text-transform: uppercase;
      margin-top: 1.5rem;
      font-size: 2.2rem;
    }
  }
`;

export const Left = styled.div`
  width: 100%;
  text-align: center;

  div {
    padding: 0;
    width: 80%;
    margin: auto;
    margin-top: 3rem;
    padding-left: 5rem;
    justify-content: center;

    svg {
      width: 18px !important;
    }
  }

  ul {
    width: 90%;
    margin: auto;

    li {
      margin-bottom: 1.5rem;
      a {
        font-size: 1rem;
      }
    }
  }
`;
