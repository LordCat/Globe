import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SidebarContainer = styled.div`
    position: absolute;
    width: 21%;
    height: 80%;
    top: 15%;
    left: 1.5%;
    display: flex;
    justify-content: space-between;
    color: green;
    border: 5px solid green;
    border-radius: 5px;
    z-index: 100;
`;

const ListStyle = styled.div`
    list-style: none;
    display: flex;
    flex-direction: column;
    z-index: 100;
`;

const LinkStyle = styled.a`
    margin: 5px 0;
`;

export function SideBar() {
  return (
    <SidebarContainer>
        

      <ListStyle>
          <Link href="#"></Link>
          <Link href="#">LinkedIn</Link>
          <Link href="#">Resume</Link>
      </ListStyle>
        
    </SidebarContainer>
  )
}

