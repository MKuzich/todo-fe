import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../consts/mediaqueries';
import { COLORS, SPACES, FONTS, TRANSITIONS } from '../../../theme';

export const MainTitle = styled.h1`
  margin-bottom: ${SPACES.xl};
  font-size: ${SPACES.xl};
  font-weight: ${FONTS.WEIGHTS.bold};
  ${device.tablet} {
    margin-bottom: ${SPACES.xl};
    font-size: ${SPACES.xl};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${SPACES.xl};
  font-size: ${SPACES.l};
  font-weight: ${FONTS.WEIGHTS.normal};
  ${device.tablet} {
    margin-bottom: ${SPACES.xl};
    font-size: ${SPACES.xl};
  }
`;

export const Description = styled.p`
  margin-bottom: ${SPACES.xl};
  font-size: ${SPACES.l};
  ${device.tablet} {
    margin-bottom: ${SPACES.xl};
    font-size: ${SPACES.xl};
  }
`;

export const Label = styled.label`
  font-size: ${SPACES.l};
  ${device.tablet} {
    font-size: ${SPACES.xl};
  }
`;

export const ToggleWrapper = styled.div`
  z-index: 2;
  position: relative;
  width: ${SPACES.xxl};
  height: ${SPACES.xl};
  border: solid ${COLORS.main} ${SPACES.xxs};
  border-radius: ${SPACES.s};
  background-color: ${COLORS.toggler};
`;

export const Toggler = styled.div`
  z-index: 3;
  position: absolute;
  left: ${SPACES.xxxs};
  top: -${SPACES.xxxs};
  display: block;
  width: ${SPACES.xl};
  height: ${SPACES.xl};
  border: solid ${COLORS.main} ${SPACES.xxs};
  border-radius: ${SPACES.s};
  background-color: ${COLORS.white};
  cursor: pointer;
`;

export const Input = styled.input`
  appearance: none;
  :checked {
    & + ${Toggler} {
      left: ${SPACES.l};
      background-color: ${COLORS.toggler};
    }
  }
`;

export const ToggleGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :nth-of-type(1) {
    margin-bottom: ${SPACES.xl};
  }
`;

export const Controls = styled.div`
  padding: ${SPACES.xxxs} ${SPACES.xl} ${SPACES.xxxs} ${SPACES.m};
  margin-bottom: ${SPACES.xl};
  ${device.tablet} {
    padding: ${SPACES.xxxs} ${SPACES.xl} ${SPACES.xxxs} ${SPACES.xl};
    margin-bottom: ${SPACES.xl};
  }
  ${device.desktop} {
    padding: ${SPACES.xxxs} ${SPACES.xxxl} ${SPACES.xxxs} ${SPACES.xxxl};
    margin-bottom: ${SPACES.xxxl};
  }
`;

export const Button = styled(Link)`
  padding: ${SPACES.s} ${SPACES.l};
  border: solid ${COLORS.main} ${SPACES.xxs};
  font-size: ${SPACES.l};
  line-height: 1;
  text-decoration: none;
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
    padding: ${SPACES.s} ${SPACES.xl};
    font-size: ${SPACES.xl};
  }
`;
