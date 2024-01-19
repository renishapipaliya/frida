import React from "react";

function Cards({item,handleClick}) {
  const ImageList = [
    {
      id: 1,
      img: "/assets/Redmi12.png",
      title: "Redmi12",
      description: 9499,
      amount : 1
    },
    {
      id: 2,
      img: "/assets/infinix.jpg",
      title: "infinix Note 30",
      description: 13999,
      amount : 1
    },
    {
      id: 3,
      img: "/assets/pocom6.png",
      title: "Poco M6 5G",
      description: 9499,
      amount : 1
    },
  ];

  const [id, title, description, img] = ImageList;

  return (
    <div className="pt-10 h-[300px] bg-gray-300">
      <div className="flex justify-center md:gap-40 gap-2">
        {ImageList.map((item, index) => (
          <div
            key={item.id}
            className="shadow-2xl w-[170px] md:w-[200px] md:h-[200px] lg:h-[250px]"
          >
            <div className="md:h-[120px] h-[100px] border bg-blue-100">
              <img
                src={item.img}
                alt=""
                className="md:h-[110px] md:w-[70px] mx-auto mt-2 h-[90px]"
              />
            </div>
            <p className="text-gray-500 justify-center md:mt-3 mt-1 ml-9 md:text-[15px] text-[12px]">
              {item.title}
            </p>
            <h1 className="font-bold ml-9 md:text-[15px] text-[12px] ">
              ₹ {item.description}
            </h1>
            <div className="flex mx-[1rem] gap-5">
              <button
                onClick={() => handleClick(item)}
                className="bg-black px-5 my-1 rounded lg:text-[80%] md:text-[90%] text-[50%] text-white hover:bg-red-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
