import styled from 'styled-components';
import { device } from '../../consts/mediaqueries';
import { COLORS, SPACES, TRANSITIONS } from '../../../theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: start;
  gap: ${SPACES.m};
  margin-bottom: ${SPACES.xl};
  ${device.tablet} {
    justify-content: space-between;
    flex-direction: row;
    gap: ${SPACES.s};
  }
`;

export const FilterGroup = styled.div``;

export const SearchGroup = styled.div``;

export const Button = styled.button`
  padding: ${SPACES.s} ${SPACES.s};
  border: solid ${COLORS.main} ${SPACES.xxs};
  font-size: ${SPACES.l};
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
    font-size: ${SPACES.m};
  }
  ${device.desktop} {
    font-size: ${SPACES.l};
  }
  ${device.desktopMid} {
    font-size: ${SPACES.xl};
    padding: ${SPACES.s} ${SPACES.s};
  }
`;

export const Input = styled.input`
  width: ${SPACES.xxxl};
  padding: ${SPACES.s} ${SPACES.l};
  border: solid ${COLORS.main} ${SPACES.xxs};
  font-size: ${SPACES.l};
  line-height: 1;
  ${device.tablet} {
    font-size: ${SPACES.m};
  }
  ${device.desktop} {
    font-size: ${SPACES.l};
  }
  ${device.desktopMid} {
    font-size: ${SPACES.xl};
    width: ${SPACES.xxxl};
  }
`;
