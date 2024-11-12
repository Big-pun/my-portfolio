import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Socials() {
    return (
        <>
            <div className='flex items-center justify-center space-x-4 bg-white rounded-lg shadow-lg'>
                <a href='https://www.linkedin.com/in/adrien-thomas-a06b61307' target='_blank' rel='noreferrer' className='text-5xl text-blue-500 hover:text-blue-300 '>
                    <IoLogoLinkedin />
                </a>

                <a href='https://github.com/Big-pun' target='_blank' rel='noreferrer' className='text-5xl text-gray-800 hover:text-gray-600'>
                    <FaGithubSquare />
                </a>

                <a href='https://www.instagram.com/adrirutti/' target='_blank' rel='noreferrer' className='text-5xl text-pink-500 hover:text-pink-300'>
                    <FaInstagramSquare />
                </a>

            </div>
        </>
    )
}

export default Socials