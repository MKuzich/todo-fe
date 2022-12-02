import styled from 'styled-components';
import { Field } from 'formik';
import { Link } from 'react-router-dom';

import { device } from '../../consts/mediaqueries';
import { COLORS, SPACES, FONTS, TRANSITIONS } from '../../../theme';

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
    width: ${SPACES.xxxxl};
    font-size: ${SPACES.xl};
    padding: ${SPACES.xs} ${SPACES.l};
  }
`;

export const StyledLink = styled(Link)`
  margin: ${SPACES.xxxs} auto;
  padding: ${SPACES.s} ${SPACES.xl};
  border: solid ${COLORS.main} ${SPACES.xxs};
  font-size: ${SPACES.l};
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
  &[type='button'] {
    margin-top: ${SPACES.xxl};
  }
  ${device.tablet} {
    font-size: ${SPACES.xl};
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${SPACES.xxxl};
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACES.xl};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
