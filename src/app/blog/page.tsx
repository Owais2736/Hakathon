import BlogBanner from '@/components/BlogBanner'
import BlogPost from '@/components/BlogPost'
import ShopStats from '@/components/ShopStats'
import React from 'react'

function page() {
  return (
    <>
    <section className='section1'>
        <BlogBanner/>
    </section>
    
<section className='section2'>
    <BlogPost/>
</section>


<section className='section3'>
    <div className='mt-10'>
        <ShopStats/>
    </div>
</section>
    </>
  )
}

export default page
