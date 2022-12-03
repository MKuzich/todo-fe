import React from 'react';
import { StyledContainer } from './Container.styled';

export interface IProps {
  children: React.ReactNode;
}

export const Container: React.FC<IProps> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
