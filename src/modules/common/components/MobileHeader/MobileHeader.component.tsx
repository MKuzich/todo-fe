import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { CntrlWrapper, Button } from './MobileHeader.styled';
import { ROUTER_KEYS } from '../../consts/app-keys.const';

export const MobileHeader = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 424px)' });

  return (
    <CntrlWrapper>
      {isMobile && <Button to="/">Todo List</Button>}
      <Button to={ROUTER_KEYS.CHANGE}>My Profile</Button>
    </CntrlWrapper>
  );
};
