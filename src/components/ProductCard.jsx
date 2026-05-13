import React from 'react';
import { toast } from "react-toastify";

const ProductCard = ({ product, setSelectedProducts, selectedProducts }) => {
  
  const isSelected = selectedProducts && selectedProducts.find(p => p.id === product.id);

  const handleBuy = () => {
    if (isSelected) {
      toast.error("Already in Cart!");
      return;
    }
    
    // কয়েন লজিক সরিয়ে সরাসরি অ্যাড করা হচ্ছে
    setSelectedProducts([...selectedProducts, product]);
    toast.success(`${product.name} Added to Cart!`);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-[32px] p-8 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group">
      <div className="flex justify-between items-start mb-6">
        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
          {product.icon}
        </div>
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
          product.tagType === 'popular' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'
        }`}>
          {product.tag}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">{product.description}</p>
      
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-black text-gray-900">${product.price}</span>
        <span className="text-gray-400 font-medium">/{product.period}</span>
      </div>

      <div className="space-y-3 mb-8">
        {product.features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-600">
            <span className="text-green-500 font-bold">✓</span> {f}
          </div>
        ))}
      </div>

      <button 
        onClick={handleBuy} 
        disabled={isSelected}
        className={`w-full h-14 rounded-2xl font-bold text-lg transition-all border-none ${
          isSelected ? 'bg-gray-100 text-gray-400' : 'bg-[#9538E2] text-white hover:bg-purple-800'
        }`}
      >
        {isSelected ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;