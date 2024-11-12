import { Suspense, lazy } from 'react'
import H1Work from '../components/Work/H1Work'
import Projects from '../components/Work/Projects'
import Repos from '../components/Work/Languages'

const Github = lazy(() => import('../components/Work/Github'))

function Work() {
  return (
    <div>
      <section className='container mx-auto p-4'>
        <div className='grid grid-cols-12 md:min-h-screen'>
          <div className='col-span-12 md:col-span-10 md:col-start-2 p-4 max-w-prose'>
            <H1Work />
          </div>

          <div className='col-span-12 md:col-span-10 md:col-start-2 p-4'>
            <Projects />
          </div>

          <div className='col-span-12 md:col-span-10 md:col-start-2 p-4'>
            <h2 className='text-4xl mb-4'><span className='text-green-500 font-bold'>Languages</span> I write code with</h2>
            <div className='w-full flex justify-center'>
            <Suspense fallback={<div>Loading...</div>}>
              <Repos/>
            </Suspense>
            </div>
          </div>

          <div className='col-span-12 md:col-span-10 md:col-start-2 p-4'>
              <h2 className='text-4xl mb-4'>Days of <span className='text-green-500 font-bold'>Code</span></h2>
              <div className='flex justify-center'>
              <Suspense fallback={<div>Loading...</div>}>
                <Github />
              </Suspense>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Work
