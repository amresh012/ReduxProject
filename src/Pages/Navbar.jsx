import { SiRedux } from "react-icons/si";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const Cartitem = useSelector((state) => state.cart);
  return (
    <nav className="Navabr flex flex-col lg:flex-row gap-4 items-center justify-around bg-zinc-400  p-3 w-full">
      <span className=" text-white flex items-center gap-2  uppercase">
        RTK Product Store
        <span className="animate-spin duration-1000  bg-black p-2 rounded-full">
          <SiRedux className="" />
        </span>
      </span>
      <ul className=" flex items-center gap-12 text-white  uppercase">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </ul>
      <div className=" p-2 flex items-center  justify-center  font-bold text-white uppercase relative  w-24">
        <FaShoppingCart size={30} />
        <small className="cartCount absolute top-0 left-3 bg-red-400 rounded-full w-5 text h-5 text-center">
          {Cartitem.length}
        </small>
      </div>
    </nav>
  );
};

export default Navbar;
