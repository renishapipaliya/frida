import React from "react";
import Slider from "react-slick";
const ImageList = [
  {
    id: 1,
    img: "/assets/Realme-C.png",
    title: "realme C30s",
    description: "Just ₹6,299*",
    titlee: "1st Fingerprint Sensor Under 8K",
  },
  {
    id: 2,
    img: "/assets/Realme-C.png",
    title: "realme C30s",
    description: "Just ₹6,299*",
    titlee: "1st Fingerprint Sensor Under 8K",
  },
  {
    id: 3,
    img: "/assets/Realme-C.png",
    title: "realme C30s",
    description: "Just ₹6,299*",
    titlee: "1st Fingerprint Sensor Under 8K",
  },
];

function Hero() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <>
      <div
        className="relative overflow-hidden sm:min-h-[300px]   flex justify-center
    items-center  shadow-2xl
    "
      >
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div
                    className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
            order-2 sm:order-1 relative z-10"
                  >
                    <h1 className="text-3xl sm:text-6xl lg:text-5xl ">
                      {data.title}
                    </h1>
                    <p className="text-4xl font-bold">{data.description} </p>
                    <h1>{data.titlee}</h1>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div className="relative z-10">
                      <img
                        src={data.img}
                        alt=""
                        className="lg:h-[300px] lg:w-[300px] sm:scale-125
    object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Hero;
