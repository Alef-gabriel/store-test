import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import ItemSection from "./ItemSection";

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
  quantity: number;
}

interface ItemSectionProps {
  cartItems: Product[];
  addToCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductGrid: React.FC<ItemSectionProps> = ({ addToCart, cartItems }) => {
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC",
        );
        console.log(response.data); // Inspect the response structure
        setData(response.data.products); // Adjust this line according to the actual structure
      } catch (err: unknown) {
        const axiosErr = err as AxiosError;
        setError(axiosErr.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Show error message if fetch fails
  }

  const addItemToCart = (product: Product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      addToCart((prevItems) => [...prevItems, product]);
    }
  };

  return (
    <div className="w-[58.625rem] max-w-[58.625rem] h-[37.563rem] gap-4 flex flex-col items-center">
      <div className="w-full flex gap-4">
        {data.length > 0 ? (
          data
            .slice(0, 4)
            .map((product) => (
              <ItemSection product={product} addItemToCart={addItemToCart} />
            ))
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div className="w-full flex gap-4">
        {data.length > 0 ? (
          data
            .slice(4, 9)
            .map((product) => (
              <ItemSection product={product} addItemToCart={addItemToCart} />
            ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
