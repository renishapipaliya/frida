import React from 'react'

function Vs() {
  return (
<div className="flex gap-20 border border-gray-200 mt-20">
          <div className='md:hidden lg:block hidden'>
            <iframe
              width="700"
              height="400"
              
              src="/assets/mobile.mp4"
              frameborder="0"
              allow=" autoplay loop; muted plays-inline  encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="border border-black rounded-xl w-[400px] h-[450px] bg-gray-100 lg:ml-20 md:ml-3">
            <div className="ml-12 mt-3">
              <img src="/assets/samsung note 9 (2).png" className=" w-50" />
            </div>
            <h1 className="font-bold text-xl text-center mt-4">
              Samsung Galaxy Note 9 (silver)
            </h1>
            <p className="font-bold text-x text-center">₹14,999</p>
            <div className="ml-28">
          
              <img
                src="/assets/star4.png"
                
              ></img>
            </div>
          </div>
        </div>
      
  )
}

export default Vs