const Loader = () => {
  return (
    <div className="h-[50vh] w-max flex flex-col  items-center justify-center">
      <div className="border-[10px]  border-blue-300 h-12 w-12  animate-spin rounded-full border-dotted"></div>
      <h1>Loading Products</h1>
    </div>
  );
};

export default Loader;
