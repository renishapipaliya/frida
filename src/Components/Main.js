import React from 'react'

function Main() {
  return (
    <div className="md:h-[410px] mt-5">
      <div className=" bg-gray-300 flex justify-center md:gap-40 gap-20 ">
        
          <img src="/assets/iphone15.png" className='md:h-[400px] h-[200px] mt-3'/>
        
        <div className='md:mt-20 mt-7'>
          <div className="bg-blue-600 md:w-[400px] w-[190px] rounded-[5px]">
            <h1 className="md:text-2xl text-[14px] text-white text-center">
              Biggest New Year Deal <br />
              Lowest Price ever!
            </h1>
          </div>
          <div className='mt-3'>
            <h1 className='font-bold md:text-xl'>Iphone 15</h1>
            <h1 className='text-blue-600 font-bold'>From ₹66,999* or Pay ₹11,667/m </h1>
            <p>Next-generation portraits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main