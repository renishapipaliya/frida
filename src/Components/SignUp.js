import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="my-[60px]">
      <div>
        <h1 className="text-center text-xl font-bold">SignUp</h1>
      </div>
      <div className="bg-[#050A30] mx-[400px] w-[700px] h-[400px]">
        <div className="mx-6 ">
          <div className=" my-[30px] mx-[17px]">
            <input
              type="username"
              placeholder="Username"
              className="rounded-[3px] w-[600px] h-[30px] mt-9 px-2"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              className="rounded-[3px] w-[600px]  mt-9  h-[30px] px-2"
            />

            <input
              type="password"
              placeholder="Enter your Password"
              className="rounded-[3px] w-[600px] mt-9 h-[30px] px-2"
            />
          </div>
        </div>
        <div>
          <button className=" font-bold w-[150px] h-[30px] rounded-[3px] mx-[40%] bg-white text-black my-7">Create an account</button>
          <p className="text-center text-white">
            Don't have an account?<Link to="/Login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp