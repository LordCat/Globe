import React from 'react'
import styled from 'styled-components'

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

export function SideBar() {
  return (
    <SidebarContainer>
    sidebar
    </SidebarContainer>
  )
}

