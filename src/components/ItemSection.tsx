import shoppingBag from "../assets/shopping-bag.png";
import React from "react";
import { Product } from "./ProductGrid";

// Define the props interface
interface ItemsProps {
  product: Product;
  addItemToCart: (product: Product) => void;
}

const ItemSection: React.FC<ItemsProps> = ({ product, addItemToCart }) => {
  return (
    <div className="flex flex-col gap-1 min-w-1/4 w-1/4 pb-0 items-center justify-end shadow-lg rounded-lg bg-white h-full">
      <img src={product.photo} alt="item" />
      <div className="flex gap-2 items-center justify-center p-2 w-full">
        <p className="font-normal w-2/4 text-base pl-2">{product.name}</p>
        <div className="p-1 w-2/4 flex items-center h-[1.625rem] bg-[#373737] rounded-lg">
          <p className="text-white font-bold text-base">R${product.price}</p>
        </div>
      </div>
      <p className="p-2">{product.description}</p>
      <button
        onClick={() => addItemToCart(product)}
        className="w-full h-[1.994rem] bg-[#0F52BA] flex gap-2 items-center justify-center rounded-b-lg"
      >
        <img src={shoppingBag} alt="bag" className="h-[1rem] w-[1rem]" />
        <p className="text-white font-semibold text-sm">COMPRAR</p>
      </button>
    </div>
  );
};

export default ItemSection;
