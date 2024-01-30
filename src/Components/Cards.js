
import React from "react";
import { Home } from "./Data";

function Cards({item,handleClick}) {
  

  

  return (
    <div className="pt-10 md:h-[520px] xl:h-[300px] lg:h-[300px] xs:h-[400px] ">
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 md:gap-6 xs:grid-cols-2 xs:gap-3
      xxs:grid-cols-2 xxs:gap-3 justify-center place-items-center grid-cols-2 gap-2">
        {Home.map((item, index) => (
          <div
            key={item.id}
            className="shadow-2xl w-[170px]  xl:h-[250px] lg:h-[250px] md:h-[220px]"
          >
            <div className="md:h-[120px] h-[100px] border bg-blue-100">
              <img
                src={item.img}
                alt=""
                className="md:h-[110px] md:w-[70px] mx-auto mt-2 h-[90px]"
              />
            </div>
            <p className="text-gray-500 justify-center md:mt-3 mt-1 ml-9 md:text-[15px] text-[12px]">
              {item.title}
            </p>
            <h1 className="font-bold ml-9 md:text-[15px] text-[12px] ">
              ₹ {item.price}
            </h1>
            <div className="flex mx-[1rem] gap-5">
              <button
                onClick={() => handleClick(item)}
                className="bg-black px-5 my-1 rounded lg:text-[80%] md:text-[90%] text-[50%] text-white hover:bg-red-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
