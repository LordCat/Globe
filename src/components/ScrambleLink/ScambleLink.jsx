import React, { useEffect, useState } from "react";

const ScrambleLink = ({ text }) => {
  const [isActive, setIsActive] = useState(false);
  const [scrambledText, setScrambledText] = useState(
    generateRandomString(text)
  );

  const solveMilliseconds = 800;
  const characterSelectionMilliseconds = 40;
  const delayMilliseconds = 250;
  const characters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*#@/*!%&^"];

  const randomArrayElement = (arr) => {
    return arr[(arr.length * Math.random()) | 0];
  };

  const scrambleText = () => {
    if (!isActive) {
      let delay = 0;
      const elementCharacters = [...text];
      const lockMilliseconds =
        delayMilliseconds * elementCharacters.length + solveMilliseconds;

      setIsActive(true);

      setTimeout(() => {
        setIsActive(false);
        setScrambledText(text);
      }, lockMilliseconds);

      elementCharacters.forEach((character, index) => {
        setTimeout(
          () => {
            let intervalId = setInterval(() => {
              const randomCharacter = randomArrayElement(characters);
              setScrambledText((prevText) =>
                replaceCharacter(prevText, index, randomCharacter)
              );

              setTimeout(() => {
                clearInterval(intervalId);
                setScrambledText((prevText) =>
                  replaceCharacter(prevText, index, elementCharacters[index])
                );
              }, solveMilliseconds);
            }, characterSelectionMilliseconds);
          },
          delay === 0 ? (delay += 1) : (delay += delayMilliseconds)
        );
      });
    }
  };

  const generateRandomString = (text) => {
    let randomStr = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        randomStr += " ";
      } else {
        randomStr += randomArrayElement(characters);
      }
    }
    return randomStr;
  };

  const replaceCharacter = (str, index, chr) => {
    return `${str.substring(0, index)}${chr}${str.substring(index + 1)}`;
  };

  useEffect(() => {
    scrambleText();
  }, []); // empty dependency array ensures useEffect runs only once

  return (
    <a
      className="cipher"
      href="#"
      style={{ textDecoration: "none" }}
    >
      {scrambledText}
    </a>
  );
};

export default ScrambleLink;
