import styled from 'styled-components';

export const SocialMediaStyled = styled.div`
  margin-top: 1rem;
  padding: 0;
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.lightBlue} !important;
      padding: 0.1rem;
      border-radius: 5px;
    }
  }
`;
