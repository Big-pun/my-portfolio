import React from 'react'
import H1Contact from '../components/Contact/H1Contact'
import Form from '../components/Contact/Form'


function Contact() {
  return (
    <div className='container mx-auto p-4'>
      <section id='section1' className='grid grid-cols-12 md:min-h-screen'>
        <div className='col-span-12 md:col-span-6 md:col-start-2 p-4'>
          <H1Contact />
        </div>

        <div className='col-span-12 md:col-span-10 md:col-start-2 p-4'>
          <Form />
        </div>
      </section>
    </div>
  )
}

export default Contact
