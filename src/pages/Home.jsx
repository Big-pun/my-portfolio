import React from 'react'
import Intro from '../components/Home/Intro'
import Dev from '../Images/Dev.svg'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import H1 from '../components/Home/H1';



function Home() {
    return (
        <>
            <div className='container mx-auto p-4 min-h-screen'>
                <section id='section1' className='grid grid-cols-12 '>
                    <div className='col-span-12 md:col-span-5 md:col-start-2 '>
                        <H1 />
                        <Intro />
                    </div>

                    <div className='col-span-6 col-start-4 md:col-span-4 md:col-start-8 md:mt-24 '>
                        <img src={Dev} alt="Dev" />
                    </div>
                    <div className='col-span-12 text-center'>
                        <button className='text-green-500 text-5xl md:text-9xl animate-pulse items-center' onClick={() => document.getElementById('section2').scrollIntoView({ behavior: 'smooth' })}>
                            <MdOutlineKeyboardDoubleArrowDown />
                        </button>
                    </div>
                </section>

                <section id='section2' className='grid grid-cols-12 '>
                    <div className='col-span-12 md:col-span-8 md:col-start-3 mt-12'>
                        <h2 className='text-5xl'>Quick <span className='text-green-500 font-bold'>Introduction</span></h2>
                        <p className='text-xl md:text-2xl'>I am a web developer who loves to create websites and web applications. Currently following a front-end web development program, I'll soon be looking for a intership opportunity ... but that's not our subject here</p>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Home