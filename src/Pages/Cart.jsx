import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/CartSlice";
const Cart = () => {
  const cartItems = useSelector((state) => {
    console.log(state.cartHolder);
    return state.cartHolder;
  });
  const {total,cart}= cartItems
  const dipatch = useDispatch();
  const handleRemove = (items) => {
    dipatch(remove(items));
  };

  return (
    <div className=" flex flex-col lg:flex-row justify-center  items-start pt-24 h-auto relative">
      <div className="space-y-8 lg:h-[30vw] overflow-y-scroll">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border flex items-center justify-around  p-4 hover:shadow-md  "
          >
            <img src={item.image} alt="" className=" w-24 h-24 " />
            <div className="detail flex  flex-col  w-full p-4">
              <p className="text-xl">{item.title}</p>
              <p className="">Price:{item.price}</p>
              <p className="">
                Quantity:{" "}
                <input
                  type="number"
                  className="w-16 outline-none border rounded-md px-2"
                  min={1}
                  max={10}
                />{" "}
              </p>
              <div className="flex w-full justify-around items-center ">
                <button
                  className=" px-8 py-2 bg-red-500 text-white"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
                <button className="px-8 py-2 bg-green-300">Check-Out</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItems && (
        <div className=" bg-gray-500/20 m-4 flex gap-4 flex-col justify-around items-center p-4 w-full lg:w-1/4">
          <div className="flex flex-col lg:flex-row justify-start lg:justify-around lg:items-center w-full">
            <p className="">Total Item: {cart.length}</p>
            <p className="">Total Amount:{ total|| 0}</p>
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
