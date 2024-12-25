import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import Fashion from './components/fashion/Fashion';
import Electronics from './components/Electronics/Electronics';
import Footware from './components/footware/Footware';
import Groceries from './components/groceries/Groceries';
import Cart from './components/cartItem/Cart';
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <Navbar />
        <Routes>
        <Route path="/" element={<Home setCartItems={setCartItems} cartItems={cartItems} />} />
          <Route path='/Fashion' element={<Fashion />} />
          <Route path='/Electronics' element={<Electronics />} />
          <Route path='/Footware' element={<Footware />} />
          <Route path='/Groceries' element={<Groceries />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
          

          {/*      
      <Route path='/Bags' element = {<Bags/>} />
      
      <Route path='/Beauty' element = {<Beauty/>} />
      <Route path='/Shop' element = {<Shop/>} />   */}

        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
