import React from 'react'
import Icons from '../components/About/Icons'

function About() {
  return (
    <div className='container mx-auto p-4 min-h-screen'>
      <section id='section1' className='grid grid-cols-12 '>
        

        <div className='col-span-12 md:col-span-6 md:col-start-4 mt-12'>
          <h2 className='text-4xl mb-12'>What i'm<span className='text-green-500 font-bold'> Focusing</span> on</h2>
          <Icons />
        </div>
      </section>
    </div>
  )
}

export default About
