import Product from "../Component/Product";

const ProductListing = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className="text-center font-bold text-white  bg-gray-300 w-full p-4">
        Explore All Products
      </h1>
      <div className="">
        <Product />
      </div>
    </div>
  );
};

export default ProductListing;
