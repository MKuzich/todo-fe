import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import { device } from '../../consts/mediaqueries';
import { COLORS, SPACES } from '../../../theme';

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
