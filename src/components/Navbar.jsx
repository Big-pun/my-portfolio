import { NavLink } from "react-router-dom";

const Navbar = () => {

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? "text-xl font-bold text-green-900 px-3 py-2 underline" : "text-xl font-bold text-green-900 px-3 py-2";
  };

  return (
    <nav className="bg-transparent backdrop-blur-md mb-36" aria-label="Main Navigation">
      <div className="container mx-auto flex justify-around items-center py-4">
        <NavLink to="/" className={getNavLinkClass} aria-label="Home" aria-current={({ isActive }) => isActive ? 'page' : undefined}>Home</NavLink>
        <NavLink to="/about" className={getNavLinkClass} aria-label="Home" aria-current={({ isActive }) => isActive ? 'page' : undefined}>About</NavLink>
        <NavLink to="/work" className={getNavLinkClass} aria-label="About" aria-current={({ isActive }) => isActive ? 'page' : undefined}>Work</NavLink>
        <NavLink to="/contact" className={getNavLinkClass} aria-label="Contact" aria-current={({ isActive }) => isActive ? 'page' : undefined}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;