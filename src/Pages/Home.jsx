import Product from "../Component/Product";
import { SiRedux } from "react-icons/si";
const Home = () => {

  return (
      <div className="p-4">
        <h2 className="text-3xl font-bold  flex items-center justify-center gap-2 w-full">
          Welcome To Redux Toolkit Store
          <SiRedux className="animate:spin" />
        </h2>
      <div className="">
        <h1 className="text-center text-2xl p-4">Product List</h1>
        <Product/>
        </div>
      </div>
  );
};

export default Home;
