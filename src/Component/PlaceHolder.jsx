/* eslint-disable react/prop-types */

const PlaceHolder = ({ title }) => {
  return (
    <div className="h-full w-full bg-zinc-300 text-xl font-bold grid place-content-center text-center ">
      {title}
    </div>
  );
};

export default PlaceHolder;
