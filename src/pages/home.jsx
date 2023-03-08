import React from "react";
import styled from "styled-components";
import TypingText from "../components/TextAnimation/TextAnimation";

const HomeContainer = styled.div`
  position: absolute;
  left: 25%;
  top: 15%;
  width: 70%;
  height: 80%;
  color: green;
  border: 5px solid green;
  border-radius: 5px;
  z-index: 100;

`;

const Title = styled.h2`
  padding: 2%;
`;


const Paragraph = styled.p  `
  padding: 2%;
`;

export function Home() {
  return (
    <HomeContainer>
      <TypingText>
      <Title>
        Welcome to my Website
      </Title>
      </TypingText>
      <TypingText>
      <Paragraph>
        This is the first of by website. It's built using React, Three.js and I'm currently
        building the backend using Express.js and sqlite database and building the API.
        I'm also trying to think of more gimmicks for this because why not. They style is kind
        inspired by textfiles.com, which you should check out because it's amazing,
        but I've also been playing alot of Dues Ex and old style terminals.
        Watch this space, or don't. You can do whatever you want. Why are you here? Why am I here?
        Oh god.
      </Paragraph>
      </TypingText>
    </HomeContainer>
  );
}