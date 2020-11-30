import styled from 'styled-components';
import { device } from 'helpers/device';

export const BurguerMenuStyled = styled.div`
  visibility: 0;
  display: none;
  width: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 999;

  @media ${device.tablet} {
    visibility: visible;
    margin-left: 0.7rem;

    span {
      border-radius: 50px;
      width: 100%;
      height: 3.5px;
      margin-bottom: 0.2rem;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;
