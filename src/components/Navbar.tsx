'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#' },
    { name: 'Menü', href: '#menu' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'İletişim', href: '#footer' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOrderClick = () => {
    const orderSection = document.getElementById('order-section');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="relative z-10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo ve Restoran İsmi */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🍔</span>
            </div>
            <span className="text-white font-bold text-xl">Bella Vista</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors font-medium"
                tabIndex={0}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleOrderClick}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors cursor-pointer"
              tabIndex={0}
              aria-label="Sipariş ver"
            >
              Sipariş Ver
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-400 transition-colors cursor-pointer"
              tabIndex={0}
              aria-label="Menüyü aç/kapat"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-sm rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-yellow-400 transition-colors font-medium"
                  tabIndex={0}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={handleOrderClick}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors w-full cursor-pointer"
                tabIndex={0}
                aria-label="Sipariş ver"
              >
                Sipariş Ver
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;