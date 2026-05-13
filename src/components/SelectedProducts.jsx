import React from 'react';
import { toast } from "react-toastify";
import { CiShoppingCart } from "react-icons/ci";

const SelectedProducts = ({ selectedProducts, setSelectedProducts, setSelectedType }) => {
  const total = selectedProducts.reduce((acc, curr) => acc + curr.price, 0);

  const handleRemove = (id) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== id));
    toast.warn("Item removed from cart");
  };

  const handleCheckout = () => {
    setSelectedProducts([]);
    toast.success("Purchase Successful!");
  };

  if (selectedProducts.length === 0) {
    return (
      <div className="relative text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed flex flex-col items-center justify-center">
        <h3 className="absolute top-8 left-8 text-2xl font-bold text-gray-800">
          Your Cart
        </h3>
        <div className="text-9xl text-gray-300 mb-4">
          <CiShoppingCart />
        </div>
        <p className="text-xl text-gray-400 font-bold">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white border rounded-3xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold mb-6 text-left">Your Cart</h3>
        <div className="space-y-4">
          {selectedProducts.map(p => (
            <div key={p.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{p.icon}</span>
                <div className="text-left">
                  <h4 className="font-bold text-lg">{p.name}</h4>
                  <p className="text-gray-400 font-medium">${p.price}</p>
                </div>
              </div>
              <button onClick={() => handleRemove(p.id)} className="text-red-500 font-bold hover:underline pr-4">Remove</button>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t pt-8">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-medium text-gray-400">Total:</span>
            <span className="text-4xl font-black text-gray-900">${total}</span>
          </div>
          <button 
            onClick={handleCheckout} 
            className="btn bg-purple-main text-white w-full rounded-full h-14 border-none hover:bg-purple-800 font-bold text-lg"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProducts;