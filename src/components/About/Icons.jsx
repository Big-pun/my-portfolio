import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IconContext } from 'react-icons';
import { SiNextdotjs } from "react-icons/si";

function Icons() {
    return (
        <div className='flex flex-row justify-around'>
            <IconContext.Provider value={{ color: 'orange', size: 50 }}>
                <div className="border-2 border-gray-300 p-2 rounded-lg">
                    <FaHtml5 />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'blue', size: 50 }}>
                <div className="border-2 border-gray-300 p-2 rounded-lg">
                    <FaCss3Alt />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#0481a2', size: 50 }}>
                <div className="border-2 border-gray-300 p-2 rounded-lg">
                    <FaReact />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'yellow', size: 50 }}>
                <div className="border-2 border-gray-300 p-2 rounded-lg">
                    <IoLogoJavascript />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#42bdf0', size: 50 }}>
                <div className="border-2 border-gray-300 p-2 rounded-lg">
                    <RiTailwindCssFill />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'white', size: 50 }}>
                <div className="border-2 border-gray-300 p-2 rounded-lg">
                    <SiNextdotjs />
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default Icons;