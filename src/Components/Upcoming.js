import React from "react";

function Upcoming() {
  return (
    <>
      <div className="border border-gray-300 h-[70px]">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-center md:text-center">
            Upcoming Launches
          </h1>
          <p className="text-gray-900 text-[15px] md:text-[20px] lg:text-center md:text-center">
            Introducing New Smartphone Technology
          </p>
        </div>
      </div>
      <div className="shadow-2xl">
        <div
          className="flex justify-between rounded-2xl border border-black  lg:m-4 m-1
       gap-3  "
        >
          <div className=" bg-gray-400 rounded-l-2xl">
            <img
              src="/assets/up1.png"
              className="lg:h-[200px] md:h-60 h-[100px] md:w-[400px] w-[150px] lg:w-[400px]  "
            />
          </div>
          <div className="lg:mr-60 lg:mt-12 md:mt-10">
            <h1 className="font-bold lg:text-5xl md:text-4xl text-x">
              X100 Series
            </h1>
            <p className="lg:text-[25px] md:text-[25px] text-[15px]">
              ZEISS Multifocal Portrait
            </p>
            <h1 className="font-bold lg:text-3xl md:text-2xl text-[14px] text-blue-900">
              Launching Tommorrow,12PM
            </h1>
            <p className="lg:text-[20px] md:text-[20px] text-[13px]">
              India' s 1st Media Tek Dimensity
            </p>
          </div>
        </div>
      </div>
      <div className="shadow-2xl">
        <div
          className="flex justify-between rounded-2xl border border-black  lg:m-4 m-1
       gap-3  "
        >
          <div className=" bg-gray-400 rounded-l-2xl">
            <img
              src="/assets/moto34.png"
              className="lg:h-[200px] md:h-60 h-[100px] md:w-[400px] w-[150px] lg:w-[400px]  "
            />
          </div>
          <div className="lg:mr-60 lg:mt-12 md:mt-10">
            <h1 className="font-bold lg:text-5xl md:text-4xl text-x">
              moto g34 5G
            </h1>
            <p className="lg:text-[25px] md:text-[25px] text-[15px]">
              fastest 5G with SD 695
            </p>
            <h1 className="font-bold lg:text-3xl md:text-2xl text-[14px] text-blue-900">
              Launching on January, 12PM
            </h1>
            <p className="lg:text-[20px] md:text-[20px] text-[13px]">
              Premium Vegan Leather Design*
            </p>
          </div>
        </div>
      </div>
      <div className="shadow-2xl">
        <div
          className="flex justify-between rounded-2xl border border-black  lg:m-4 m-1
       gap-3  "
        >
          <div className=" bg-gray-400 rounded-l-2xl">
            <img
              src="/assets/realme-C.png"
              className="lg:h-[200px] md:h-60 h-[100px] md:w-[400px] w-[150px] lg:w-[400px]  "
            />
          </div>
          <div className="lg:mr-60 lg:mt-12 md:mt-10">
            <h1 className="font-bold lg:text-5xl md:text-4xl text-x">
              realme C30s
            </h1>
            <p className="lg:text-[25px] md:text-[25px] text-[15px]">
              fastest 5G
            </p>
            <h1 className="font-bold lg:text-3xl md:text-2xl text-[14px] text-blue-900">
              Launching on Febuary,12PM
            </h1>
            <p className="lg:text-[20px] md:text-[20px] text-[13px]">
              India' s 1st Media Tek Dimensity
            </p>
          </div>
        </div>
      </div>
      
        
    </>
  );
}

export default Upcoming;
