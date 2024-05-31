import React, { useState, useEffect } from "react";
import { Product } from "../components/ProductGrid";
import InputSection from "./Input";

interface ItemsProps {
  products: Product[];
  setData: React.Dispatch<React.SetStateAction<Product[]>>;
  setModalStatus: (status: boolean) => void;
}

const CartModal: React.FC<ItemsProps> = ({
  products,
  setData,
  setModalStatus,
}) => {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const totalPriceCalc = () => {
      const price = products.reduce(
        (sum, product) => sum + Number(product.price),
        0,
      );
      setTotal(price);
    };
    totalPriceCalc();
  }, []);

  const deleteItem = (productId: number) => {
    setData((prevData) =>
      prevData.filter((product) => product.id !== productId),
    );
  };

  return (
    <div className="w-1/3 flex flex-col bg-[#0F52BA] h-[170vh]">
      <div className="w-full flex p-4 p-8">
        <h2 className="w-1/2 text-white font-bold text-[1.688rem]">
          Carrinho de compras
        </h2>
        <div className="w-1/2 flex justify-end">
          <button
            onClick={() => {
              setModalStatus(false);
            }}
            className="text-white w-[2.375rem] h-[2.375rem] bg-black text-2xl rounded-full fixed p-2 flex justify-center items-center"
          >
            X
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 p-4 p-8 h-[68vh]">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="flex justify-end">
              <div className="flex w-full p-2 gap-2 items-center justify-end rounded-lg bg-white">
                <div className="w-1/4 flex justify-center items-center">
                  <img
                    src={item.photo}
                    alt="item"
                    className="w-[2.875rem] h-[3.563rem]"
                  />
                </div>
                <p className="font-sm text-base w-1/4">{item.name}</p>
                <div className="w-1/4">
                  <InputSection />
                </div>
                <p className="font-bold text-base w-1/4">R${item.price}</p>
              </div>
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
                className="text-white w-[1.625rem] h-[1.625rem] bg-black text-sm rounded-full fixed p-1"
              >
                X
              </button>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
      <div className="w-full flex p-4 pb-8 pb-4">
        <h2 className="w-1/2 text-white font-bold text-[1.688rem]">Total:</h2>
        <div className="w-1/2 flex justify-end">
          <h2 className="w-1/2 text-white font-bold text-[1.688rem]">
            R${total.toFixed(2)}
          </h2>
        </div>
      </div>
      <button className="w-full bg-black h-[6.063rem] text-white text-2xl font-bold flex items-center justify-center">
        Finalizar Compra
      </button>
    </div>
  );
};

export default CartModal;
