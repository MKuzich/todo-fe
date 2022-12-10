import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

export const Overlay = styled.div`
  position: fixed;
  top: ${SPACES.xxxs};
  left: ${SPACES.xxxs};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.overlay};
  z-index: 1200;
`;
