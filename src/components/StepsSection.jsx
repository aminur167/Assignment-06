import React from 'react';

const StepsSection = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      image: "/src/assets/user.png", 
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      image: "/src/assets/package.png",
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      image: "/src/assets/rocket.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 border-t border-gray-100">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900">Get Started in 3 Steps</h2>
        <p className="text-gray-500 max-w-lg mx-auto">Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step) => (
          <div key={step.id} className="relative bg-white border border-gray-100 rounded-[40px] p-10 text-center hover:shadow-2xl hover:shadow-purple-100 transition-all duration-300">
            
            <span className="absolute top-8 right-8 bg-[#9538E2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
              {step.id}
            </span>

            <div className="w-24 h-24 bg-purple-50 rounded-[30px] flex items-center justify-center mx-auto mb-8 p-4">
              <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
            <p className="text-gray-500 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;