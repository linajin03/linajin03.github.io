import { TypeAnimation } from 'react-type-animation';
import React from 'react';

function TypingComponent(props) {
  return (
    <TypeAnimation
      sequence={[
        "i am an active learner.",
        1000,
        "i am an aspiring developer.",
        1000,
        "i am an avid creator.",
        1000,
        "i am a community leader.",
        1000
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TypingComponent;