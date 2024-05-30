import React, { useState } from "react";
import Header from "../components/Header";
import ProductGrid, { Product } from "../components/ProductGrid";

const Home: React.FC = () => {
  const [cartItems, addToCart] = useState<Product[]>([]);
  return (
    <div className="w-full m-0 p-0 flex flex-col justify-start">
      <Header />
      <div className="flex h-[170vh] justify-center p-[7.25rem] w-[90rem] bg-[#00000022]">
        <ProductGrid addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Home;
