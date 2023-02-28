import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  position: absolute;
  width: 70%;
  height: 80%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  color: green;
  border: 5px solid green;
  border-radius: 5px;
  z-index: 100;
  left: 25%;
  top: 15%;
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