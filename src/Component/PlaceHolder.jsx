/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const PlaceHolder = ({ text }) => {
  return (
    <div className="h-full w-full bg-white  capitalize text-xl font-bold grid place-content-center text-center ">
      <img
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        alt=""
        className="h-44 "
      />
      <p className="text-2xl font-bold text-gray-500">{text}</p>
      <Link to='/product'>
        <button className="mt-12 bg-orange-500 text-white p-2 rounded-md">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default PlaceHolder;
