import React from 'react'

function Feedback() {
  return (
    <div>
      <div className="m-[40px] bg-blue-400 lg:w-[500px] md:w-[500px] w-[350px] h-[200px] 
      lg:ml-[500px] md:ml-[150px] ml-[15px] rounded-[25px] md:h-[250px]">
        
          <h1 className='text-center text-yellow-300 font-bold lg:text-[30px] md:text-[30px] underline'>Quick & Fun Survey</h1>
          <p className='text-center text-black lg:text-[20px] md:text-[24px] text-[17px] mt-2'>
            Help us understand color perferences for your
            <br />
            smartphone
          </p>
       
       
          <img src="/assets/emoji.png"  className='h=[10px] lg:ml-[150px] md:ml-[150px] ml-[75px] mt-2'/>
          <button className='border border-black bg-white rounded-[5px] text-xl  font-bold
          lg:ml-[200px] md:ml-[200px] ml-[140px] mt-2'>Tap Here..</button>
        
      </div>
    </div>
  );
}

export default Feedback