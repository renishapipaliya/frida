import React, { useState } from "react";
import { infinix, all, realme, moto, apple } from "../Components/Data";

const Products = ({ item, handleClick }) => {
  console.log(item);
  const [openPick1, setOpenPick1] = useState(false);
  const [openPick2, setOpenPick2] = useState(false);
  const [openPick3, setOpenPick3] = useState(false);
  const [openPick4, setOpenPick4] = useState(false);
  const [openPick5, setOpenPick5] = useState(false);

  const handlePickClick = (pickNumber) => {
    // Close all picks
    setOpenPick1(false);

    setOpenPick2(false);
    setOpenPick3(false);
    setOpenPick4(false);
    setOpenPick5(false);

    // Open the clicked pick
    switch (pickNumber) {
      case 1:
        setOpenPick1(true);
        break;
      case 2:
        setOpenPick2(true);
        break;
      case 3:
        setOpenPick3(true);
        break;
      case 4:
        setOpenPick4(true);
        break;
      case 5:
        setOpenPick5(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        className="grid xl:grid-cols-5 lg:grid-cols-5 xs:grid-cols-3 xxs:grid-cols-2 xxs:gap-4 xs:gap-5 gap-3 md:grid-cols-5 xl:my-5 lg:my-5 md:my-5 xs:my-5 xxs:my-5  xl:place-items-center md:place-items-center lg:
      xs:place-items-center xxs:place-items-center grid-cols-2 place-items-center my-5"
      >
        <div onClick={() => handlePickClick(1)}>
          <div className="xl:size-24 lg:size-24 md:size-24 size-20 xs:size-20 xxs:size-20 border-2 border-black rounded-full ">
            <h1 className="xl:text-2xl lg:text-3xl md:text-3xl xs:text-2xl  text-2xl xxs:text-2xl xxs:my-5 my-5 xs:my-5 md:my-8 text-center xl:my-7 lg:my-7 font-bold">
              All
            </h1>
          </div>
        </div>
        <div onClick={() => handlePickClick(2)}>
          <div className="xl:size-24 lg:size-24 md:size-24 size-20 xs:size-20 xxs:size-20 border-2 border-black rounded-full ">
            <img
              src="/assets/infinix logo.png"
              className="text-2xl text-center xl:my-9 xl:mx-1.5 lg:my-9 lg:mx-1.5 md:mx-2 xl:w-[90%] lg:w-[90%] md:w-[87%] md:my-9
              xs:w-[80%] xs:my-8 xs:mx-2 xxs:w-[80%] w-[80%] my-8 mx-2 xxs:my-8 xxs:mx-2"
            />
          </div>
        </div>
        <div onClick={() => handlePickClick(3)}>
          <div className="xl:size-24 lg:size-24 xs:size-20 size-20 md:size-24 xxs:size-20 border-2 border-black rounded-full ">
            <img
              src="/assets/realme logo.png"
              className="text-2xl text-center xl:my-9 lg:my-9 lg:mx-1  xl:mx-1 xl:w-[90%] lg:w-[90%] md:w-[89%] md:my-9 md:mx-1.5
              xs:w-[80%] xs:my-7 xs:mx-2 xxs:w-[80%] xxs:my-8 xxs:mx-2 w-[80%] my-8 mx-2 "
            />
          </div>
        </div>
        <div onClick={() => handlePickClick(4)}>
          <div className="xl:size-24 lg:size-24 xs:size-20 size-20 md:size-24 xxs:size-20 border-2 border-black rounded-full ">
            <img
              src="/assets/Moto.png"
              className="text-2xl text-center xl:my-9 lg:my-9 xl:mx-0.5 lg:mx-0.5 xl:w-[100%] lg:w-[100%] md:w-[110%] md:my-9 md:mx-0.5
              xs:w-[90%] xs:my-8 xs:mx-1 xxs:w-[90%] xxs:my-7 xxs:mx-1 w-[90%] my-7 mx-1"
            />
          </div>
        </div>
        <div onClick={() => handlePickClick(5)}>
          <div className="xl:size-24 lg:size-24 xs:size-20 size-20 md:size-24 xxs:size-20 border-2 border-black rounded-full ">
            <img
              src="/assets/iphonelogo.png"
              className="text-2xl text-center xl:my-4 xl:mx-6 lg:my-4 lg:mx-6 xl:w-[50%] lg:w-[50%] md:w-[50%] md:my-4 md:mx-5
                xs:w-[40%] xs:my-4 xs:mx-5 xxs:w-[40%] xxs:my-5 xxs:mx-5 w-[40%] my-5 mx-5"
            />
          </div>
        </div>
      </div>

      {openPick1 && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-20 mx-[40px] my-[100px] ">
          {all?.map((item) => (
            <div key={item.id} className=" shadow-xl w-[300px]">
              <div className="mx-[45px]">
                <img src={item.img} alt="" className="w-[200px] h-[300px]" />
              </div>
              <hr className="bg-black h-[2px] w-auto my-4"></hr>
              <div className="mx-10 w-[250px] my-4">
                <h1 className="font-bold text-2xl">{item.title}</h1>
                <h1 className="text-[15px]">{item.description}</h1>
                <p className="font-bold text-xl">₹{item.price}</p>
                <button
                  onClick={() => handleClick(item)}
                  className="bg-black text-white font-semibold rounded-[3px] w-[100px] hover:bg-red-600 hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {openPick2 && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-[2%] my-[100px] ">
          {infinix?.map((item) => (
            <div key={item.id} className=" shadow-xl w-[300px]">
              <div className="mx-[45px]">
                <img src={item.img} alt="" className="w-[200px] h-[300px]" />
              </div>
              <hr className="bg-black h-[2px] w-auto my-4"></hr>
              <div className="mx-10 w-[250px] my-4">
                <h1 className="font-bold text-2xl">{item.title}</h1>
                <h1 className="text-[15px]">{item.description}</h1>
                <p className="font-bold text-xl">₹{item.price}</p>
                <button
                  onClick={() => handleClick(item)}
                  className="bg-black text-white font-semibold rounded-[3px] w-[100px] hover:bg-red-600 hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {openPick3 && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-[2%] my-[100px] ">
          {realme?.map((item) => (
            <div key={item.id} className=" shadow-xl w-[300px]">
              <div className="mx-[45px]">
                <img src={item.img} alt="" className="w-[200px] h-[300px]" />
              </div>
              <hr className="bg-black h-[2px] w-auto my-4"></hr>
              <div className="mx-10 w-[250px] my-4">
                <h1 className="font-bold text-2xl">{item.title}</h1>
                <h1 className="text-[15px]">{item.description}</h1>
                <p className="font-bold text-xl">₹{item.price}</p>
                <button
                  onClick={() => handleClick(item)}
                  className="bg-black text-white font-semibold rounded-[3px] w-[100px] hover:bg-red-600 hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {openPick4 && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-[2%] my-[100px] ">
          {moto?.map((item) => (
            <div key={item.id} className=" shadow-xl w-[300px]">
              <div className="mx-[45px]">
                <img src={item.img} alt="" className="w-[200px] h-[300px]" />
              </div>
              <hr className="bg-black h-[2px] w-auto my-4"></hr>
              <div className="mx-10 w-[250px] my-4">
                <h1 className="font-bold text-2xl">{item.title}</h1>
                <h1 className="text-[15px]">{item.description}</h1>
                <p className="font-bold text-xl">₹{item.price}</p>
                <button
                  onClick={() => handleClick(item)}
                  className="bg-black text-white font-semibold rounded-[3px] w-[100px] hover:bg-red-600 hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {openPick5 && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-[2%] my-[100px] ">
          {apple?.map((item) => (
            <div key={item.id} className=" shadow-xl w-[300px]">
              <div className="mx-[45px]">
                <img src={item.img} alt="" className="w-[200px] h-[300px]" />
              </div>
              <hr className="bg-black h-[2px] w-auto my-4"></hr>
              <div className="mx-10 w-[250px] my-4">
                <h1 className="font-bold text-2xl">{item.title}</h1>
                <h1 className="text-[15px]">{item.description}</h1>
                <p className="font-bold text-xl">₹{item.price}</p>
                <button
                  onClick={() => handleClick(item)}
                  className="bg-black text-white font-semibold rounded-[3px] w-[100px] hover:bg-red-600 hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!openPick1 && !openPick2 && !openPick3 && !openPick4 && !openPick5 && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-2 md:grid-cols-2 lg:  justify-center xl:gap-20 xl:mx-[40px] my-[100px] ">
          {all?.map((item) => (
            <div key={item.id} className=" shadow-xl w-[300px]">
              <div className="mx-[45px]">
                <img src={item.img} alt="" className="xl:w-[200px] xl:h-[300px] lg:h-[150px] lg:w-[100px]" />
              </div>
              <hr className="bg-black h-[2px] xl:w-auto lg:w-[100px] my-4 "></hr>
              <div className="mx-10 w-[250px] my-4">
                <h1 className="font-bold text-2xl">{item.title}</h1>
                <h1 className="text-[15px]">{item.description}</h1>
                <p className="font-bold text-xl">₹{item.price}</p>
                <button
                  onClick={() => handleClick(item)}
                  className="bg-black text-white font-semibold rounded-[3px] w-[100px] hover:bg-red-600 hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
