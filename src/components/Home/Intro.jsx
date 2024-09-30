import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const Intro = () => {
  useEffect(() => {
    new Typewriter('#typewriter', {
      pauseFor: 2500,
      strings: [ "Welcome on my portfolio <br/> I'm a student front-end developer"],
      autoStart: true,
      loop: true,
      speed: 80,
      
    });
  }, []);

  return (
    <div>
        <div id="typewriter" className='text-xl md:text-3xl mb-8'></div>
    </div>
  );
};

export default Intro;
