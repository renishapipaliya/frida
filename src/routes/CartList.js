import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CartList = ({ cart, setCart, handleChange, size }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
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
    <article className="lg:w-[90%] md:w-[90%] w-[100%] lg:mx-[80px] md:mx-[5%]  my-[80px] shadow-2xl rounded-[4px]  border border-black">
      <div className="bg-black h-[60px] text-white flex justify-between rounded-[4px]">
        <h1 className="font-bold lg:text-xl my-3 mx-2 md:text-2xl text-[15px]">
          Cart Calculation
        </h1>
        <button className="bg-red-600 lg:w-[9%] md:w-[15%] w-[22%] rounded-[3px] h-[60%] my-3 mx-2 lg:text-[18px] md:text-[20px] text-[15px] ">
          Emptycart
        </button>
      </div>
      <div className=" flex justify-between h-[40px] items-center font-bold lg:text-[18px] md:text-[20px] text-[15px]">
        <h1>Product</h1>
        <h1>Name</h1>
        <h1>Qty</h1>
        <h1>Price</h1>
        <h1>Action</h1>
      </div>
      <hr className="border border-gray-400 h-px w-auto "></hr>

      {cart.map((item, index) => (
        <div key={index}>
             <Link
              key={item.id}
              to={`/product-details/${item.id}`}
              className=" xl:w-[300px] lg:w-[230px] md:w-[190px] xs:w-[193px] xxs:w-[183px] shadow-xl "
            >
          <div
            className="flex justify-between
            items-center  lg:mx-2 md:mx-2  "
          >
           
            
            <div>
              
              <img
                src={item.img}
                className=" lg:w-[60px] lg:h-[90px] md:w-[60px] md:h-[90px] w-[40px] h-[60px] my-2"
              />
            </div>
            <div>
              <p className="font-bold lg:text-[80%] md:text-[90%] text-[70%] ">
                {item.title}
              </p>
            </div>
            <div>
              <button
                onClick={() => handleChange(item, +1)}
                className="lg:w-[30px] md:w-[30px]  lg:h-[30px] md:h-[30px] bg-slate-300 border lg:mr-2 md:mr-2 border-gray-500   text-blue-600 font-bold"
              >
                +
              </button>
              <button className=" lg:w-[60px] md:w-[60px] border border-gray-500  ">
                {item.amount}
              </button>
              <button
                onClick={() => handleChange(item, -1)}
                className="lg:w-[30px] md:w-[30px] w-[25%] bg-slate-300 border lg:ml-2 md:ml-2 border-gray-500 lg:h-[30px] md:h-[30px] text-blue-600 font-bold"
              >
                -
              </button>
            </div>
            <div>
              <span className="font-bold lg:text-[80%] md:text-[90%] text-[70%] ">
                Rs. {item.price * item.amount}
              </span>
            </div>
            <div>
              <button
                onClick={() => handleRemove(item.id)}
                className="
            space-x-2  text-black cursor-pointer"
              >
                <MdDelete className="lg:w-[30px] md:w-[30px]  lg:h-[30px] md:h-[30px] " />
              </button>
            </div>
          </div>
          <div className="bg-gray-300 h-px my-2"></div>
          </Link>
        </div>
      ))}
      <div className="flex justify-between ">
        <div></div>
        <div></div>
        <div className="font-bold my-3 mx-2 lg:text-[18px] md:text-[20px] text-[14px]">
          Item In Cart : <mark className="bg-white text-red-600"> {size}</mark>
        </div>
        <div className="font-bold my-3 mx-2 lg:text-[18px] md:text-[20px] text-[13px]">
          Total Price : <mark className="bg-white text-red-600">{price}</mark>
        </div>
        <Link to="/Cheackout" className=" my-3 mx-2">
          <button className="bg-green-600  md:w-[100%] rounded-[3px]  text-white lg:w-[100%] lg:text-[18px] md:text-[15px] text-[15px] w-[22%] hover:bg-black">
            Cheackout
          </button>
        </Link>
      </div>
    </article>
  );
};

export default CartList;
