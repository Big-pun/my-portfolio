import { NavLink } from "react-router-dom";

const Navbar = () => {

  const getNavLinkClass = ({ isCurrent }) => {
    return isCurrent ? "" : " bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
  };

  return (
    <nav className="bg-gray-800" aria-label="Main">
      <div className="flex space-x-4">
        <NavLink to="/" end getProps={getNavLinkClass} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
        <NavLink to="/about" getProps={getNavLinkClass} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">About</NavLink>
        <NavLink to="/work" getProps={getNavLinkClass} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Work</NavLink>
        <NavLink to="/contact" getProps={getNavLinkClass} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;