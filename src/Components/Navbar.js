import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ size }) {
  return (
    <div className="bg-white top-0 sticky">
      <div className="py-2 sm:py-0 ">
        <div className="flex justify-between  items-center w-[100%] h-[100px]">
          <div>
            <img
              src="/assets/mobilelogo.png"
              className="w-[70px] justify-center mx-4 "
            />
          </div>
          <div className="flex gap-[20%]  w-[100px] ">
            

            <Link to="/CartList">
              <FaShoppingCart className="text-4xl  top-5  text-black drop-shadow-sm cursor-pointer " />
              <span className="absolute h-4 rounded-full text-xs px-1 text-white top-5 bg-black">
                {size}
              </span>
            </Link>
            <div className="xl:size-10 size-10 rounded-full group cursor-pointer">
              <img
                src="/assets/profile.png"
                alt="Userlogo"
                className=" xl:mx-2"
              ></img>
              <div className="absolute top-16 z-50 right-1 bg-white border-2 shadow-md my-1 opacity-0 group-hover:opacity-100 hover:opacity-100 hover:duration-1000 rounded-lg px-5 py-5">
                <ul className="my-2">
                  <li>
                    <Link to="/Login" className="text-lg font-bold ">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/Registration">Registration</Link>
                  </li>
                  <li>
                    <Link to="/Admin">Admin</Link>
                  </li>
                  <hr />
                  <hr />
                  <li>
                    <Link to="/">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center xl:gap-[100px] lg:gap-[100px] md:gap-[100px] gap-[10%] list-none font-bold lg:text-xl md:text-xl bg-black text-white top-24 sticky">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Products">
          <li>Product</li>
        </Link>
        <Link to="/Contact">
          <li>Contact</li>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
