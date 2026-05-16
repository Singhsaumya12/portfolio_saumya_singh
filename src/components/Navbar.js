import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block py-2 hover:text-blue-400 ${
      isActive ? "text-blue-400" : "text-gray-300"
    }`;

  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-400">
          Saumya
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">

          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 px-6 pb-4">

          <NavLink onClick={()=>setOpen(false)} to="/" className={linkClass}>Home</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/about" className={linkClass}>About</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
