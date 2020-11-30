import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: black;
`;

const Footer: React.FC = () => (
  <StyledFooter>
    <p>
      Made with ❤️ by <a href="https://github.com/pataruco">@pataruco</a>
    </p>
  </StyledFooter>
);

export default Footer;
