import React from "react";

import { Link } from "react-router-dom";
function Lower() {
  return (
    <>
      <div className="flex justify-center xl:gap-[100px] lg:gap-[100px] md:gap-[100px] gap-[10%] list-none font-bold lg:text-xl md:text-xl bg-black text-white top-24 sticky">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Products">
          <li>Product</li>
        </Link>
        <Link to="/Contact">
          <li>Contact</li>
        </Link>
      </div>
    </>
  );
}

export default Lower;
