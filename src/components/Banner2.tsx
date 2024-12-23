import React from 'react'

function Banner2() {
  return (
   <>
   
   <div className="grid sm:grid-cols-2  items-center gap-8 font-[sans-serif] max-w-5xl max-sm:max-w-sm mx-auto p-4">
      

      <div>
        <h3 className="text-2xl font-extrabold text-gray-800">50+ Beautiful rooms <br />inpirations</h3>
        <p className="mt-4 text-sm text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis labore alias, voluptatibus asperiores recusandae voluptas praesentium similique placeat adipisci enim aliquam.</p>
        <button
            type="button"
            className="text-white bg-yellow-600 mt-7 border-2 w-[170px] border-yellow-600 py-3 px-6  rounded-lg  hover:bg-yellow-600 hover:text-white transition duration-300">
            Explore More
          </button>
       

        
      </div>


      <div className="sm:h-[400px]">
        <img src="images/room.png" className="w-full h-full object-contain" />
      </div>
    </div>
   
   </>
  )
}

export default Banner2
