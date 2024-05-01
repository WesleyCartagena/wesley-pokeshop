import { Route, Routes} from 'react-router-dom'
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout'
import Home from './components/Home'
import Search from './components/Search';
import Cart from './components/Cart';
import './App.scss';


function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home cart={cart} setCart={setCart} />} />
            <Route path="search" element={<Search cart={cart} setCart={setCart}/>}/>
           <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        </Route>
      </Routes>
  </>
  )
}

export default App;
