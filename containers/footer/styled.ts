import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #000;
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;

  svg {
    width: 30px;
    height: 30px;
  }
`;