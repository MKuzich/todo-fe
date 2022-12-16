import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import { device } from '../../consts/mediaqueries';
import { COLORS, SPACES } from '../../../theme';

export const StyledSwiper = styled(Swiper)`
  left: ${SPACES.xxxs};
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
`;
