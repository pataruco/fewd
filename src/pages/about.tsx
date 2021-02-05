import React from 'react';
import styled from 'styled-components';
import Title from '../components/title';
import Header from '../components/header';
import Footer from '../components/footer';
import Page from '../components/page';

const StyledMain = styled.main`
  padding: 1.25rem;
`;

const About: React.FC = () => (
  <Page>
    <Title title="About" />
    <Header />
    <StyledMain>
      <h1>About</h1>
      <p>I love to teach!</p>

      <p>
        I love passing on the knowledge and seeing people grow. I've helped
        around 350+ people go from being novices to solid coders in a series of
        10 week courses.
      </p>

      <p>
        Also, I had the fortune to learnt from amazing front-end teachers at
        General Assembly such as{' '}
        <a
          href="https://generalassemb.ly/instructors/guy-routledge/1917"
          target="_blank"
          rel="noreferrer"
        >
          Guy
        </a>{' '}
        ,{' '}
        <a
          href="https://generalassemb.ly/instructors/matt-studdert/4526"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matt
        </a>{' '}
        and{' '}
        <a
          href="https://generalassemb.ly/instructors/james-sherry/7533"
          target="_blank"
          rel="noopener noreferrer"
        >
          James
        </a>
        . They inspired to share knowledge with kindness and compassion. This is
        my attempt to do so.
      </p>

      <p>
        The content on the slides is my adaption from official FEWD 3.0
        curriculum and the experiences I have had as teacher assistant and lead
        instructor in the last 6 years of teaching.
      </p>

      <p>
        The code for this website is available on{' '}
        <a
          href="https://github.com/pataruco/fewd"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </StyledMain>
    <Footer />
  </Page>
);

export default About;
