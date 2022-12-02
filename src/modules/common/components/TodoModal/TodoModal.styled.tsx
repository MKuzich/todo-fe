import styled from 'styled-components';
import { Field } from 'formik';
import { device } from '../../consts/mediaqueries';
import { COLORS, SPACES, FONTS, TRANSITIONS } from '../../../theme';

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

export const ModalWindow = styled.div`
  padding: ${SPACES.xl} ${SPACES.xl};
  background-color: ${COLORS.white};
  ${device.tablet} {
    padding: ${SPACES.xl} ${SPACES.xl};
  }
  ${device.desktop} {
    padding: ${SPACES.xl} ${SPACES.xxxl};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${SPACES.xl};
  font-size: ${SPACES.xl};
  font-weight: ${FONTS.WEIGHTS.bold};
  ${device.tablet} {
    margin-bottom: ${SPACES.xl};
    font-size: ${SPACES.xl};
  }
`;

export const Label = styled.label`
  font-size: ${SPACES.l};
  margin-bottom: ${SPACES.s};
  ${device.tablet} {
    font-size: ${SPACES.xl};
    margin-bottom: ${SPACES.xs};
  }
`;

export const Input = styled(Field)`
  width: ${SPACES.xxxl};
  padding: ${SPACES.xs} ${SPACES.xs};
  border: solid ${COLORS.main} ${SPACES.xxs};
  font-size: ${SPACES.l};
  line-height: 1;
  ${device.tablet} {
    width: ${SPACES.xxxl};
    font-size: ${SPACES.xl};
    padding: ${SPACES.xs} ${SPACES.l};
  }
`;

export const Button = styled.button`
  margin: ${SPACES.xxxs} auto;
  padding: ${SPACES.s} ${SPACES.xl};
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
    font-size: ${SPACES.xl};
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACES.xl};
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

export const Check = styled(Field)`
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
  margin-bottom: ${SPACES.xl};
  ${device.tablet} {
    margin-bottom: ${SPACES.xl};
  }
`;
