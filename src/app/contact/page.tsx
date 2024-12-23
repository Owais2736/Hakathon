import ContactBanner from '@/components/ContactBanner'
import ContactForm from '@/components/ContactForm'
import ShopStats from '@/components/ShopStats'
import React from 'react'

function page() {
  return (
    <>
  <section className='section1'>
    <ContactBanner/>
    <div className="flex flex-col  justify-center mt-8 text-center items-center">
          <h2 className="font-bold text-[27px]">Get Touch With Us</h2>
          <p className="text-gray-500 w-[700px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repudiandae veniam exercitationem delectus quod numquam laboriosam, quos nihil. Vitae blanditiis neque labore deserunt exercitationem laudantium cum molestias, commodi tenetur delectus?</p>
        </div>
  </section>
<section className='section2'>
    <div className='mt-16'>
<ContactForm/>
</div>
</section>


<section className='section3'>
    <div className='mt-12'>
    <ShopStats/>
    </div>
</section>

    </>
  )
}

export default page
