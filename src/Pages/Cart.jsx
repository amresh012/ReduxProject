import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/CartSlice";
import PlaceHolder from "../Component/PlaceHolder";
// import PlaceHolder from "../Component/PlaceHolder";
const Cart = () => {
  const cartItems = useSelector((state) => {
    return state.cart;
  });
  const dipatch = useDispatch();
  const handleRemove = (items) => {
    dipatch(remove(items));
  };

  return (
    <div className=" flex justify-center  items-start pt-24 h-auto relative">
      <div className="space-y-8 h-[30vw] overflow-y-scroll">
        {cartItems ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="border flex items-center justify-around  p-4 hover:shadow-md  "
            >
              <img src={item.image} alt="" className=" w-24 h-24" />
              <div className="detail flex  flex-col  w-full p-4">
                <p className="text-xl">{item.title}</p>
                <p className="">Price:{item.price}</p>
                <p className="">
                  Quantity:{" "}
                  <input
                    type="number"
                    className="w-12 outline-none border rounded-md px-2"
                    min={1}
                    max={5}
                  />{" "}
                </p>
                <div className="flex w-full justify-around items-center p-2">
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
          ))
        ) : (
          <PlaceHolder title="Your Cart is Empty" />
        )}
      </div>
      <div className="h-[20vh] w-[40vw] bg-gray-500/20 m-4 flex gap-4 flex-col justify-around items-center p-4 relative top-0 ">
        <div className="flex justify-around items-center w-full">
          <p className="">Total Item: {cartItems.length}</p>
          <p className="">Total Amount</p>
        </div>
        <div className="p-2 border-2 bg-blue-500 w-full text-center rounded-md text-white ">
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
