import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";



function Navbar() {
  return (
    <div>
      <div className="py-2 sm:py-0 bg-blue-700">
        <div className="flex justify-between items-center">
          <div>
            <img
              src="/assets/flip.png"
              className="w-24 uppercase
          "
            />
          </div>
          < div className="flex justify-between items-center gap-4">
            <div
              className="relative group sm:block"
            >
              <input
                type="text"
                placeholder="Search"
                className="w-[150px] md:w-[200px] sm:w-[200px] rounded-full border border-gray-400"
              />
              <IoMdSearch className="text-gray-200  absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
        
          <button
            onClick={() => alert("Ordering not available yet")}
            className="text-white bg-blue-600 py-1 px-4 rounded-full flex
          items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaShoppingCart
            className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Navbar;
