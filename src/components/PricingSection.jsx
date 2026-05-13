import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      button: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      button: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      button: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24 bg-gray-50/50 rounded-[50px] mb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">Simple, Transparent Pricing</h2>
        <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div key={idx} className={`relative p-8 rounded-[32px] border ${plan.popular ? 'bg-[#9538E2] text-white border-[#9538E2] shadow-2xl shadow-purple-200' : 'bg-white text-gray-900 border-gray-100'} transition-all hover:scale-105`}>
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black">${plan.price}</span>
              <span className={`${plan.popular ? 'text-purple-200' : 'text-gray-400'}`}>/Month</span>
            </div>
            <ul className="space-y-4 mb-10">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className={plan.popular ? 'text-purple-200' : 'text-green-500'}>✓</span> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.popular ? 'bg-white text-[#9538E2] hover:bg-gray-100' : 'bg-[#9538E2] text-white hover:bg-purple-800'}`}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;