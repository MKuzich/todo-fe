import React from 'react';
import { StyledContainer } from './Container.styled';

export const Container: React.FC = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
