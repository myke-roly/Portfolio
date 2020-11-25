import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary}ee;
  padding: 2rem 0;
  color: white;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.primary}44;

  .container {
    p {
      font-size: 0.8em;
      margin-top: 1rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 18px;
      }
    }
  }
`;
