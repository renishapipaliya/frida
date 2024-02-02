import React from "react";
import { Link } from "react-router-dom";

function Vs() {
  return (
    <>
      <div className="flex  border border-gray-200 mt-20 bg-black justify-between shadow-red-700">
        <div className="border border-r-white   md:hidden hidden lg:flex">
          <iframe
            width="700"
            height="400"
            src="/assets/mobile.mp4"
            frameBorder="0"
            allow=" autoplay loop; muted plays-inline  encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="lg:m-[4rem] md:m-[4rem] m-[2rem]">
          <img src="/assets/samsung note 9 (2).png" />
        </div>
        <div className="text-white md:mt-[9rem] lg:mt-[9rem] mt-[3rem] ">
          <h1 className="font-bold lg:text-xl md:text-2xl ">
            Samsung Galaxy Note 9 (silver)
          </h1>
          <p className="lg:text-xl md:text-2xl  font-bold">
            ₹14,999
            <br />
            vlebzaar
          </p>
          <Link to="/Cheackout">
            
            <button
              className="bg-white text-black font-bold text-xl mt-3 rounded-[10px]
            cursore-pointer lg:h-[30px] lg:w-[150px] md:h-[30px] md:w-[150px]"
            >
              Shop now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Vs;
