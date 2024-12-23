import React from 'react'

function Footer() {
  return (
   <>
   <footer className=" pt-12 pb-6 px-10 font-[sans-serif] border rounded-xl m-2 tracking-wide">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:flex  lg:items-center">
            <a href="javascript:void(0)">
             <h2 className=' mt-[-5vw] font-bold text-[20px]'>Furniro</h2>
             <p className='text-gray-600 mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolores iusto natus quia quidem? Dolore, cupiditate! Perspiciatis obcaecati ex sapiente.</p>
            </a>
          </div>

         

          <div>
            <h4 className="text-lg mb-6  text-gray-500 font-bold"> Links</h4>
            <ul className="space-y-4 pl-2">
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold">Home</a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold">Shop</a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold"> About</a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold"> Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6  text-gray-500 font-bold ">Information</h4>
            <ul className="space-y-4 pl-2">
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold">About Us</a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold">Privacy Policy</a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold">Sale</a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold">Documentation</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6  text-gray-500 font-bold ">Helps</h4>
            <ul className="space-y-4 pl-2">
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold">About Us</a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold">Privacy Policy</a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold">Sale</a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" hover:text-gray-700 text-sm font-bold">Documentation</a>
              </li>
            </ul>
          </div>
 
        </div>

<div className='mt-6'>
<hr />
</div>

        <p className=' text-sm  mt-10'>2023 Furnico.© All rights reserved.
        </p>
      </div>
    </footer>
   
   </>
  )
}

export default Footer
