import styled from 'styled-components';
import { device } from 'helpers/device';

interface PropsStyled {
  isOpenMenu: boolean;
  theme?: any;
}

export const BurguerMenuStyled = styled.button`
  visibility: 0;
  display: none;
  width: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 999;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;

  @media ${device.tablet} {
    visibility: visible;
    margin-left: 0.7rem;

    span {
      border-radius: 50px;
      width: 100%;
      height: 3.5px;
      margin-bottom: 0.2rem;
      background: ${({ theme }) => theme.colors.primary};
      transition: transform 0.3s ease;

      &:nth-child(even) {
        width: 80%;
        background: ${(props: PropsStyled) => (!props.isOpenMenu ? props.theme.colors.primary : 'transparent')};
      }

      &:nth-child(1) {
        transform: ${(props: PropsStyled) => (props.isOpenMenu ? 'translateY(-50%) rotate(45deg)' : '0')};
      }

      &:nth-child(3) {
        transform: ${(props: PropsStyled) => (props.isOpenMenu ? 'translateY(50%) rotate(-45deg)' : '0')};
      }
    }
  }
`;
