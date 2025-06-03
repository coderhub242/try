import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const ClientHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeClass = "text-accent-500 font-medium";
  const nonActiveClass = "text-gray-700 hover:text-accent-500 transition-colors";

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/client" className="flex items-center">
            <span className="text-2xl font-bold text-primary-700">
              Visionary<span className="text-accent-500">Studios</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/client" end className={({ isActive }) => isActive ? activeClass : nonActiveClass}>
              About
            </NavLink>
            <NavLink to="/client/services" className={({ isActive }) => isActive ? activeClass : nonActiveClass}>
              Services
            </NavLink>
            <NavLink to="/client/portfolio" className={({ isActive }) => isActive ? activeClass : nonActiveClass}>
              Portfolio
            </NavLink>
            <NavLink to="/client/contact" className={({ isActive }) => isActive ? activeClass : nonActiveClass}>
              Contact
            </NavLink>
          </nav>

          {/* CTA Button */}
          <Link to="/client/quote" className="hidden md:block btn btn-accent">
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <NavLink 
                to="/client" 
                end
                className={({ isActive }) => isActive ? activeClass : nonActiveClass}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/client/services" 
                className={({ isActive }) => isActive ? activeClass : nonActiveClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/client/portfolio" 
                className={({ isActive }) => isActive ? activeClass : nonActiveClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </NavLink>
              <NavLink 
                to="/client/contact" 
                className={({ isActive }) => isActive ? activeClass : nonActiveClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <Link 
                to="/client/quote" 
                className="btn btn-accent inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default ClientHeader;