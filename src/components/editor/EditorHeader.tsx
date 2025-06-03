import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Briefcase as BriefcaseBusiness } from 'lucide-react';

const EditorHeader: React.FC = () => {
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

  const activeClass = "text-secondary-600 font-medium";
  const nonActiveClass = "text-gray-700 hover:text-secondary-600 transition-colors";

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/editor" className="flex items-center">
            <BriefcaseBusiness className="mr-2 text-secondary-600" size={24} />
            <span className="text-xl font-bold text-gray-800">
              Editor <span className="text-secondary-600">Dashboard</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/editor" end className={({ isActive }) => isActive ? activeClass : nonActiveClass}>
              Job Listings
            </NavLink>
            <NavLink to="/editor/upload-cv" className={({ isActive }) => isActive ? activeClass : nonActiveClass}>
              Upload CV
            </NavLink>
            <NavLink to="/editor/profile" className={({ isActive }) => isActive ? activeClass : nonActiveClass}>
              My Profile
            </NavLink>
          </nav>

          {/* CTA Button */}
          <Link to="/" className="hidden md:block btn btn-outline">
            Switch to Client View
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
                to="/editor" 
                end
                className={({ isActive }) => isActive ? activeClass : nonActiveClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Job Listings
              </NavLink>
              <NavLink 
                to="/editor/upload-cv" 
                className={({ isActive }) => isActive ? activeClass : nonActiveClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Upload CV
              </NavLink>
              <NavLink 
                to="/editor/profile" 
                className={({ isActive }) => isActive ? activeClass : nonActiveClass}
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </NavLink>
              <Link 
                to="/" 
                className="btn btn-outline inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Switch to Client View
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default EditorHeader;