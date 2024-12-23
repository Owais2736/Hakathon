import Productpagination from '@/components/Productpagination'
import ShopBanner from '@/components/ShopBanner'
import ShopStats from '@/components/ShopStats'
import React from 'react'

function page() {
  return (
    <>
   <section className='section1'>
    <ShopBanner/>
   </section>
    

    <section className='section2'>
<div className='mt-10'>


<Productpagination/>
</div>
    </section>

    <section className='section3'>

        <div className='mt-16'>
<ShopStats/>
</div>
    </section>
    
    </>
  )
}

export default page
