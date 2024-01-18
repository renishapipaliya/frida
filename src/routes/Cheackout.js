import React, { useEffect, useState } from "react";



function Cheackout({ cart, setCart }) {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.description));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  const list = [
    {
      id: 1,
      title: "Country/Region",
    },
    {
      id: 2,
      title: "Street adrress",
    },
    {
      id: 3,
      title: "State",
    },
    {
      id: 4,
      title: "PIN Code",
    },
    {
      id: 5,
      title: "Phone",
    },
    {
      id: 6,
      title: "Email Addres",
    },
  ];
   


  return (
    <div className="mt-[151px] px-20">
      <div className="border border-black bg-white">
        <h1 className="ml-5 p-4 font-bold text-5xl">Checkout</h1>
        <hr className="border border-black border-b-2 m-2" />
        <div>
          <h2 className="px-3 py-6 text-2xl text-slate-800 font-bold">
            Billing Details
          </h2>
          <hr className="border border-slate-400 border-b-2 m-2" />
        </div>
        <div className="flex">
          <form>
            <div div className=" m-6 p-8">
              <div className="text-xl flex gap-20 ">
                <div>
                  <label for="first name"> First Name </label>
                  <div>
                    <input
                      type="text"
                      name="First Name"
                      id="fname"
                      className="p-2  border border-slate-900"
                    />
                  </div>
                </div>
                <div className="">
                  <label for="last name"> Last Name </label>
                  <div>
                    <input
                      type="text"
                      name="last Name"
                      className="p-2 border border-slate-900"
                    />
                  </div>
                </div>
              </div>
              <div>
                {list.map((data, id) => (
                  <div className="text-xl mt-5" key={id}>
                    <label for="Country / Region ">{data.title}</label>
                    <div>
                      <div>
                        <input
                          type="text"
                          className="p-2 border border-slate-900 w-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
          <div>
            {cart?.map((item, index) => (
              <div key={index}>
                <h1>{item.description}</h1>
              </div>
            ))}
            <div>
              <h1>{price}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cheackout;
