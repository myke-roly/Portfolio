import styled from 'styled-components';

export const MobileMenuStyles = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 99;
  background: ${({ theme }) => theme.colors.linearGradiant};
`;
