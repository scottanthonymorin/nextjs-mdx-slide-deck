import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <StyledText>This is a place for a title or logo.</StyledText>
    </header>
  );
};

const StyledText = styled.p`
  line-height: 1;
  margin: 0;
  opacity: 0.75;
`;

export default Header;
