import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  color: green;
`;

export function About() {
  return (
    <AboutContainer>
    <div>
      <h2>About </h2>
      <p>This is the About page.</p>
    </div>
    </AboutContainer>
  );
}