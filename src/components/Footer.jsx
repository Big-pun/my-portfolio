import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div>
                <footer className='bg-slate-900'>
                    <div className='container mx-auto flex flex-col space-y-2 p-2 md:flex-row justify-around items-center text-gray-300'>
                        <div>Designed and Developed by Adrien Thomas</div>
                        <div>Copyright © 2024 AT</div>
                        <div className='flex flex-row space-x-4 text-3xl'>
                            <a href='https://github.com/Big-pun' target='_blank' rel='noreferrer'><FaSquareGithub /></a>
                            <a href='www.linkedin.com/in/adrien-thomas-a06b61307' target='_blank' rel='noreferrer'><FaLinkedin /></a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer