import { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-200 fixed w-full top-0 left-0 z-50 shadow-md border-b border-yellow-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <a href="/" className="flex items-center space-x-3">
            <img
              src={null}
              alt="Shinchan Logo"
              className="h-10"
            />
            <span className="text-2xl font-extrabold text-pink-600 tracking-wide">ShinDraw</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-blue-800 font-medium hover:text-pink-600 transition">Home</a>
            <a href="#" className="text-blue-800 font-medium hover:text-pink-600 transition">Episodes</a>
            <a href="#" className="text-blue-800 font-medium hover:text-pink-600 transition">Draw</a>

            {/* Auth Buttons */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-pink-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-pink-600 transition-all">
                  Get Started
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-pink-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 space-y-2">
            <a href="#" className="block text-blue-800 font-medium hover:text-pink-600">Home</a>
            <a href="#" className="block text-blue-800 font-medium hover:text-pink-600">Episodes</a>
            <a href="#" className="block text-blue-800 font-medium hover:text-pink-600">Draw</a>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="w-full bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition">
                  Get Started
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        )}
      </div>
    </nav>
  );
}
