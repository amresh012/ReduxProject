import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Component/Loader";
import { addToCart } from "../Store/CartSlice";
import { useDispatch } from "react-redux";
// import { MdAttachMoney } from "react-icons/md";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const FetchProduct = async () => {
      let response = await fetch(`https://fakestoreapi.com/products/${id}`);
      let data = await response.json();
      setProduct(data);
      console.log("detail page", data);
      setIsLoading(false);
    };
    FetchProduct();
  }, [id]);
  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <h1 className="text-center text-3xl p-4">Details for product</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-around w-full">
          <div className="img">
            <img src={product.image} alt="" className="w-80" />
          </div>
          <div className="detail w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl font-bold">{product.title}</h2>
            <p className="text-xl">{product.description}</p>
            <div className="flex gap-4 items-center  font-medium">
              Price:
              <p className="font-thin italic">{product.price}</p>
              <div className="flex items-center justify-center gap-2">
                Available in{" "}
                <p className="font-thin bg-green-400 p-2 text-white">
                  {product.category}
                </p>
              </div>
            </div>

            <button
              className="w-fit bg-blue-500 text-white font-medium p-2 active:scale-95 duration-100 hover:bg-slate-500"
              onClick={() => handleAdd(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
