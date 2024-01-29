import React, { useState } from "react";
import { infinix, all, realme, moto, apple } from "../Components/Data";

const Products = ({ item, handleClick }) => {
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
      <div className="lg:flex grid grid-cols-2 justify-center lg:gap-[200px] my-4">
        <div onClick={() => handlePickClick(1)}>
          <div className="rounded-full border border-black w-[90px] h-[85px] cursor-pointer">
            <h1 className="font-bold text-[30px] mx-5 my-5 cursor-pointer">
              ALL
            </h1>
          </div>
        </div>
        <div onClick={() => handlePickClick(2)}>
          <div className="rounded-full border border-black w-[90px] h-[85px] cursor-pointer">
            <img
              src="/assets/infinix logo.png"
              className="w-[60%] mx-5 my-9 cursor-pointer"
            />
          </div>
        </div>

        <div onClick={() => handlePickClick(3)}>
          <div className="rounded-full border border-black w-[90px] h-[85px] cursor-pointer">
            <img
              src="/assets/realme logo.png"
              className="w-[60%] mx-5 my-9 cursor-pointer"
            />
          </div>
        </div>

        <div onClick={() => handlePickClick(4)}>
          <div className="rounded-full border border-black w-[90px] h-[85px] cursor-pointer">
            <img
              src="/assets/Moto.png"
              className="w-[80%] mx-2 my-9 cursor-pointer"
            />
          </div>
        </div>

        <div onClick={() => handlePickClick(5)}>
          <div className="rounded-full border border-black w-[90px] h-[85px] cursor-pointer">
            <img
              src="/assets/iphonelogo.png"
              className="w-[40%] mx-6 my-4 cursor-pointer"
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
                  className="bg-black text-white font-semibold rounded-[3px] w-[100px]"
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
                  className="bg-black text-white font-semibold rounded-[3px] w-[100px]"
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
                  className="bg-black text-white font-semibold rounded-[3px] w-[100px]"
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
                  className="bg-black text-white font-semibold rounded-[3px] w-[100px]"
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
                  className="bg-black text-white font-semibold rounded-[3px] w-[100px]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!openPick1 && !openPick2 && !openPick3 && !openPick4 && !openPick5 && (
        <div className="grid lg:grid-cols-4  justify-center gap-20 mx-[40px] my-[100px] ">
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
                  className="bg-black text-white font-semibold rounded-[3px] w-[100px]"
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
