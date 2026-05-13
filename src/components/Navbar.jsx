import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 py-4 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">

        <h1 className="text-3xl font-black text-purple-main">DigiTools</h1>

        <div className="hidden md:flex gap-8 font-semibold text-gray-600">
          <a href="#" className="hover:text-purple-600">Products</a>
          <a href="#" className="hover:text-purple-600">Features</a>
          <a href="#" className="hover:text-purple-600">Pricing</a>
          <a href="#" className="hover:text-purple-600">Testimonials</a>
          <a href="#" className="hover:text-purple-600">FAQ</a>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-2xl cursor-pointer hover:text-purple-600 transition-colors flex items-center gap-1">
            <CiShoppingCart />
            <span className="text-lg font-bold">({cartCount})</span>
          </div>
          
          <div className="cursor-pointer font-bold">
            <span className="text-yellow-500 text-xl">Login</span>
          </div>

          <button className="btn bg-purple-main text-white hover:bg-purple-800 border-none rounded-xl">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;