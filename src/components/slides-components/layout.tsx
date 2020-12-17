import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Row: React.FC<LayoutProps> = ({ children }) => (
  <StyledRow>{children}</StyledRow>
);

const StyledColumn = styled.div`
  flex: 1 auto;
`;

export const Column: React.FC<LayoutProps> = ({ children }) => (
  <StyledColumn>{children}</StyledColumn>
);
