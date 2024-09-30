import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsPersonArmsUp } from "react-icons/bs";
import { FaSuitcase, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? "text-xl font-bold text-green-500 px-3 py-2 underline flex items-center" : "text-xl font-bold text-white  px-3 py-2 flex items-center hover:text-green-500";
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
              {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-md">
          <div className="container mx-auto flex flex-col items-center p-4">
            <NavLink to="/" className={getNavLinkClass} aria-label="Home"><FaHome /> Home</NavLink>
            <NavLink to="/about" className={getNavLinkClass} aria-label="About" aria-current={({ isActive }) => isActive ? 'page' : undefined}><BsPersonArmsUp /> About</NavLink>
            <NavLink to="/work" className={getNavLinkClass} aria-label="Work" aria-current={({ isActive }) => isActive ? 'page' : undefined}><FaSuitcase /> Work</NavLink>
            <NavLink to="/contact" className={getNavLinkClass} aria-label="Contact" aria-current={({ isActive }) => isActive ? 'page' : undefined}><BiSolidContact /> Contact</NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;