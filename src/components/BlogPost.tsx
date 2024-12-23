import productListImg1 from '../../public/images/productList/Images (1).png'
import productListImg2 from '../../public/images/productList/Images (2).png'
import productListImg3 from '../../public/images/productList/Images (3).png'
import productListImg4 from '../../public/images/productList/Images (4).png'
import Image from 'next/image'
import React from 'react'

function BlogPost() {
  return (
    <>
    <div className="bg-white font-sans p-4">
      <div className="max-w-5xl max-lg:max-w-3xl max-md:max-w-sm mx-auto">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block">LATEST BLOGS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
            <div className="h-64 lg:w-full">
              <Image src={productListImg4} alt="Blog Post 1" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">A Guide to Igniting Your Imagination</h3>
              <span className="text-sm block text-gray-400 mt-2">10 FEB 2023 | BY JOHN DOE</span>
              <p className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
              <a href="javascript:void(0);" className="mt-4 inline-block text-yellow-600 font-semibold text-sm hover:underline">Read More</a>
            </div>
          </div>
          <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
            <div className="h-64 lg:w-full">
              <Image src={productListImg1} alt="Blog Post 2" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Hacks to Supercharge Your Day</h3>
              <span className="text-sm block text-gray-400 mt-2">7 JUN 2023 | BY MARK ADAIR</span>
              <p className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
              <a href="javascript:void(0);" className="mt-4 inline-block text-yellow-600 font-semibold text-sm hover:underline">Read More</a>
            </div>
          </div>
          <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
            <div className="h-64 lg:w-full">
              <Image src={productListImg2} alt="Blog Post 2" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Trends and Predictions</h3>
              <span className="text-sm block text-gray-400 mt-2">5 OCT 2023 | BY SIMON KONECKI</span>
              <p className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
              <a href="javascript:void(0);" className="mt-4 inline-block text-yellow-600 font-semibold text-sm hover:underline">Read More</a>
            </div>
          </div>
          <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300">
            <div className="h-64 lg:w-full">
              <Image src={productListImg3} alt="Blog Post 2" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">Innovators Changing the Game</h3>
              <span className="text-sm block text-gray-400 mt-2">10 DEC 2023 | BY SIMON KONECKI</span>
              <p className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
              <a href="javascript:void(0);" className="mt-4 inline-block text-yellow-600 font-semibold text-sm hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default BlogPost
