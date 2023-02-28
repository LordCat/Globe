import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  position: absolute;
  width: 70%;
  height: 80%;
  color: green;
  border: 5px solid green;
  border-radius: 5px;
  z-index: 100;
  left: 25%;
  top: 15%;

`;

const Title = styled.h2`
  padding: 2%;
`;


const Paragraph = styled.p  `
  padding: 2%;
`;

export function About() {
  return (
    <AboutContainer>
      <Title>
        About 
      </Title>
      <Paragraph>
        Hello my name is kristian, I am a software developer based in the UK.
        I made this website because I wanted to have my own point of presence on the internet.
        That allows me to share my projects and ideas with the world. And mostly build my own 
        website with any gimmick I want to try out. I'm currently working on a few projects such as
        CMS and Blog Section.
        I'm interested in working with others so drop me a line, if I've
        linked you to this  or you've just stumbled here, well eh. Hello I guess.
      </Paragraph>
    </AboutContainer>
  );
}