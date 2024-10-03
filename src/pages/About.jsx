import React, { Suspense, lazy } from 'react';
import Avatar from '../Images/avatar.png';

const Icons = lazy(() => import('../components/About/Icons'));
const H1About = lazy(() => import('../components/About/H1About'));

function About() {
  return (
    <div className='container mx-auto p-4 min-h-screen'>
      <section id='section1' className='grid grid-cols-12'>
        <div className='col-span-12 md:col-span-5 md:col-start-2'>
          <Suspense fallback={<div>Loading...</div>}>
            <H1About />
          </Suspense>
        </div>

        <div className='col-span-6 col-start-4 md:row-start-2 row-start-3 md:col-span-3 md:col-start-9 mt-8 md:mt-0'>
          <img src={Avatar} alt="Avatar" className='rounded-2xl' />
        </div>

        <div className='col-span-12 md:col-span-6 md:col-start-2 md:row-start-2'>
          <p className='text-2xl md:text-3xl max-w-prose'>
            Following over a decade of culinary experience, I've chosen to pivot into a new career. During the 2020 pandemic, I took my first steps into coding with <a href='https://www.freecodecamp.org/' className='underline hover:text-green-500'>freeCodeCamp</a>, exploring foundational integrations.<br />
            In 2023, I expanded my skills through a specialized front-end development program at a reputable institution, further solidifying my passion for innovative web solutions.
          </p>
        </div>
      </section>

      <section id='section2' className='grid grid-cols-12'>
        <div className='col-span-12 md:col-span-10 md:col-start-2 mt-12'>
          <h2 className='text-4xl mb-12 md:mb-8'>
            What I'm <span className='text-green-500 font-bold'>Focusing</span> on
          </h2>
          <p className='text-xl md:text-2xl max-w-prose mb-12 md:mb-8'>
            Currently, my primary focus is on <span className='text-green-500'>front-end development</span>, specializing in React and Vite. I thrive to create dynamic, responsive, and user-centric interfaces that provide seamless experiences across devices. My approach emphasizes building
            <span className='text-green-500'>clean</span>, modular
            <span className='text-green-500'>code</span> that ensures both high
            <span className='text-green-500'>readability</span> and
            <span className='text-green-500'>maintainability</span>.
            <br />
            Additionally, I'm expanding my expertise into full-stack development, with a focus on Node.js and Next.js for server-side rendering and efficient back-end logic, as well as database management with MySQL and PHP to deliver comprehensive, scalable solutions.
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <Icons />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

export default About;