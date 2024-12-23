import React from 'react'

function ShopBanner() {
  return (
    <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="images/shop/banner/shopbanner.png" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl text-black font-bold mb-6">Shop</h2>
        
    <p className='font bold text-black'>Home / shop</p>
      </div>
    </div>
  )
}

export default ShopBanner
