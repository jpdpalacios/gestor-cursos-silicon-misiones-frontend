import React, { useState, useEffect } from "react";

function TypingEffect({ words }) {
  const [text, setText] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingTimer = setInterval(() => {
      const currentWordLength = words[currentWord].length;

      if (deleting) {
        setText((text) => {
          return text.slice(0, -1);
        });
        if (text.length === 0) {
          setDeleting(false);
          setCurrentWord((currentWord + 1) % words.length);
        }
      } else {
        setText((text) => {
          return words[currentWord].slice(0, text.length + 1);
        });
        if (text.length === currentWordLength) {
          setDeleting(true);
        }
      }
    }, 150);

    return () => {
      clearInterval(typingTimer);
    };
  }, [currentWord, deleting, text, words]);

  return <div className="typingEfectText">Silicon misones es {text}</div>;
}

export default TypingEffect;
