import React from 'react'

const Products = () => {
  return (
    <div className="flex justify-center gap-[200px] my-4">
      <div className="rounded-full border border-black w-[90px] h-[85px]">
        <img src="/assets/infinix logo.png" className="w-[60%] mx-5 my-9" />
      </div>
      <div className="rounded-full border border-black w-[90px] h-[85px]">
        <img src="/assets/realme logo.png" className="w-[60%] mx-5 my-9" />
      </div>
      <div className="rounded-full border border-black w-[90px] h-[85px]">
        <img src="/assets/Moto.png" className="w-[80%] mx-2 my-9" />
      </div>
      
      <div className="rounded-full border border-black w-[90px] h-[85px]">
        <img src="/assets/iphonelogo.png" className="w-[40%] mx-6 my-4" />
      </div>
    </div>
  );
}

export default Products