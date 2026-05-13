import React from 'react';
import ProductCard from "./ProductCard";

const AvailableProducts = ({ products, setSelectedProducts, selectedProducts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          setSelectedProducts={setSelectedProducts} 
          selectedProducts={selectedProducts} 
        />
      ))}
    </div>
  );
};

export default AvailableProducts;