import styled from 'styled-components';
import { device } from '../../consts/mediaqueries';
import { SPACES } from '../../../theme';

export const StyledContainer = styled.div`
  margin: ${SPACES.s} auto;
  max-width: ${SPACES.xxxxl};
  padding: ${SPACES.xl} ${SPACES.xl};
  ${device.tablet} {
    padding: ${SPACES.xl} ${SPACES.xl};
    max-width: ${SPACES.xxxxxl};
  }
  ${device.desktop} {
    padding: ${SPACES.xl} ${SPACES.xxxl};
  }
`;
