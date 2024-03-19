import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Pages/Navbar";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { Suspense } from "react";
import Breadcrums from "./Component/Breadcrums";
import ProductListing from "./Pages/Product-listing";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  const breadcrums = [
    { label: Home, link: "/" },
    { label: Cart, link: "/cart" },
  ];
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <div className="bg-red-400">
              <Breadcrums breadcrums={breadcrums} />
            </div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/product" element={<ProductListing />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
