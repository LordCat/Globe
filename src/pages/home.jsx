import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  position: absolute;
  left: 25%;
  top: 15%;
  width: 70%;
  height: 80%;
  flex: 1;
  color: green;
  border: 5px solid green;
  border-radius: 5px;
  z-index: 100;
`;

export function Home() {
  return (
    <HomeContainer>
      <h2>Home </h2>
      <p>This is the Home page.</p>
    
    </HomeContainer>
  );
}