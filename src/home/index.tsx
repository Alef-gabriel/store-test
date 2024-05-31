import React, { useState } from "react";
import Header from "../components/Header";
import ProductGrid, { Product } from "../components/ProductGrid";
import CartModal from "../components/CartModal";
import Walk from "../components/Walk";

const Home: React.FC = () => {
  const [cartItems, addToCart] = useState<Product[]>([]);
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  return (
    <div className="w-full m-0 p-0 flex flex-col justify-start">
      <Header setModalStatus={setModalStatus} />
      {modalStatus && (
        <div className="w-full overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-end">
          <CartModal
            products={cartItems}
            setData={addToCart}
            setModalStatus={setModalStatus}
          />
        </div>
      )}
      <div className="flex h-[170vh] justify-center p-[7.25rem] w-[90rem] bg-[#00000022]">
        <ProductGrid addToCart={addToCart} cartItems={cartItems} />
      </div>
      <Walk />
    </div>
  );
};

export default Home;
