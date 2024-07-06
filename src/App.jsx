import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Component/Navbar";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { Suspense } from "react";
import Breadcrums from "./Component/Breadcrums";
import ProductListing from "./Pages/Product-listing";
import ProductDetail from "./Pages/ProductDetail";
import Footer from './Component/Footer'
import Login from './Pages/Login'
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Breadcrums />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/product" element={<ProductListing />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
