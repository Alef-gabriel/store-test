import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemSection from "./ItemSection";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

const ProductGrid: React.FC = () => {
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
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Show error message if fetch fails
  }

  return (
    <div className="w-[58.625rem] max-w-[58.625rem] h-[37.563rem] ">
      <div className="grid 1/4:grid-cols-1 1/4:grid-cols-2 1/4:grid-cols-3 1/4:grid-cols-4 gap-2">
        {data.length > 0 ? (
          data.map((product) => (
            <ItemSection
              key={product.id}
              title={product.name}
              content={product.description}
              imageUrl={product.photo}
              price={product.price}
            />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
