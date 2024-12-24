'use client'
import Image from 'next/image';
import React from 'react';
import img1 from '../../public/images/productView/image1.png'
import img2 from '../../public/images/productView/image2.png'
import img3 from '../../public/images/productView/image3.png'

function ProductView() {
  const data = [
    { name: "Dinning" , "src" :img1 },
    { name: "Living" , "src" :img2 },
    { name: "Bedroom" , "src" :img3 },
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
              <Image
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
