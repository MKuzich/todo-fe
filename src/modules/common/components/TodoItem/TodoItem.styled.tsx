import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../consts/mediaqueries';
import { COLORS, SPACES, FONTS, TRANSITIONS } from '../../../theme';

export const NavBtn = styled(Link)`
  display: block;
  padding: ${SPACES.s} ${SPACES.s};
  border: solid ${COLORS.main} ${SPACES.xxs};
  font-size: ${SPACES.m};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  box-shadow: ${SPACES.xs} ${SPACES.xs} ${SPACES.xs} ${SPACES.xxxs}
    ${COLORS.shadow};
  background-color: ${COLORS.white};
  color: ${COLORS.main};
  transition: ${TRANSITIONS.background}, ${TRANSITIONS.color};
  :hover,
  :focus {
    background-color: ${COLORS.hover};
    color: ${COLORS.white};
  }
  ${device.desktop} {
    font-size: ${SPACES.l};
  }
  ${device.desktopMid} {
    font-size: ${SPACES.xl};
  }
`;

export const Title = styled.h3`
  padding: ${SPACES.s} ${SPACES.s};
  font-size: ${SPACES.l};
  font-weight: ${FONTS.WEIGHTS.normal};
  ${device.tablet} {
  }
  ${device.desktop} {
    width: 20%;
  }
  ${device.desktopMid} {
    font-size: ${SPACES.xl};
    padding: ${SPACES.s} ${SPACES.l};
  }
`;

export const Description = styled.p`
  padding: ${SPACES.s} ${SPACES.s};
  font-size: ${SPACES.m};
  ${device.tablet} {
  }
  ${device.desktop} {
    width: 50%;
    font-size: ${SPACES.l};
    border-left: solid ${COLORS.main} ${SPACES.xxs};
    border-right: solid ${COLORS.main} ${SPACES.xxs};
  }
  ${device.desktopMid} {
    font-size: ${SPACES.xl};
    padding: ${SPACES.s} ${SPACES.l};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${SPACES.xl};
  padding: 0 ${SPACES.l};
  gap: ${SPACES.l};
  ${device.tablet} {
  }
  ${device.desktop} {
    margin-top: ${SPACES.xxxs};
    width: 30%;
    padding: ${SPACES.xxxs} ${SPACES.s};
    gap: ${SPACES.s};
  }
  ${device.desktopMid} {
    padding: ${SPACES.xxxs} ${SPACES.l};
    gap: ${SPACES.xl};
  }
`;

export const Button = styled.button`
  padding: ${SPACES.s} ${SPACES.s};
  border: solid ${COLORS.main} ${SPACES.xxs};
  font-size: ${SPACES.m};
  line-height: 1;
  cursor: pointer;
  box-shadow: ${SPACES.xs} ${SPACES.xs} ${SPACES.xs} ${SPACES.xxxs}
    ${COLORS.shadow};
  background-color: ${COLORS.white};
  transition: ${TRANSITIONS.background}, ${TRANSITIONS.color};
  :hover,
  :focus {
    background-color: ${COLORS.hover};
    color: ${COLORS.white};
  }
  ${device.desktop} {
    font-size: ${SPACES.l};
  }
  ${device.desktopMid} {
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

export const Label = styled.label`
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
    & + ${Label} {
      left: ${SPACES.l};
      background-color: ${COLORS.toggler};
    }
  }
`;
