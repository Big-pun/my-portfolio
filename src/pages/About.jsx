import React, { Suspense, lazy } from 'react';
import Avatar from '../Images/Avatar.png';

const Icons = lazy(() => import('../components/About/Icons'));
const H1About = lazy(() => import('../components/About/H1About'));

function About() {
  return (
    <div className='container mx-auto p-4 '>
      <section id='section1' className='grid grid-cols-12 md:min-h-screen'>
        <div className='col-span-12 md:col-span-5 md:col-start-2'>
          <Suspense fallback={<div>Loading...</div>}>
            <H1About />
          </Suspense>
        </div>

        <div className='col-span-6 col-start-4 md:row-start-1 row-start-3 md:col-span-3 md:col-start-9 my-8 md:mt-40'>
          <img src={Avatar} alt="Avatar" className='rounded-2xl' />
        </div>

      </section>

      <section id='section2' className='grid grid-cols-12 min-h-screen pt-8 md:-my-16'>
        <div className='col-span-12 md:col-span-10 md:col-start-2'>
          <h2 className='text-4xl mb-12 md:mb-8'>
            What I'm <span className='text-green-500 font-bold'>Focusing</span> on
          </h2>
          <p className='text-xl md:text-2xl max-w-prose mb-12 md:mb-8'>
            Currently, my primary focus is on <span className='text-green-500 font-bold'>front-end development</span>, specializing in React and Vite. I thrive to create dynamic, responsive, and user-centric interfaces that provide seamless experiences across devices. My approach emphasizes building 
            <span className='text-green-500 font-bold'> clean</span>, modular
            <span className='text-green-500 font-bold'> code</span> that ensures both high
            <span className='text-green-500 font-bold'> readability</span> and
            <span className='text-green-500 font-bold'> maintainability</span>.
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