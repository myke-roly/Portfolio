import styled from 'styled-components';

export const SocialMediaStyled = styled.div`
  margin-left: 5rem;
  margin-top: 1rem;
  svg {
    width: 35px;
    height: 35px;
    margin-right: 1.7rem;
    font-size: 60px;
    :hover {
      background: ${({ theme }) => theme.colors.lightBlue};
      padding: .1rem;
      border-radius: 5px;
    }
  }
`;