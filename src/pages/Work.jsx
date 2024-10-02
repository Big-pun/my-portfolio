import React from 'react'
import Github from '../components/Work/Github'

function Work() {
  return (
    <div>
      <section className='container mx-auto p-4 flex flex-col justify-center items-center'>
        <h2 className='text-4xl mb-4'>When i <span className='text-green-500 font-bold'> Commit</span></h2>
        <Github/>
      </section>
    </div>
  )
}

export default Work
