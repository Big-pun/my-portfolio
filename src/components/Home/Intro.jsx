import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const Intro = () => {
  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: [ "Welcome on my portfolio <br/> I'm a student front-end developer"],
      autoStart: true,
      loop: true,
      speed: 50,
    });
  }, []);

  return (
    <div>
        <h1 className='text-2xl text-white'>Hello, I'm <span className='font-bold text-green-500'>Adrien Thomas</span></h1>
        <div id="typewriter" className='text-white text-lg'></div>
    </div>
  );
};

export default Intro;
