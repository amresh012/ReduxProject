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
      setProduct(data?.slice());
      setIsLoading(false);
    };
    FetchProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    dispatch(TotalAmount(product));
  };
  return (
    <div className="w-auto  h-auto flex items-center justify-evenly gap-2 flex-wrap p-2 ">
      {isLoading ? (
        <Loader />
      ) : (
        product.map((prod) => {
          return (
            <div
              className="lg:w-1/4 w-full flex flex-col rounded-md hover:shadow-md space-y-4  relative"
              key={prod.id}
            >
              <div className="border-2 border-green-400 bg-white p-2 ]">
                <Link to={`/product/${prod.id}`}>
                  <div className="flex flex-col items-center justify-center">
                    <div className="image">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className=" self-center h-44 w-44 p-2"
                      />
                    </div>
                    <div className="flex flex-col items-start w-full justify-start ">
                      <div className=" w-fit px-4 py-1 uppercase text-sm">
                        🏷️{prod.category}
                      </div>
                    </div>
                    <div className="title">
                      <h2 className="text-xl font-bold ">
                        {prod.title.slice(0, 25)}
                      </h2>
                      <p>{prod.description.slice(0, 100)}</p>
                      <p className=" gap-2 w-full flex items-center">
                        <div className="flex w-full items-center">
                          {" "}
                          <MdAttachMoney className="bg-black text-white  rounded-full text-xl" />
                          Price: ${prod.price}
                        </div>
                        <div className=" font-bold p-2 w-full  ">
                          Rating : {prod.rating.rate}/5
                        </div>
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="flex  gap-2">
                  <button
                    className="w-full border border-blue-500 font-medium p-2 active:scale-95 duration-100"
                    onClick={() => handleAdd(prod)}
                  >
                    Add to cart
                  </button>
                  <Link to="/cart" className="w-full">
                    <button
                      className="w-full bg-blue-600  text-white font-medium p-2 active:scale-95 duration-100 hover:bg-slate-500"
                      onClick={() => handleAdd(prod)}
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
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
