import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto px-4 pt-8">
      <div className="flex flex-col lg:flex-row items-center gap-10 p-10 md:p-20 bg-white rounded-[40px] border border-gray-100 shadow-sm mb-10">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-main px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
             <span className="w-2 h-2 bg-purple-600 rounded-full animate-ping"></span>
             New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-gray-500 text-lg max-w-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          <div className="flex gap-4">
            <button className="btn bg-purple-main text-white hover:bg-purple-800 rounded-full px-10 h-14 border-none font-bold">
              Explore Products
            </button>
            <button className="btn btn-outline border-purple-200 text-purple-main hover:bg-purple-50 rounded-full px-10 h-14 font-bold"> 
              <img src="/src/assets/Play.png" alt="" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src="/src/assets/banner.png" alt="Banner" className="w-full drop-shadow-2xl" />
        </div>
      </div>

      <div className="bg-purple-main rounded-[30px] p-10 md:p-14 text-white flex flex-col md:flex-row justify-around items-center gap-8 shadow-2xl shadow-purple-200">
        <div className="text-center">
          <h2 className="text-6xl font-black mb-1">50K+</h2>
          <p className="text-purple-100 font-medium">Active Users</p>
        </div>
        <div className="hidden md:block w-[1px] h-20 bg-purple-400/50"></div>
        <div className="text-center">
          <h2 className="text-6xl font-black mb-1">200+</h2>
          <p className="text-purple-100 font-medium">Premium Tools</p>
        </div>
        <div className="hidden md:block w-[1px] h-20 bg-purple-400/50"></div>
        <div className="text-center">
          <h2 className="text-6xl font-black mb-1">4.9</h2>
          <p className="text-purple-100 font-medium">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;