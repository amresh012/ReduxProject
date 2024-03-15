import { useEffect, useState } from "react";
import Loader from "../Component/Loader";
import { addToCart } from "../Store/CartSlice";
import { useDispatch } from "react-redux";
import { MdAttachMoney } from "react-icons/md";
const Product = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchProduct = async () => {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setProduct(data);
      setIsLoading(false);
    };
    FetchProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="w-auto h-auto flex items-center justify-around gap-2 flex-wrap ">
      {isLoading ? (
        <Loader />
      ) : (
        product.map((prod) => {
          return (
            <div
              key={prod.id}
              className="w-[400px] rounded-md hover:shadow-md space-y-4  relative"
            >
              <div className="border-8 border-green-400 bg-white p-2">
                <div className=" absolute top-0 right-0 flex flex-col items-center justify-around gap-2">
                  <div className="bg-green-400 w-fit p-2 text-white uppercase rounded-l-md">
                    {prod.category}
                  </div>
                  <div className="bg-green-400 font-bold p-2 w-full  text-white rounded-l-md">
                    Rating : {prod.rating.rate}
                  </div>
                </div>
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="h-44 self-center w-44 p-2"
                />
                <h2 className="text-xl font-bold ">{prod.title}</h2>
                <p>{prod.description.slice(0, 200)}</p>
                <p className="font-bold my-4 flex items-center justify-start gap-2">
                  <MdAttachMoney className="bg-black text-white  rounded-full text-xl" />
                  Price: ${prod.price}
                </p>
                <button
                  className="w-full bg-blue-500 text-white font-medium p-2 active:scale-95 duration-100 hover:bg-slate-500"
                  onClick={() => handleAdd(prod)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Product;
//   https://fakestoreapi.com/products//
