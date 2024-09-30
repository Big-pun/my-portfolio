import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval); // Cleanup
  }, [text, speed]);

  return <span>{displayText}</span>;
};

const Intro = () => {
  return (
    <div>
      <TypingText text="Hello, I am Adrien Thomas" speed={100} />
    </div>
  );
};

export default Intro;
