import React from 'react'

function About() {
  return (
    <>
      <div className="mt-[60px]">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 xl:mx-[100px] lg:mx-[25px] md:mx-[100px] xs:ml-4 xxs:ml-2 ">
          <div>
            <h1 className="xl:text-4xl lg:text-3xl font-bold lg:my-6 xl:my-6 md:my-4 md:text-4xl xs:text-3xl xxs:text-3xl text-2xl">
              Get to know about
              <span className="bg-white text-blue-900">
                &nbsp;our <br /> company
              </span>
            </h1>
            <p className="xl:text-[17px] xs:text-[13px] text-[11px] xxs:text-[13px] lg:text-[15px] md:text-[17px] text-gray-500 xl:my-[25px] lg:my-[20px] md:my-[10px]">
              Fusce nec ultrices lectus. Duis nec scelerisque risus. Ut id
              tempor turpi,
              <br /> ac dignissim ipsum. Nulla ullamcorper, ipsum vel
              condimentum congue,
              <br /> mi odio vehicula tellus, sit amet malesuada justo sem.
            </p>
            <p className="xl:text-[17px]  text-[11px] xxs:text-[13px] md:text-[17px] lg:text-[15px] xs:text-[13px] text-gray-500">
              Pellentesque in sagittis lacus, vel auctor sem. Quisque eu quam
              eleifend, <br /> ullamcorper dui nec, luctus quam.
            </p>
          </div>
          <div className="lg:size-[500px] size-[250px] md:size-[450px] xs:size-[350px] xxs:size-[300px] md:my-[60px] lg:mx-3 xs:mx-1 xs:my-7 xxs:my-5
         my-2">
            <img src="/assets/about.jpg" />
          </div>
        </div>
      </div>
      <div>
        <div
          className=" text-black  grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 my-[20px] xl:mx-[100px] lg:mx-[30px] md:mx-[120px]
        xs:mx-4 xxs:mx-2 "
        >
          <div>
            <h1 className="xl:text-4xl lg:text-3xl md:text-3xl font-bold xs:text-2xl xxs:text-2xl text-xl">
              Modi esse sapiente tenetur <br />
              <span className="text-blue-900">impedit laudantium </span> <br />
              <p className="text-blue-900">laborum</p>
            </h1>

            <p className="xl:my-[30px] xl:text-[17px] lg:text-[15px] xs:text-[13px] xxs:text-[12px] text-[11px]">
              Pellentesque ultrices at turpis in vestibulum. Aenean pretium elit
              <br />
              congue elementum. Nulla luctus laoreet porta. Maecenas at nisi
              <br />
              tempus,porta metus vitae, faucibus augue.
            </p>
            <p className="xl:text-[17px] xs:text-[14px] xxs:text-[12px] text-[11px]">
              Fusce et venenatis ex. Quisque varius, velit quis dictum sagittis,
              odio velit
              <br /> molestie nunc, ut posuere ante tortor ut neque.
            </p>
          </div>
          <div
            className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 xl:gap-20 xs:gap-4 md:gap-4 md:my-7 md:mx-[60px]
          xs:mx-9 xs:my-5 xxs:gap-4 xxs:mx-[34px] xxs:my-5 gap-4 mx-[30px] my-5"
          >
            <div
              className="bg-gray-300 xl:h-[140px] xl:w-[250px] lg:h-[100px] lg:w-[210px] md:w-[290px] md:h-[100px] bg-opacity-40
            xs:w-[290px] xs:h-[100px] xxs:w-[260px] xxs:h-[100px] h-[100px] w-[240px]"
            >
              <div
                className="absolute xl:mx-[90px] xl:my-[30px] lg:mx-[70px] lg:my-[15px] md:mx-[120px] md:my-[14px]
              xs:mx-[120px] xs:my-[20px] xxs:mx-[100px] xxs:my-[20px] mx-[100px] my-[20px]"
              >
                <span className="xl:text-4xl lg:text-3xl md:text-3xl xs:text-2xl xxs:text-xl text-xl">
                  1245
                </span>
                <h1 className="xl:text-xl lg:text-xl md:text-xl xs:text-[15px] xxs:text-[13px] text-[12px]">
                  Products
                </h1>
              </div>
            </div>
            <div
              className="bg-gray-300 xl:h-[140px] xl:w-[250px] lg:h-[100px] lg:w-[210px] md:w-[290px] md:h-[100px] bg-opacity-30
         xs:w-[290px] xs:h-[100px] xxs:w-[260px] xxs:h-[100px] h-[100px] w-[240px]"
            >
              <div
                className="absolute xl:mx-[90px] xl:my-[30px] lg:mx-[60px] lg:my-[15px] md:mx-[120px] md:my-[14px]
               xs:mx-[120px] xs:my-[20px]  xxs:mx-[100px] xxs:my-[20px] mx-[100px] my-[20px]"
              >
                <span className="xl:text-4xl lg:text-3xl md:text-3xl xs:text-2xl xxs:text-xl text-xl">
                  1280
                </span>
                <h1 className="xl:text-xl lg:text-xl md:text-xl xs:text-[15px] xxs:text-[13px] text-[12px]">
                  Happy clients
                </h1>
              </div>
            </div>
            <div
              className="bg-gray-300 xl:h-[140px] xl:w-[250px]  lg:h-[100px] lg:w-[210px]  md:w-[290px] md:h-[100px] 
            xs:w-[290px] xs:h-[100px] xxs:w-[260px] xxs:h-[100px] bg-opacity-30 h-[100px] w-[240px]"
            >
              <div
                className="absolute xl:mx-[90px] xl:my-[30px] lg:mx-[70px] lg:my-[15px] md:mx-[120px] md:my-[14px]
               xs:mx-[120px] xs:my-[20px]  xxs:mx-[100px] xxs:my-[20px] mx-[100px] my-[20px]"
              >
                <span className="xl:text-4xl lg:text-3xl md:text-3xl xs:text-2xl xxs:text-xl text-xl">
                  3
                </span>
                <h1 className="xl:text-xl lg:text-xl md:text-xl xs:text-[15px] xxs:text-[13px] text-[12px]">
                  Cities
                </h1>
              </div>
            </div>
            <div
              className="bg-gray-300 xl:h-[140px] xl:w-[250px]  lg:h-[100px] lg:w-[210px]  md:w-[290px] md:h-[100px]
            xs:w-[290px] xs:h-[100px] bg-opacity-30 xxs:w-[260px] xxs:h-[100px] h-[100px] w-[240px]"
            >
              <div
                className="absolute xl:mx-[90px] xl:my-[30px] lg:mx-[70px] lg:my-[15px] md:mx-[120px] md:my-[14px]
               xs:mx-[120px] xs:my-[20px]  xxs:mx-[100px] xxs:my-[20px] mx-[100px] my-[20px] text-xl"
              >
                <span className="xl:text-4xl lg:text-3xl md:text-3xl xs:text-2xl xxs:text-xl">
                  5
                </span>
                <h1 className="xl:text-xl lg:text-xl md:text-xl xs:text-[15px] xxs:text-[13px] text-[12px]">
                  Stores
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About