import React from 'react';
import { Title, StyledLink, SecondaryLink, LinkWrapper, Wrapper } from './WelcomeContainer.styled';
import { ROUTER_KEYS } from '../../consts/app-keys.const';

export const WelcomeContainer: React.FC = () => (
  <Wrapper>
    <Title>App name</Title>
    <LinkWrapper>
      <StyledLink to={ROUTER_KEYS.LOGIN}>Login</StyledLink>
      <StyledLink to={ROUTER_KEYS.REGISTER}>Register</StyledLink>
    </LinkWrapper>
    <SecondaryLink to={ROUTER_KEYS.CHANGE}>Forgot password?</SecondaryLink>
  </Wrapper>
);
