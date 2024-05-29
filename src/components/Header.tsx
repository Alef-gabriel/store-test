import cart from "../assets/cart.png";
function Header() {
  return (
    <div className="w-full flex itens-center h-[6.313rem] bg-[#0F52BA]">
      <div className="flex gap-1">
        <h1 className="text-white font-semibold text-4xl">MKS</h1>
        <p className="text-white text-xl font-light">Sistemas</p>
      </div>
      <div className="h-[2.813rem] w-[5.625rem] bg-white flex gap-2">
        <img src={cart} alt="cart" />
        <p className="font-bold text-lg">0</p>
      </div>
    </div>
  );
}

export default Header;
