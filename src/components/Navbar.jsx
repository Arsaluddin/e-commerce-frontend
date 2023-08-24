import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-semibold">
          YourStore
        </Link>
        <div className="flex md:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`md:flex ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}
        >
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="/categories"
            className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Categories
          </Link>
          <Link
            to="/products"
            className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
          >
            Products
          </Link>
          {/* Add more navigation links as needed */}
          <Link
            to="/login"
            className="block mt-4 md:inline-block md:mt-0 text-gray-300 pl-2 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block mt-4 md:inline-block md:mt-0 text-gray-300 pl-2 hover:text-white"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
