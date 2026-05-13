import React, { use, useState } from "react";
import AvailableProducts from "./AvailableProducts";
import SelectedProducts from "./SelectedProducts";

const MainSection = ({ productsPromise, selectedProducts, setSelectedProducts }) => {
  const products = use(productsPromise);
  const [selectedType, setSelectedType] = useState("available");

  return (
    <div className="container mx-auto px-4 my-24">
      <div className="text-center space-y-4 mb-14">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900">Premium Digital Tools</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed <br /> 
          to boost your productivity and creativity.
        </p>
        
        <div className="inline-flex bg-gray-100 p-2 rounded-full border border-gray-200 mt-6">
          <button 
            onClick={() => setSelectedType("available")}
            className={`px-10 py-3 rounded-full font-bold transition-all ${selectedType === 'available' ? 'bg-[#9538E2] text-white shadow-xl' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Products
          </button>
          <button 
            onClick={() => setSelectedType("selected")}
            className={`px-10 py-3 rounded-full font-bold transition-all ${selectedType === 'selected' ? 'bg-[#9538E2] text-white shadow-xl' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Cart ({selectedProducts.length})
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailableProducts 
          products={products} 
          setSelectedProducts={setSelectedProducts} 
          selectedProducts={selectedProducts} 
        />
      ) : (
        <SelectedProducts 
          selectedProducts={selectedProducts} 
          setSelectedProducts={setSelectedProducts} 
          setSelectedType={setSelectedType}
        />
      )}
    </div>
  );
};

export default MainSection;