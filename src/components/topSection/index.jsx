import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "../NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home";
import { About } from "../../pages/about";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1756dd32;
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

const Logo = styled.h1`
  align-content: right;
  margin: 0;
  height: 50px;
  color: #fff;
  font-weight: 800;
  font-size: 30px;
`;

const Paragraph = styled.p`
  flex: 1;
  margin: 0;
  margin-top: 0;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: top;
`;



export function TopSection() {
  return (
    <TopSectionContainer>
    <BrowserRouter>
    <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
      <Logo>Welcome to my Website</Logo>
      <Paragraph>
        This is a website I made to learn React and Three.js and it is taking for ever to correctl render this planet
        And the nav bar, and pretty much everything else even tho it all work indenpendtly. I' not sure
        what the issue is. I think it has something to do with the way I am using the react router dom.
        I hope you enjoy
        it!

      </Paragraph>
    </TopSectionContainer>
  );
}
