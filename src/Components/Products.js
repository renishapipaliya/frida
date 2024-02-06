import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Data } from "../Components/Data";
import { FaShoppingCart } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";

const Products = ({ item, handleClick }) => {
  const [data, setData] = useState(Data);
  const filterResult = (catItem) => {
    const result = Data.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  return (
    <>
      <div
        className="grid xl:grid-cols-5 lg:grid-cols-5 xs:grid-cols-3 xxs:grid-cols-2 xxs:gap-4 xs:gap-5 gap-3 md:grid-cols-5 xl:my-5 lg:my-5 md:my-5 xs:my-5 xxs:my-5  xl:place-items-center md:place-items-center lg:
      xs:place-items-center xxs:place-items-center grid-cols-2 place-items-center my-5"
      >
        <div onClick={() => setData(Data)}>
          <div className="xl:size-24 lg:size-24 md:size-24 size-20 xs:size-20 xxs:size-20 border-2 border-black rounded-full ">
            <h1 className="xl:text-2xl lg:text-3xl md:text-3xl xs:text-2xl  text-2xl xxs:text-2xl xxs:my-5 my-5 xs:my-5 md:my-8 text-center xl:my-7 lg:my-7 font-bold">
              All
            </h1>
          </div>
        </div>
        <div onClick={() => filterResult("Infinix")}>
          <div className="xl:size-24 lg:size-24 md:size-24 size-20 xs:size-20 xxs:size-20 border-2 border-black rounded-full ">
            <img
              src="/assets/infinix logo.png"
              className="text-2xl text-center xl:my-9 xl:mx-1.5 lg:my-9 lg:mx-1.5 md:mx-2 xl:w-[90%] lg:w-[90%] md:w-[87%] md:my-9
              xs:w-[80%] xs:my-8 xs:mx-2 xxs:w-[80%] w-[80%] my-8 mx-2 xxs:my-8 xxs:mx-2"
            />
          </div>
        </div>
        <div onClick={() => filterResult("realme")}>
          <div className="xl:size-24 lg:size-24 xs:size-20 size-20 md:size-24 xxs:size-20 border-2 border-black rounded-full ">
            <img
              src="/assets/realme logo.png"
              className="text-2xl text-center xl:my-9 lg:my-9 lg:mx-1  xl:mx-1 xl:w-[90%] lg:w-[90%] md:w-[89%] md:my-9 md:mx-1.5
              xs:w-[80%] xs:my-7 xs:mx-2 xxs:w-[80%] xxs:my-8 xxs:mx-2 w-[80%] my-8 mx-2 "
            />
          </div>
        </div>
        <div onClick={() => filterResult("moto")}>
          <div className="xl:size-24 lg:size-24 xs:size-20 size-20 md:size-24 xxs:size-20 border-2 border-black rounded-full ">
            <img
              src="/assets/Moto.png"
              className="text-2xl text-center xl:my-9 lg:my-9 xl:mx-0.5 lg:mx-0.5 xl:w-[100%] lg:w-[100%] md:w-[110%] md:my-9 md:mx-0.5
              xs:w-[90%] xs:my-8 xs:mx-1 xxs:w-[90%] xxs:my-7 xxs:mx-1 w-[90%] my-7 mx-1"
            />
          </div>
        </div>
        <div onClick={() => filterResult("iphone")}>
          <div className="xl:size-24 lg:size-24 xs:size-20 size-20 md:size-24 xxs:size-20 border-2 border-black rounded-full ">
            <img
              src="/assets/iphonelogo.png"
              className="text-2xl text-center xl:my-4 xl:mx-6 lg:my-4 lg:mx-6 xl:w-[50%] lg:w-[50%] md:w-[50%] md:my-4 md:mx-5
                xs:w-[40%] xs:my-4 xs:mx-5 xxs:w-[40%] xxs:my-5 xxs:mx-5 w-[40%] my-5 mx-5"
            />
          </div>
        </div>
      </div>

      <div
        className="grid xl:grid-cols-4 lg:grid-cols-4 lg:gap-9 md:grid-cols-4 md:gap-4 xs:grid-cols-2 xs:gap-8 xxs:grid-cols-2   xl:gap-20 xl:mx-[40px] xl:my-[100px]
        lg:my-[100px] xs:my-[100px] xxs:my-[100px] md:my-[100px] my-[70px] 
        grid-cols-2 "
      >
        {data?.map((item) => (
          <div
            key={item.id}
            className=" xl:w-[300px] lg:w-[230px] md:w-[190px] xs:w-[193px] xxs:w-[183px] shadow-xl "
          >
            <Link
              key={item.id}
              to={`/product-details/${item.id}`}
              className=" xl:w-[300px] lg:w-[230px] md:w-[190px] xs:w-[193px] xxs:w-[183px] shadow-xl "
            >
              <div className="xl:mx-[45px]  lg:mx-[60px] md:mx-[60px] xs:mx-[60px] xxs:mx-[40px] mx-[20px] my-2">
                <img
                  src={item.img}
                  alt=""
                  className="xl:w-[200px] xl:h-[300px] lg:w-[110px] lg:h-[150px] md:w-[110px] md:h-[120px] 
                  xs:w-[100px] xs:h-[130px] xxs:w-[120px] xxs:h-[150px] w-[100px] h-[120px] "
                />
              </div>

              <div className="xl:mx-10 xl:w-[250px] my-4">
                <h1
                  className="font-bold xl:text-2xl lg:text-xl lg:mx-3 md:mx-4 md:text-[17px] xs:text-[17px] xs:mx-6
                xxs:text-[15px] xxs:mx-4 text-[15px] mx-3"
                >
                  {item.title}
                </h1>
                <h1
                  className="xl:text-[15px] lg:text-[14px] md:text-[13px] lg:mx-3 md:mx-4 xs:text-[12px] xs:mx-6 
                xxs:text-[12px] xxs:mx-4 text-[12px] mx-3"
                >
                  {item.description}
                </h1>
                <p
                  className="font-bold xl:text-xl lg:text-xl md:text-[17px] md:mx-4 lg:mx-3
                xs:text-[15px] xs:mx-6 xxs:text-[15px] xxs:mx-4 text-[15px] mx-3"
                >
                  ₹{item.price}
                </p>
                <div className="flex gap-6 md:gap-4  my-1">
                  <FaShoppingCart
                    onClick={() => handleClick(item)}
                    className="text-black xl:size-8 size-5 ml-3 md:size-6 xs:size-5 xxs:size-5 xxs:ml-4 xs:ml-5 lg:size-7 lg:my-0.5 lg:ml-2  md:my-0.5 md:ml-3 hover:text-red-800 xl:my-0.5 xl:ml-3"
                  />

                  <button
                    className="text-white bg-black rounded-[3px] xl:w-[130px] lg:w-[100px] md:w-[90px] md:h-[25px] font-bold flex  xl:h-[30px] xl:my-0.5 lg:h-7 lg:my-0.5 
                hover:bg-white hover:text-black hover:border border-black xs:w-[85px] xxs:w-[85px] w-[85px] "
                  >
                    <IoLockClosedSharp
                      className=" xl:size-5 lg:size-5 md:size-4 xl:ml-5 md:ml-1  lg:ml-2 lg:my-0.5  xl:my-1 md:my-1 
                  xs:size-4 xs:ml-1 xxs:size-4 xxs:ml-1 ml-1  "
                    />
                    <mark
                      className="xl:my-1 bg-black hover:bg-white text-white hover:text-black 
                  text-[14px] xs:text-[14px] xxs:text-[14px]"
                    >
                      {" "}
                      Buy Now{" "}
                    </mark>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
