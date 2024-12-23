import React from 'react';

function ProductView() {
  const data = [
    { name: "Dinning" , "src" :"images/productView/image1.png" },
    { name: "Living" , "src" :"images/productView/image2.png" },
    { name: "Bedroom" , "src" :"images/productView/image3.png" },
  ];

  return (
    <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.map((item) => (
          <div
            key={item.name}
            className="bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all"
          >
            <div className="w-full">
              <img
                src={item.src}
                alt={item.name}
                className="w-full object-cover object-top aspect-[230/307]"
              />
            </div>

            <div className="p-4 flex-1 flex">
              <div className="flex-1">
                <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">
                  {item.name}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductView;
