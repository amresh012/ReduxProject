import { SiRedux } from "react-icons/si";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cartHolder);
  return (
    <nav className="Navabr  flex flex-col lg:flex-row gap-4 items-center justify-center bg-slate-950  p-3 w-full">
      <span className=" text-white text-xl  w-full flex  items-center  justify-around gap-2  uppercase">
        <div className="flex gap-2 items-center">
          RTK Product Store
          <span className="animate-spin duration-1000  bg-black p-2 rounded-full">
            <SiRedux className="" />
          </span>
        </div>
      </span>
      <ul className=" flex items-center gap-12 w-full text-white  uppercase">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/cart">Cart</Link>
      </ul>
      <Link to="/cart">
        <div className=" p-2 flex items-center  justify-center  font-bold text-white uppercase relative ">
          <FaShoppingCart size={30} />
          <small className="cartCount absolute top-0 left-3 bg-red-400 rounded-full w-5 text h-5 text-center">
            {cart.length || 0}
          </small>
        </div>
      </Link>
      <Link to='/Login'>
        <div className="text-white px-12">
          <button>Login</button>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
