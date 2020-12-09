import React from 'react';
import { Heading } from 'spectacle';
import styled from 'styled-components';
import GALogo from '../logo';

interface FrontPageProps {
  title: string;
  children?: React.ReactNode;
}

const FrontPageWrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  picture {
    max-width: 50%;
    margin: 0 auto;
  }

  [font-size='h1'] {
    text-align: center;
  }
`;

const FrontPage: React.FC<FrontPageProps> = ({ title }) => (
  <FrontPageWrapper>
    <picture>
      <GALogo />
    </picture>
    <Heading>{title}</Heading>
  </FrontPageWrapper>
);

export default FrontPage;
