import React, {Children, cloneElement } from 'react'
import styled, {keyframes} from 'styled-components'

const TextAnimation= keyframes`
    from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

const TextAnimationContainer = styled.div`
    position: relative;
  animation: ${TextAnimation} 5s steps(${(props) => props.length}, end) 1;
`

const TypingText = ({ children }) => {
    const text = Children.toArray(children).reduce((acc, child) => acc + child.props.children, "");
  return <TextAnimationContainer length= { text.length }> { children }  </TextAnimationContainer>;
}

export default TypingText;