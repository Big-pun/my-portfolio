import React, { useRef } from 'react';
import Intro from '../components/Home/Intro';
import Dev from '../Images/Dev.svg';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import H1 from '../components/Home/H1';
import H2 from '../components/Home/H2';

function Home() {
    const section2Ref = useRef(null);

    const scrollToSection2 = () => {
        section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='container mx-auto p-4 '>
            <section className='grid grid-cols-12 min-h-screen'>
                <div className='col-span-12 md:col-span-5 md:col-start-2'>
                    <H1 />
                    <div className='relative'>
                        <div className='h-16 md:h-20'>
                            <Intro />
                        </div>
                        <H2 className='absolute top-0 left-0' />
                    </div>
                </div>

                <div className='col-span-6 col-start-4 md:col-span-3 md:col-start-9 mb-12 md:mb-0 md:mt-24'>
                    <img src={Dev} alt="Dev" />
                </div>

                <div className='col-span-12 text-center hidden md:block -mt-36'>
                    <button
                        className='text-green-500 text-5xl md:text-9xl animate-pulse items-center'
                        onClick={scrollToSection2}
                        aria-label="Scroll to section 2"
                    >
                        <MdOutlineKeyboardDoubleArrowDown />
                    </button>
                </div>
            </section>

            <section ref={section2Ref} className='grid grid-cols-12 min-h-screen pt-24'>
                <div className='col-span-12 md:col-span-6 md:col-start-4'>
                    <h2 className='text-5xl mb-8'>
                        How This <span className='text-green-500 font-bold'>Portfolio</span> Was Built
                    </h2>
                    <p className='text-xl md:text-2xl mb-8 '>
                        This portfolio was built using modern web development technologies to ensure a responsive and dynamic user experience. Here are some key aspects of its construction:
                    </p>
                    <ul className='list-disc list-inside text-xl md:text-2xl mb-8'>
                        <li><span className='font-bold text-green-500'>React:</span> The entire application is built using React.</li>
                        <li><span className='font-bold text-green-500'>Tailwind CSS:</span> Tailwind CSS is used for styling, providing a utility-first approach that allows for rapid and responsive development. </li>
                        <li><span className='font-bold text-green-500'>Vite:</span> Vite is used as the build tool, offering fast development and optimized production builds.</li>
                    </ul>
                    <p className='text-xl md:text-2xl '>
                        The combination of these technologies allows for a seamless and efficient development process, resulting in a portfolio that is both visually appealing and highly functional.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;