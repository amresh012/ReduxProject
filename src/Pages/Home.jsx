import { Link } from "react-router-dom";
import Product from "../Component/Product";
import { SiRedux } from "react-icons/si";
const Home = () => {
  const num = 6;
  return (
    <div className="">
      <div className=" bg-slate-950 flex flex-col items-center justify-center gap-3 p-3 ">
        <h2 className="text-[5vmax] font-bold text-white  flex items-center justify-center gap-2 w-full">
          Welcome To Redux Store
          <SiRedux className="hidden lg:block" />
        </h2>
        <p className="text-white w-full lg:w-1/2 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          totam sequi velit enim eius repellat, quas fuga quibusdam sint culpa
          itaque, aspernatur sapiente aperiam reiciendis assumenda consequuntur?
          Consequatur, distinctio neque.
        </p>
        <Link to="/product">
          <button className="bg-red-700 hover:bg-red-900 px-4 py-2 rounded- md text-lg text-white transition duration--300">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-6 items-center ">
        <div className="flex justify-between  items-center px-24 w-full">
          <h1 className=" text-3xl text-center font-bold py-8 ">
            Trending Products 🔥
          </h1>
          <Link to="/product">
            <button className="bg-red-500 text-white hover:bg-red-600 font-bold p-2">
              View more
            </button>
          </Link>
        </div>
        <Product num={num} />
      </div>
    </div>
  );
};

export default Home;
