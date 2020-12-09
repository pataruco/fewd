import React from 'react';
import { Heading } from 'spectacle';

interface FrontPageProps {
  title: string;
  children?: React.ReactNode;
}

// TODO: Front page wrapper
const FrontPage: React.FC<FrontPageProps> = ({ title, children }) => {
  return (
    <>
      <Heading>{title}</Heading>
      {children}
      <h1>{title}</h1>
    </>
  );
};

export default FrontPage;
