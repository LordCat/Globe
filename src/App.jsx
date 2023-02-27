import React from "react";
import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { SideBar } from "./pages/sidebar";


const CanvasContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <CanvasContainer>

      <BrowserRouter>

        <NavBar />
        <SideBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Canvas frames={6}>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      
      </BrowserRouter>

    </CanvasContainer>
  );
}

export default App;
