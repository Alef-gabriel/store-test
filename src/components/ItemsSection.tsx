function ItemsSection() {
  return (
    <div className="w-[58.625rem] p-0 m-0 flex items-center h-[37.563rem]">
      <div className="flex gap-1 w-2/4 pl-10 items-end">
        <h1 className="text-white font-semibold text-4xl">MKS</h1>
        <p className="text-white text-xl font-light">Sistemas</p>
      </div>
      <div className="w-2/4 flex justify-end pr-10">
        <div className="h-[2.813rem] w-[5.625rem] bg-white flex gap-2 rounded-lg justify-center items-center">
          <img src={cart} alt="cart" />
          <p className="font-bold text-lg">0</p>
        </div>
      </div>
    </div>
  );
}

export default ItemsSection;
