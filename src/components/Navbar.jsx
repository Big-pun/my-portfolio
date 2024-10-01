import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsPersonArmsUp } from "react-icons/bs";
import { FaSuitcase, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? "text-xl text-green-500 px-3 py-2 underline flex items-center" : "text-xl  text-white px-3 py-2 flex items-center hover:text-green-500";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav id="navbar" className="bg-transparent backdrop-blur-md md:mb-24" aria-label="Main Navigation">
        <div className="container mx-auto flex justify-end md:justify-between items-center p-4">
          <div className="hidden md:flex md:items-center md:justify-between md:w-full md:ml-4">
            <NavLink to="/" className={getNavLinkClass} aria-label="Home" aria-current={({ isActive }) => isActive ? 'page' : undefined}><FaHome /> Home</NavLink>
            <NavLink to="/about" className={getNavLinkClass} aria-label="About" aria-current={({ isActive }) => isActive ? 'page' : undefined}><BsPersonArmsUp /> About</NavLink>
            <NavLink to="/work" className={getNavLinkClass} aria-label="Work" aria-current={({ isActive }) => isActive ? 'page' : undefined}><FaSuitcase /> Work</NavLink>
            <NavLink to="/contact" className={getNavLinkClass} aria-label="Contact" aria-current={({ isActive }) => isActive ? 'page' : undefined}><BiSolidContact /> Contact</NavLink>
          </div>
          <button className="md:hidden text-3xl items-end" onClick={toggleMenu} aria-label="Toggle Menu">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaBars />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden bg-transparent backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto flex flex-col items-center p-4">
              <NavLink to="/" className={getNavLinkClass} aria-label="Home"><FaHome /> Home</NavLink>
              <NavLink to="/about" className={getNavLinkClass} aria-label="About" aria-current={({ isActive }) => isActive ? 'page' : undefined}><BsPersonArmsUp /> About</NavLink>
              <NavLink to="/work" className={getNavLinkClass} aria-label="Work" aria-current={({ isActive }) => isActive ? 'page' : undefined}><FaSuitcase /> Work</NavLink>
              <NavLink to="/contact" className={getNavLinkClass} aria-label="Contact" aria-current={({ isActive }) => isActive ? 'page' : undefined}><BiSolidContact /> Contact</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;