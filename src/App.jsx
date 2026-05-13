import React, { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MainSection from "./components/MainSection";
import StepsSection from "./components/StepsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const productsPromise = fetchProducts();

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar cartCount={selectedProducts.length} />
      <Banner />
      
      <Suspense fallback={<div className="flex justify-center py-20"><span className="loading loading-dots loading-xl text-purple-600"></span></div>}>
        <MainSection 
          productsPromise={productsPromise} 
          selectedProducts={selectedProducts} 
          setSelectedProducts={setSelectedProducts} 
        />
      </Suspense>

      <StepsSection />
      <PricingSection />
      
      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;