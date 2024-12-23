'use client'
import { BannerImg } from '@/imgimport/images';
import Image from 'next/image';
import React from 'react';

function Banner() {
  return (
    <>
      <div className="relative font-sans h-auto aspect-[16/9] sm:aspect-[21/9] before:z-10">
        <Image
          src={BannerImg}
          alt="Banner Image"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-x-0 top-1/3 transform -translate-y-1/2  bg-white max-w-lg ml-[51vw] p-6 text-black rounded-lg shadow-lg sm:top-1/2">
          <p className="font-semibold text-center">New Arrival</p>
          <h2 className="text-2xl sm:text-4xl mt-1 text-yellow-600 font-bold mb-6 text-center">
            Discover Our <br /> New Collections
          </h2>
          <p className="text-base sm:text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laborum
            ducimus obcaecati assumenda rerum quod.
          </p>
          <div className="flex justify-center mt-5">
            <button
              type="button"
              className="bg-yellow-600 text-white py-3 px-6 border rounded-lg hover:bg-white hover:border-black hover:text-black transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

