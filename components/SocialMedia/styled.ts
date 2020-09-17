import styled from 'styled-components';

export const SocialMediaStyled = styled.div`
  margin-top: 1rem;
  display: grid;
  padding: 0 3rem;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
    
    :hover {
      color: ${({ theme }) => theme.colors.lightBlue} !important;
      padding: .1rem;
      border-radius: 5px;
    }
  }
`;