import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../src/Components/Navbar";
import Home from "./routes/Home";
import CartList from "./routes/CartList";
import Cheackout from "./routes/Cheackout";


function App() {
  
  const [cart, setCart] = useState([]);
  

  const handleClick = (item)=> {
    let isPresent = false;
    cart.forEach((product)=>{
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent){
     
      return;
    }
    
  setCart([...cart, item]);
  }
  const handleChange = (item, d) =>{
    let ind = -1;
    cart.forEach((data, index)=>{
      if (data.id === item.id)
      ind = index;
    });



    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
  setCart([...tempArr])
  }

  
  return (
    <div>
      <Navbar size={cart.length} />

      <Routes>
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
        <Route
          path="/Cheackout"
          element={<Cheackout cart={cart} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
