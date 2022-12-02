import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../consts/mediaqueries';
import { COLORS, SPACES, TRANSITIONS } from '../../../theme';

export const Button = styled(Link)`
  padding: ${SPACES.s} ${SPACES.l};
  border: solid ${COLORS.main} ${SPACES.xxs};
  font-size: ${SPACES.l};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  box-shadow: ${SPACES.xs} ${SPACES.xs} ${SPACES.xs} ${SPACES.xxxs} ${COLORS.shadow};
  background-color: ${COLORS.white};
  color: ${COLORS.main};
  transition: ${TRANSITIONS.color}, ${TRANSITIONS.background};
  :hover,
  :focus {
    background-color: ${COLORS.hover};
    color: ${COLORS.white};
  }
  ${device.desktopMid} {
    font-size: ${SPACES.xl};
  }
`;

export const CntrlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${SPACES.xl};
  ${device.tablet} {
    justify-content: end;
    margin-bottom: ${SPACES.xl};
  }
`;
