import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <div className="w-full m-0 p-0 flex flex-col justify-start">
      <Header />
      <ProductGrid />
    </div>
  );
}

export default Home;
