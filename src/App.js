import React, { useState } from "react";
import { Data } from "../src/Components/Data";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

import Navbar from "../src/Components/Navbar";
import Home from "./routes/Home";
import CartList from "./routes/CartList";
import Cheackout from "./routes/Cheackout";
import Product from "./routes/Product";
import Lower from "./Components/Lower";

import Contact from "./routes/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import ProductDetails from "./Components/ProductDetails";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";


function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      return;
    }

    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div>
      <Navbar size={cart.length} />
      <Lower />

      <Routes>
        <Route
          path="/product-details/:productId"
          element={<ProductDetails data={Data} handleClick={handleClick} />}
        />

        <Route
          path="/products"
          element={<Product handleClick={handleClick} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Home handleClick={handleClick} />} />
        <Route
          path="/cartlist"
          element={
            <CartList
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
              size={cart.length}
            />
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/Cheackout"
          element={<Cheackout cart={cart} setCart={setCart} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
