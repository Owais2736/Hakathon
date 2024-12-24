
import Image from 'next/image';
import React from 'react'
import img1 from '../../public/images/productList/Images.png'

function ProductList() {
  const data = [
    { name: "Syltherine", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, labore?", "src": img1 },
    { name: "Respira", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, labore?", "src": img1 },
    { name: "Bedroom", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, labore?", "src": img1 },
    { name: "Living", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, labore?", "src": img1 },
    { name: "Pooty", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, labore?", "src": img1 },
    { name: "Buffy", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, labore?", "src": img1},
    { name: "Commercial", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, labore?", "src": img1 },
    { name: "Muggo", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, labore?", "src": img1 },


  ];

  return (
    <>


      <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">


          {data.map((item) => {

            return (<div key={item.name} className="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-all">
              <div className="w-full">
                <Image src={item.src} alt="Product 1"
                  className="w-full object-cover object-top aspect-[230/307]" />
              </div>

              <div className="p-2 flex-1 flex flex-col">
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">{item.name}</h5>
                  <p className="mt-1 text-gray-500 truncate">{item.description}</p>
                  <div className="flex flex-wrap justify-between gap-2 mt-2">
                    <div className="flex gap-2">
                      <h6 className="text-sm sm:text-base font-bold text-gray-800">$10</h6>
                      <h6 className="text-sm sm:text-base text-gray-500"><span className='line-through'>$15</span></h6>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <svg className="w-[14px] h-[14px] fill-yellow-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg className="w-[14px] h-[14px] fill-yellow-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg className="w-[14px] h-[14px] fill-yellow-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div
                    className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"></path>
                    </svg>
                  </div>
                  <button type="button" className="text-sm px-2 min-h-[36px] w-full bg-yellow-600 hover:bg-white  hover:border-yellow-600 hover:text-yellow-600 text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
                </div>
              </div>
            </div>



            )
          })}



        </div>
      </div>


    </>
  )
}

export default ProductList
