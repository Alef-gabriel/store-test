import shoppingBag from "../assets/shopping-bag.png";
import React from "react";

// Define the props interface
interface ItemsProps {
  title: string;
  content: string;
  imageUrl: string;
  price: number;
}

const ItemSection: React.FC<ItemsProps> = ({
  title,
  content,
  imageUrl,
  price,
}) => {
  return (
    <div className="flex flex-col gap-1 w-1/4 pb-0 items-center justify-center shadow-lg rounded-lg">
      <img src={imageUrl} alt="item" />
      <div className="flex gap-1 items-center p-2">
        <p className="font-normal text-base">{title}</p>
        <div className="w-[4rem] h-[1.625rem] bg-[#373737] rounded-lg justify-center">
          <p className="text-white font-bold text-base">R${price}</p>
        </div>
      </div>
      <p className="p-2">{content}</p>
      <button className="w-full h-[1.994rem] bg-[#0F52BA] flex gap-2 items-center justify-center rounded-b-lg">
        <img src={shoppingBag} alt="bag" className="h-[1rem] w-[1rem]" />
        <p className="text-white font-semibold text-sm">COMPRAR</p>
      </button>
    </div>
  );
};

export default ItemSection;
