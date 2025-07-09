import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = ['Home', 'Live', 'Product', 'Pricing'];

  return (
    <nav className="bg-gray-900 text-white w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="text-xl font-bold">MySite</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-sm hover:text-blue-400 transition"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-gray-900">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block text-sm hover:text-blue-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
