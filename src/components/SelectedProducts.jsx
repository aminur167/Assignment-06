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
        <button 
          onClick={() => setSelectedType("available")} 
          className="btn btn-link text-purple-main font-bold mt-2"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white border rounded-3xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold mb-6">Your Cart</h3>
        <div className="space-y-4">
          {selectedProducts.map(p => (
            <div key={p.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{p.icon}</span>
                <div>
                  <h4 className="font-bold text-lg">{p.name}</h4>
                  <p className="text-purple-main font-bold">${p.price}</p>
                </div>
              </div>
              <button onClick={() => handleRemove(p.id)} className="btn btn-ghost text-red-500 font-bold">Remove</button>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t pt-8">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-gray-500">Total Price:</span>
            <span className="text-4xl font-black text-gray-900">${total}</span>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setSelectedType("available")} className="btn btn-outline flex-1 rounded-2xl h-14 font-bold border-purple-200">
              Add More Products
            </button>
            <button onClick={handleCheckout} className="btn bg-purple-main text-white flex-[2] rounded-2xl h-14 border-none hover:bg-purple-800 font-bold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectedProducts;