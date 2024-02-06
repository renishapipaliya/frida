import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="my-[60px]">
      <div>
        <h1 className="text-center text-xl font-bold">Login</h1>
      </div>
      <div className="bg-[#050A30] mx-[400px] w-[700px] h-[300px]">
        <div className="mx-6 ">
          <div className=" my-[30px] mx-[17px]">
            <input
              type="email"
              placeholder="Enter your Email"
              className="rounded-[3px] w-[600px] h-[30px] my-9 px-2"
            />

            <input
              type="password"
              placeholder="Enter your Password"
              className="rounded-[3px] w-[600px]  h-[30px] px-2"
            />
          </div>
        </div>
        <div>
          <button className="text-black bg-white w-[100px] font-bold rounded-[3px] mx-[40%] my-7">Login</button>
          <p className='text-center text-white'>Don't have an account?<Link to="/SignUp">Create an account</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login