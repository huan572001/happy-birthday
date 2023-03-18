import React, { useRef } from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterExample = ({ data, setIsTypingComplete }) => {
  const typewriterRef = useRef(null);
  return (
    <Typewriter
      ref={typewriterRef}
      onInit={(typewriter) => {
        typewriter.callFunction(() => {
          setIsTypingComplete(true);
        });
      }}
      options={{
        strings: data,
        autoStart: true,
        loop: false,
        delay: 50,
      }}
    />
  );
};
export default TypewriterExample;
