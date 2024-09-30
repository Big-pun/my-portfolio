import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

const Navbar = () => {

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? "text-xl font-bold text-white px-3 py-2 underline flex items-center" : "text-xl font-bold text-green-500 px-3 py-2 flex items-center";
  };

  return (
    <nav id="navbar" className="bg-transparent backdrop-blur-md mb-24" aria-label="Main Navigation">
      <div className="container mx-auto flex justify-around items-center py-4">
        <NavLink to="/" className={getNavLinkClass} aria-label="Home" aria-current={({ isActive }) => isActive ? 'page' : undefined}><FaHome/>Home</NavLink>
        <NavLink to="/about" className={getNavLinkClass} aria-label="Home" aria-current={({ isActive }) => isActive ? 'page' : undefined}><BsPersonArmsUp />About</NavLink>
        <NavLink to="/work" className={getNavLinkClass} aria-label="About" aria-current={({ isActive }) => isActive ? 'page' : undefined}><FaSuitcase />Work</NavLink>
        <NavLink to="/contact" className={getNavLinkClass} aria-label="Contact" aria-current={({ isActive }) => isActive ? 'page' : undefined}><BiSolidContact />Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;