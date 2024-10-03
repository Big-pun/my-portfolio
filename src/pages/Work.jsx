import React, { Suspense, lazy } from 'react'

const Github = lazy(() => import('../components/Work/Github'))

function Work() {
  return (
    <div>
      <section className='container mx-auto p-4 flex flex-col justify-center items-center'>
        <h2 className='text-4xl mb-4'>When i <span className='text-green-500 font-bold'> Commit</span></h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Github />
        </Suspense>
      </section>
    </div>
  )
}

export default Work
