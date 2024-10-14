import React from 'react'
import { motion } from 'framer-motion';

function H1Contact() {
    return (
        <>
            <motion.h1
                className='text-5xl md:text-6xl mb-12 md:mb-8'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >How To <span className='font-bold text-green-500'>Reach</span> me</motion.h1>
            <motion.p
                className='text-2xl md:text-3xl max-w-prose'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 2 }}
            >
                If you want to contact me please, you can send me a email <a href='mailto:adrienthomas419@gmail.com' className='text-green-500 font-bold underline'>here
                </a><br/>
                Use the form below or contact me on my social media.
            </motion.p>
        </>
    )
}

export default H1Contact