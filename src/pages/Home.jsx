import React from 'react'
import Intro from '../components/Home/Intro'
import Desk from '../Images/Desk.svg'


function Home() {
    return (
        <section className='container mx-auto p-4 grid grid-cols-12'>
            <div className='col-span-12 md:col-span-4 md:col-start-3 pt-20'>
                <Intro />
            </div>

            <div className='col-span-8 col-start-3 md:col-span-3 md:col-start-8'>
                <img src={Desk} alt="Desk" />
            </div>

            <div className='col-span-12 md:col-span-6 md:col-start-3 mt-12'>
                <h2 className='text-3xl'>Quick <span className='text-green-500 font-bold'>Introduction</span></h2>
                <p className='text-lg'>I am a web developer who loves to create websites and web applications. Currently following a front-end web devlopment program, I'll soon be looking for a intership opportunity ... but that's not our subject here</p>
            </div>
            
        </section>
    )
}

export default Home