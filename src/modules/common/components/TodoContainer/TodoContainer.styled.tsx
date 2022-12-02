import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import ReactPaginate from 'react-paginate';

import { device } from '../../consts/mediaqueries';
import { COLORS, SPACES, TRANSITIONS } from '../../../theme';

export const StyledSwiper = styled(Swiper)`
  left: ${SPACES.xxxs};
`;

export const Container = styled.div`
  margin-bottom: ${SPACES.xxl};
  ${device.desktop} {
    border: solid ${COLORS.main} ${SPACES.xs};
  }
`;

export const HeadWrapper = styled.div`
  display: flex;
  background-color: ${COLORS.head};
`;

export const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${SPACES.xl};
  ${device.tablet} {
    gap: ${SPACES.xxxs};
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  ${device.desktop} {
    flex-direction: row;
    :nth-of-type(2n + 1) {
      background-color: ${COLORS.row};
    }
  }
`;

export const HeadTitle = styled.h2`
  display: inline-block;
  padding: ${SPACES.s} ${SPACES.l};
  font-size: ${SPACES.l};
  :nth-of-type(1) {
    width: 20%;
  }
  :nth-of-type(2) {
    width: 50%;
    border-left: solid ${COLORS.main} ${SPACES.xxs};
    border-right: solid ${COLORS.main} ${SPACES.xxs};
  }
  :nth-of-type(3) {
    width: 30%;
    text-align: center;
  }
  ${device.tablet} {
  }
  ${device.desktopMid} {
    font-size: ${SPACES.xl};
  }
`;

export const Paginate = styled(ReactPaginate)`
  display: flex;
  justify-content: start;
  flex-direction: row;
  gap: ${SPACES.xs};
  list-style-type: none;
  li a {
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
  }

  li.selected a {
    background-color: ${COLORS.hover};
    color: ${COLORS.white};
    min-width: ${SPACES.xxl};
  }
  li.disabled a {
    color: ${COLORS.disabled};
    border-color: ${COLORS.disabled};
    :hover,
    :focus {
      background-color: ${COLORS.white};
      color: ${COLORS.disabled};
    }
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
