import {motion} from 'framer-motion';
import Dev from '../../Images/Dev.svg';

function Logo() {
    return (
        <motion.logo
            className='text-5xl md:text-6xl mb-12 md:mb-8'
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 2}}
        >
        <img src={Dev} alt="Dev" /></motion.logo>
    )
}

export default Logo;