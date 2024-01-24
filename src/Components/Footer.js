import React from 'react'

function Footer() {
  return (
    <div className="mt-5  h-[600px] md:h-[550px] lg:h-[300px] lg:px-28 lg:py-4 md:px-10 px-4">
      <div className="  text-black grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3">
        <div className="font-bold text-[12px] md:text-[20px] lg:text-[15px]">
          <h1 className="mb-3 mt-3 text-xl">ABOUT</h1>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
          <p>Paress</p>
          <p>Flipkart Wholesale</p>
          <p>Cleartrip</p>
          <p>Corporate Information</p>
        </div>
        <div className="font-bold text-[12px] md:text-[20px] lg:text-[15px]">
          <h1 className="mb-3 mt-3 text-xl">HELP</h1>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
          <p>Report Infringement</p>
        </div>
        <div className="font-bold text-[12px] md:text-[20px] lg:text-[15px]">
          <h1 className="mb-3 mt-3 text-xl">Consumer Policy</h1>
          <p>Cancellation & Returns</p>
          <p>Terms of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>Grievance Redressal</p>
          <p>EPR Compliance</p>
        </div>
        <div className="font-bold md:my-4 text-[12px] md:text-[20px] lg:text-[15px]">
          <h1 className="mb-3 mt-3 text-xl">SOCIAL</h1>
          <p>FAcebook</p>
          <p>Twitter</p>
          <p>You Tube</p>
        </div>
        <div className="font-bold md:my-4 text-[12px] md:text-[20px] lg:text-[15px]">
          <h1 className="mb-3 mt-3 text-xl">Mail Us:</h1>
          <p>Flipkart Internet Private Limited,</p>
          <p>
            Buildings Alyssa,Begonia&
            <br />
            Clove Embassy Tech Village
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer