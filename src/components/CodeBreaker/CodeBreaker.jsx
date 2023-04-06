import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const CodeBreakerContainer = styled.div`
  position: relative;
`;

const RandomCharsAnimation = keyframes`
  0% {
    content: '${(props) => props.randomChars}';
  }
  100% {
    content: '${(props) => props.correctText}';
  }
`;

const CodeBreakerText = styled.div`
  position: relative;
  &::before {
    position: absolute;
    content: '${props => props.randomChars}';
    color: white;
    background-color: black;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    animation: ${RandomCharsAnimation} 3s linear forwards;
  }
  &::after {
    position: absolute;
    content: '${props => props.correctText}';
    color: black;
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
`;


const CodeBreaker = ({ text }) => {
  const [randomChars, setRandomChars] = useState('');
  const [correctText, setCorrectText] = useState('');

  useEffect(() => {
    let isMounted = true;
  
    const interval = setInterval(() => {
      if (isMounted) {
        const newChars = randomChars.split('');
        for (let i = 0; i < text.length; i++) {
          if (newChars[i] !== text[i]) {
            let charCode = Math.floor(Math.random() * 94) + 32;
            while (String.fromCharCode(charCode) === ';') {  // check if char is semicolon
              charCode = Math.floor(Math.random() * 94) + 32;  // generate new char code if it is
            }
            newChars[i] = String.fromCharCode(charCode);
          }
        }
        setRandomChars(newChars.join(''));
      }
    }, 100);
  
    setTimeout(() => {
      if (isMounted) {
        setCorrectText(text);
      }
    }, 400);
  
    setTimeout(() => {
      if (isMounted) {
        setRandomChars(text);
      }
    }, 2400);
  
    setTimeout(() => {
      if (isMounted) {
        setRandomChars('');
        setCorrectText('');
      }
    }, 3000);
  
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [text, randomChars]);
  
  return (
    <CodeBreakerContainer>
      <CodeBreakerText randomChars={randomChars} correctText={correctText}>{text}</CodeBreakerText>
    </CodeBreakerContainer>
  );
};


export default CodeBreaker;
