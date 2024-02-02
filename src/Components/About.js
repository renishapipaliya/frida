import React from 'react'

function About() {
  return (
    <>
      <div className="my-[100px]">
        <div className="flex justify-center gap-[100px]">
          <div>
            <h1 className="text-4xl font-bold">
              Get to know about
              <span className="bg-white text-blue-900">
                &nbsp;our <br /> company
              </span>
            </h1>
            <p className="text-[17px] text-gray-500 my-[25px]">
              Fusce nec ultrices lectus. Duis nec scelerisque risus. Ut id
              tempor turpi,
              <br /> ac dignissim ipsum. Nulla ullamcorper, ipsum vel
              condimentum congue,
              <br /> mi odio vehicula tellus, sit amet malesuada justo sem.
            </p>
            <p className="text-[17px] text-gray-500">
              Pellentesque in sagittis lacus, vel auctor sem. Quisque eu quam
              eleifend, <br /> ullamcorper dui nec, luctus quam.
            </p>
          </div>
          <div>
            <img src="/assets/about.jpg" />
          </div>
        </div>
      </div>
      <div className="flex">
        {/* <div>
          <img
            src="/assets/bg.jpg"
            className="cover w-[95rem] h-[700px] opacity-8 bg-fixed"
          />
        </div> */}
        <div className=" text-black flex gap-[230px] my-[150px] mx-[100px] ">
          <div>
            <h1 className="text-4xl font-bold">
              Modi esse sapiente tenetur <br />
              <span className="text-blue-900">impedit laudantium </span> <br />
              <p className="text-blue-900">laborum</p>
            </h1>

            <p className="my-[30px] text-[17px]">
              Pellentesque ultrices at turpis in vestibulum. Aenean pretium elit
              <br />
              congue elementum. Nulla luctus laoreet porta. Maecenas at nisi
              <br />
              tempus,porta metus vitae, faucibus augue.
            </p>
            <p className="text-[17px]">
              Fusce et venenatis ex. Quisque varius, velit quis dictum sagittis,
              odio velit
              <br /> molestie nunc, ut posuere ante tortor ut neque.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div className="bg-gray-300 h-[140px] w-[250px] bg-opacity-40">
              <div className="absolute mx-[90px] my-[30px]">
                <span className="text-4xl">1245</span>
                <h1 className="text-xl">Products</h1>
              </div>
            </div>
            <div className="bg-gray-300 h-[140px] w-[250px] bg-opacity-30">
              <div className="absolute mx-[90px] my-[30px]">
                <span className="text-4xl">1280</span>
                <h1 className="text-xl">Happy clients</h1>
              </div>
            </div>
            <div className="bg-gray-300 h-[140px] w-[250px] bg-opacity-30">
              <div className="absolute mx-[90px] my-[30px]">
                <span className="text-4xl">3</span>
                <h1 className="text-xl">Cities</h1>
              </div>
            </div>
            <div className="bg-gray-300 h-[140px] w-[250px] bg-opacity-30">
              <div className="absolute mx-[90px] my-[30px]">
                <span className="text-4xl">5</span>
                <h1 className="text-xl">Stores</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About