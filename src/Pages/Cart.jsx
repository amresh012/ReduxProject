import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/CartSlice";
import { FaTrash, FaCheck } from "react-icons/fa";
const Cart = () => {
  const cartItems = useSelector((state) => {
    return state.cartHolder;
  });
  const { total, cart } = cartItems;
  const dipatch = useDispatch();
  
  const handleRemove = (items) => {
    dipatch(remove(items));
  };

  return (
    <div className=" flex flex-col lg:flex-row justify-center w-[80vw]  items-start pt-24 h-auto relative">
      <div className="space-y-8 lg:h-[40vw] overflow-y-scroll">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border-b flex items-center justify-around p-4  hover:shadow-md  "
          >
            <div className="">
              <img
                src={item.image}
                alt="product-image"
                className=" w-28 h-28 "
              />
            </div>
            <div className="detail flex  flex-col  w-full p-4">
              <p className="text-xl">{item.title}</p>
              <p className="">Price:{item.price}</p>
              <p className="m-2">
                Quantity:{" "}
                <input
                  type="number"
                  className="w-16 outline-none border rounded-md px-2"
                  min={1}
                  max={10}
                />{" "}
              </p>
              <div className="flex w-full justify-around items-center  ">
                <button
                  className=" px-8 py-2 border-red-500 border hover:bg-red-500 hover:text-white flex items-center gap-2 duration-300"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                  <span className="bg-red-500 p-2 text-white rounded-full">
                    {" "}
                    <FaTrash />
                  </span>
                </button>
                <button
                  className="px-8 py-2 flex items-center gap-2 bg-green-300 border hover:border-green-500 hover:bg-white text-white hover:text-black duration-300
                "
                >
                  Check-Out
                  <span className="bg-green-300 p-2 rounded-full">
                    {" "}
                    <FaCheck />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItems && (
        <div className=" bg-gray-500/20 m-4 flex gap-4 flex-col justify-around items-center p-4 w-full lg:w-1/4">
          <div className="flex flex-col lg:flex-row justify-start lg:justify-around lg:items-center w-full">
            <p className="">
              Total Item:{" "}
              <span className="font-bold italic text-red-500">
                {cart.length}
              </span>
            </p>
            <p className="">
              Total Amount:{" "}
              <span className="text-red-500 italic font-bold">
                {total || 0}
              </span>
            </p>
          </div>
          <div className="p-2 border-2 bg-blue-500 w-full text-center rounded-md text-white ">
            <button>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
