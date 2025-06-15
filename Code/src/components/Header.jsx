import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Books', path: '/#groups' },
    { name: 'Blog', path: '/#blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-secondary transition-colors"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            MySmartKit
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors hover:text-secondary ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : isScrolled 
                      ? 'text-gray-dark' 
                      : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              } ${isScrolled ? 'bg-gray-dark' : 'bg-white'}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              } ${isScrolled ? 'bg-gray-dark' : 'bg-white'}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              } ${isScrolled ? 'bg-gray-dark' : 'bg-white'}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-3 px-4 text-gray-dark hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;