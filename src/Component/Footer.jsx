import { SiRedux } from "react-icons/si";

const Footer = () => {
  return (
    <div className="h-32 w-full text-white flex items-center justify-around bg-slate-950">
      <div className="flex gap-2 items-center">
        RTK Product Store
        <span className="animate-spin duration-1000  bg-black p-2 rounded-full">
          <SiRedux className="" />
        </span>
      </div>
      <div className="">
        © All Rights Reserved 2022 - Created by{" "}
        <a href="https://github.com/JuanFuentes" target="_blank">Amresh Mishra</a>
      </div>
    </div>
  );
};

export default Footer;
