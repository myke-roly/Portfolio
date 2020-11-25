import styled from 'styled-components';
import { device } from 'helpers/device';

export const ContactStyled = styled.section`
  background: ${({ theme }) => theme.colors.default + '50'};
  .container {
    padding: 1rem 0;

    @media ${device.tablet} {
      flex-direction: column-reverse;
    }
  }
`;
