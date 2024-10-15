import React, { Suspense, lazy } from 'react'
import H1Work from '../components/Work/H1Work'
import Projects from '../components/Work/Projects'

const Github = lazy(() => import('../components/Work/Github'))

function Work() {
  return (
    <div>
      <section className='container mx-auto p-4 flex flex-col justify-center items-center'>
        <div className='grid grid-cols-12 md:min-h-screen'>
          <div className='col-span-12 md:col-span-10 md:col-start-2 p-4 max-w-prose'>
            <H1Work />
          </div>

          <div className='col-span-12 md:col-span-10 md:col-start-2 p-4'>
            <Projects />
          </div>

          <div className='col-span-12 md:col-span-10 md:col-start-2 p-4 mx-auto'>
            <h2 className='text-4xl mb-4'>Days of <span className='text-green-500 font-bold'>Code</span></h2>
            <Suspense fallback={<div>Loading...</div>}>
              <Github />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work
