import React from 'react'
import { motion } from 'framer-motion';

function H1() {
    return (
        <>
            <motion.h1
                className='text-5xl md:text-6xl mb-12 md:mb-8'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                Hello,<br /> I'm <span className='font-bold text-green-500'>Adrien Thomas</span>
            </motion.h1>
        </>
    )
}

export default H1