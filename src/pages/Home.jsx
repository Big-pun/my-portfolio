import React from 'react'
import Intro from '../components/Home/Intro'
import Dev from '../Images/Dev.svg'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


function Home() {
    return (
        <>
            <div className='container mx-auto p-4'>
                <section id='section1' className='grid grid-cols-12 min-h-screen'>
                    <div className='col-span-12 md:col-span-5 md:col-start-2 pt-20'>
                        <h1 className='text-3xl md:text-6xl mb-12'>Hello,<br /> I'm <span className='font-bold text-green-500'>Adrien Thomas</span></h1>
                        <Intro />
                    </div>

                    <div className='col-span-8 col-start-3 md:col-span-3 md:col-start-8 md:mt-24'>
                        <img src={Dev} alt="Dev" />
                    </div>
                    <div className='col-span-12 text-center'>
                        <button className='text-green-500 text-5xl animate-pulse items-center' onClick={() => document.getElementById('section2').scrollIntoView({ behavior: 'smooth' })}>
                            <MdOutlineKeyboardDoubleArrowDown />
                        </button>
                    </div>
                </section>

                <section id='section2' className='grid grid-cols-12'>
                    <div className='col-span-12 md:col-span-6 md:col-start-4 mt-12'>
                        <h2 className='text-4xl'>Quick <span className='text-green-500 font-bold'>Introduction</span></h2>
                        <p className='text-lg'>I am a web developer who loves to create websites and web applications. Currently following a front-end web development program, I'll soon be looking for a intership opportunity ... but that's not our subject here</p>
                    </div>

                    <div className='col-span-12 md:col-span-6 md:col-start-4 mt-12'>
                        <h2 className='text-4xl'>What i'm<span className='text-green-500 font-bold'> Learning</span></h2>
                        <ul className='list-disc list-inside grid grid-cols-3'>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Git</li>
                            <li>GitHub</li>
                        </ul>
                        <span className='text-sm text-center'>And many more...</span>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Home