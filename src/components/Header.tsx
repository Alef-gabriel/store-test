import cart from "../assets/cart.png";

interface ItemsProps {
  setModalStatus: (status: boolean) => void;
}

const Header: React.FC<ItemsProps> = ({ setModalStatus }) => {
  return (
    <div className="w-[90rem] p-0 m-0 flex items-center h-[6.313rem] bg-[#0F52BA] gap-24">
      <div className="flex gap-1 w-2/4 pl-10 items-end">
        <h1 className="text-white font-semibold text-4xl">MKS</h1>
        <p className="text-white text-xl font-light">Sistemas</p>
      </div>
      <div className="w-2/4 flex justify-end pr-10">
        <button
          onClick={() => {
            setModalStatus(true);
          }}
        >
          <div className="h-[2.813rem] w-[5.625rem] bg-white flex gap-2 rounded-lg justify-center items-center">
            <img src={cart} alt="cart" />
            <p className="font-bold text-lg">0</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
