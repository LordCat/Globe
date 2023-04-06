import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const MatrixRain = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  color: #0F0; /* Green */
  font-size: 2rem;
  line-height: 2rem;
  font-family: monospace;
  white-space: pre-wrap;
  display: inline-block;
`;

const Character = styled.span`
  display: inline-block;
  animation: ${MatrixRain} 1s linear infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const TypingText = ({ children }) => {
  const [text, setText] = useState('');
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const originalText = children.toString();
    const characters = originalText.split('');

    let i = 0;
    let intervalId = setInterval(() => {
      const randomCharacters = characters
        .map((char) => {
          if (Math.random() < 0.5) {
            return String.fromCharCode(Math.floor(Math.random() * 94) + 32);
          } else {
            return char;
          }
        })
        .join('');

      setText(randomCharacters);
      i++;

      if (i >= 10) {
        clearInterval(intervalId);
        setText(originalText);
        setShowText(true);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [children]);

  return (
    <Wrapper>
      {showText &&
        text.split('').map((char, index) => (
          <Character key={index} delay={index * 0.05}>
            {char === ' ' ? '\u00A0' : char}
          </Character>
        ))}
    </Wrapper>
  );
};

export default TypingText;
