import React, { useState } from "react";

const TextRandomize = ({ text }) => {
  const [intervalId, setIntervalId] = useState(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleMouseOver = (event) => {
    let iteration = 0;
    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      const newText = text
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      event.target.innerText = newText;

      if (iteration >= text.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 30);

    setIntervalId(newIntervalId);
  };

  return (
    <h1 onMouseOver={handleMouseOver} data-value={text} className="text-white">
      {text}
    </h1>
  );
};

export default TextRandomize;
