import {BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Pages/Navbar';
import { Provider } from 'react-redux'
import  store from './Store/Store'
import { Suspense } from 'react';

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <Provider  store={store}>
      <BrowserRouter>
        <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
      </Suspense>
    </>
  );
}

export default App
