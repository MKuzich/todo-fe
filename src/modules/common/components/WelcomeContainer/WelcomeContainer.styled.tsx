import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from '../../consts/mediaqueries';
import { COLORS, SPACES, FONTS, TRANSITIONS } from '../../../theme';

export const Title = styled.h2`
  margin-bottom: ${SPACES.xxxl};
  font-size: ${SPACES.xxl};
  font-weight: ${FONTS.WEIGHTS.bold};
`;

export const StyledLink = styled(Link)`
  width: 100%;
  margin: ${SPACES.xxxs} auto;
  padding: ${SPACES.s} ${SPACES.xl};
  border: solid ${COLORS.main} ${SPACES.xxs};
  font-size: ${SPACES.l};
  text-align: center;
  color: inherit;
  text-decoration: none;
  line-height: 1;
  cursor: pointer;
  box-shadow: ${SPACES.xs} ${SPACES.xs} ${SPACES.xs} ${SPACES.xxxs} ${COLORS.shadow};
  background-color: ${COLORS.white};
  transition: ${TRANSITIONS.background}, ${TRANSITIONS.color};
  :hover,
  :focus {
    background-color: ${COLORS.hover};
    color: ${COLORS.white};
  }
  ${device.tablet} {
    font-size: ${SPACES.xl};
  }
`;

export const SecondaryLink = styled(Link)`
  margin: ${SPACES.xl} auto ${SPACES.xxxs} auto;
  font-size: ${SPACES.l};
  cursor: pointer;
  ${device.tablet} {
    font-size: ${SPACES.xl};
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACES.xxl};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${SPACES.xxxl};
`;
