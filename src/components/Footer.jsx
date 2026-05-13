import React from 'react';
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#06091A] text-white pt-24 pb-10">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-20 space-y-6 bg-purple-main p-16 rounded-[40px] shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black">Ready to Transform Your Workflow?</h2>
          <p className="text-purple-100 text-lg opacity-80">Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
          <div className="flex justify-center gap-4 pt-4">
             <button className="btn bg-white text-purple-main rounded-full px-10 border-none font-bold">Explore Products</button>
             <button className="btn btn-outline border-white text-white rounded-full px-10 hover:bg-white hover:text-purple-main font-bold">View Pricing</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-1">
             <h2 className="text-3xl font-black mb-6">DigiTools</h2>
             <p className="text-gray-400 leading-relaxed">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Social Links</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-purple-400 transition-colors"><CiInstagram /></a>
              <a href="#" className="hover:text-purple-400 transition-colors"><CiFacebook /></a>
              <a href="#" className="hover:text-purple-400 transition-colors"><FaXTwitter /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-gray-500 text-xs gap-4">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;