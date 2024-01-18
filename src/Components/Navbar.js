import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"



function Navbar({size}) {
  
 
  return (
    <div>
      <div className="py-2 sm:py-0 bg-blue-400">
        <div className="flex justify-between items-center w-[100%] h-[100px]">
          <div>
            <img
              src="/assets/mobilelogo.png"
              className="w-[70px] justify-center mx-4 "
            />
          </div>
          <div className="flex items-center ">
            <div className="relative group sm:block mx-10">
              <input
                type="text"
                placeholder="Search"
                className="w-[150px] md:w-[200px] sm:w-[200px] rounded-full border border-gray-400 text-white bg-black"
              />
              <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <Link className="" to="/CartList">
              <FaShoppingCart className="text-2xl text-black drop-shadow-sm cursor-pointer " />
            </Link>
            <span className="ml-3 bg-black text-white rounded-full">
              {size}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
