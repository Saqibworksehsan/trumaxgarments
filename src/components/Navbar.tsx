import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              Trumax <span className="text-red-500">Garments</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'text-gray-700 hover:text-red-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918220723381?text=Hi%20Trumax,%20I%20want%20to%20order%20innerwear."
              className="inline-flex items-center px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-red-500 bg-red-50'
                      : 'text-gray-700 hover:text-red-500 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/919876543210?text=Hi%20Trumax,%20I%20want%20to%20order%20innerwear."
                className="flex items-center px-3 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-200 mx-3 mt-4"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Order Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;