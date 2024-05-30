import React, { useState } from "react";
import { Product } from "../components/ProductGrid";
import InputSection from "./Input";

interface ItemsProps {
  products: Product[];
}

const CartModal: React.FC<ItemsProps> = ({ products }) => {
  return (
    <div className="w-1/3 p-8 flex flex-col bg-[#0F52BA] h-[170vh]">
      <div className="w-full flex p-4">
        <h2 className="w-1/2 text-white font-bold text-[1.688rem]">
          Carrinho de compras
        </h2>
        <div className="w-1/2"></div>
      </div>
      <div className="w-full flex flex-col gap-4 p-4">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="flex w-full p-2 gap-2 items-center justify-end rounded-lg bg-white">
              <img
                src={item.photo}
                alt="item"
                className="w-[2.875rem] h-[3.563rem]"
              />
              <p className="font-sm text-base">{item.name}</p>
              <InputSection />
              <p className="font-bold text-base">R${item.price}</p>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
