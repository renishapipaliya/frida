import React from "react";

import { Link } from "react-router-dom";
function Lower() {
  return (
    <>
      <div className="flex justify-center gap-[100px] list-none font-bold text-xl bg-black text-white">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link>
          <li>About</li>
        </Link>
        <Link to="/Products">
          <li>Product</li>
        </Link>
        <Link>
          <li>Contact</li>
        </Link>
       
      </div>
     
    </>
  );
}

export default Lower;
