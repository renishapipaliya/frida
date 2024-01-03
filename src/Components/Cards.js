import React from 'react'

function Cards() {
  return (
    <div className="pt-10 h-[250px] bg-gray-300">
      <div className="flex justify-center md:gap-40 gap-2">
        <div className="shadow-2xl w-[170px] md:w-[200px] md:h-[200px] h-[160px]">
          <div className="md:h-[120px] h-[100px] border  bg-blue-100">
            <img
              src="/assets/Redmi12.png"
              className="md:h-[110px] md:w-[70px] mx-auto  mt-2  h-[90px]"
            />
          </div>
          <p className="text-gray-500 justify-center md:mt-3 mt-1  ml-9 md:text-[15px] text-[12px]">
            Redmi12
          </p>
          <h1 className="font-bold ml-9 md:text-[15px] text-[12px] ">
            From ₹9,499*
          </h1>
        </div>
        <div className="shadow-2xl md:w-[200px] w-[170px] md:h-[200px] h-[160px]">
          <div className="md:h-[120px] h-[100px] border  bg-blue-100">
            <img
              src="/assets/infinix.jpg"
              className="md:h-[110px] md:w-[100px] h-[90px] mx-auto mt-2"
            />
          </div>
          <p className="text-gray-500 justify-center md:mt-3 mt-1 ml-9 md:text-[15px] text-[12px]">
            infinix Note 30
          </p>
          <h1 className="font-bold  ml-9 md:text-[15px] text-[12px] ">
            Just ₹13,999*
          </h1>
        </div>
        <div className="shadow-2xl md:w-[200px] w-[170px] md:h-[200px] h-[160px]">
          <div className="md:h-[120px] h-[100px] border  bg-blue-100">
            <img
              src="/assets/pocom6.png"
              className="md:h-[110px] md:w-[100px] h-[90px] mx-auto mt-2 "
            />
          </div>
          <p className="text-gray-500 justify-center md:mt-3 mt-1  ml-9 md:text-[15px] text-[12px]">
            Poco M6 5G
          </p>
          <h1 className="font-bold  ml-9 md:text-[15px] text-[12px]">
            From ₹9,499*
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cards