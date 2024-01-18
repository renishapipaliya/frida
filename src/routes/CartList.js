import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";



const CartList = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.description));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id != id);
    setCart(arr);
    // handlePrice();
  };
  useEffect(() => {
    handlePrice();
  });


  return (
    <article className="w-[90%] m-auto  mt-[130px]">
      {cart.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between
        mt-[20px]   pb-[5px]  border border-black  "
        >
          <div className="flex w-[400px] ml-2">
            <img src={item.img} className=" w-[60px] h-[90px]" />
            <p className="font-bold ml-[10px] ">{item.title}</p>
          </div>
          <div>
            <button
              onClick={() => handleChange(item, +1)}
              className="w-[20px] bg-slate-300 border mr-2 border-gray-500"
            >
              +
            </button>
            <button className=" w-[20px] bg-slate-300 border border-gray-500  ">
              {item.amount}
            </button>
            <button
              onClick={() => handleChange(item, -1)}
              className="w-[20px] bg-slate-300 border ml-2 border-gray-500"
            >
              -
            </button>
          </div>
          <div className="flex">
            <span className="text-[16px] xl:mt-2">Rs. {item.description}</span>
            <div>
              <button
                onClick={() => handleRemove(item.id)}
                className="
            space-x-2  text-black cursor-pointer"
              >
                <MdDelete className="w-[30px] xl:ml-3 xl:mt-1 h-[30px] " />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between mt-5   ">
        <span></span>
        <div className=" border border-black mx-8 my-9 w-[400px] ">
          <span className="text-xl text-black font-semibold mt-5 rounded-2xl  my-2 ">
            <p className="ml-3">
              Sub Total:
              <mark className="bg-white ml-[160px]">Rs - {price} </mark>
            </p>
            <p className="ml-3">
              Grand Total:
              <mark className="bg-white ml-[140px]">Rs - {price} </mark>
            </p>
          </span>
          <Link to="/Cheackout">
            <button className="text-white bg-black mt-2 w-full h-[25.2px]">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CartList;
