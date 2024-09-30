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
        <h1 className='text-6xl mb-12'>Hello,<br/> I'm <span className='font-bold text-green-500'>Adrien Thomas</span></h1>
        <div id="typewriter" className=' text-3xl mb-8'></div>
    </div>
  );
};

export default Intro;
