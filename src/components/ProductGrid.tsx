import ItemSection from "./ItemSection";

function ProductGrid() {
  return (
    <div className="w-[58.625rem] gap-4 flex items-center h-[37.563rem]">
      <ItemSection
        title="Apple Watch Series 4 GPS"
        content="Redesigned from scratch and completely revised."
        imageUrl={appleWatch}
        price={399}
      />
    </div>
  );
}

export default ProductGrid;
