import { useEffect, useState } from "react";
import Loader from "../Component/Loader";
import { addToCart, TotalAmount } from "../Store/CartSlice";
import { useDispatch } from "react-redux";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";
const Product = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchProduct = async () => {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setProduct(data?.slice(0, 6));
      setIsLoading(false);
    };
    FetchProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    dispatch(TotalAmount(product));
  };
  return (
    <div className="w-auto h-auto flex items-center justify-around gap-2 flex-wrap ">
      {isLoading ? (
        <Loader />
      ) : (
        product.map((prod) => {
          return (
            <div
              className="w-1/4 rounded-md hover:shadow-md space-y-4  relative"
              key={prod.id}
            >
              <div className="border-2 border-green-400 bg-white p-2">
                {/* <div className=" absolute top-0 right-0 flex flex-col items-center justify-around ">
                  <div className="border border-green-400 w-fit p-2  uppercase">
                    {prod.category}
                  </div>
                  <div className="border-green-400 font-bold p-2 w-full border-b border-l ">
                    Rating : {prod.rating.rate.toFixed(0)}
                  </div>
                </div> */}
                <Link to={`/product/${prod.id}`}>
                  <div className="flex ">
                    <div className="image">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className=" self-center w-44 p-2"
                      />
                    </div>
                    <div className="w-1/2">
                      <h2 className="text-xl font-bold ">
                        {prod.title.slice(0, 25)}
                      </h2>
                      <p>{prod.description.slice(0, 100)}</p>
                      <p className="font-bold my-4 flex items-center justify-start gap-2">
                        <MdAttachMoney className="bg-black text-white  rounded-full text-xl" />
                        Price: ${prod.price}
                      </p>
                    </div>
                  </div>
                </Link>
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
