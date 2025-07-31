import React from 'react'
import mensCollectionImages from "../../assets/mens-collection.webp"
import womensCollectionImages from "../../assets/womens-collection.webp"
 function GenderCollectionSection() {
  return (
 <section className='py-16 px-4 lg:px-0'>
    <div className='container mx-auto flex flex-col md:flex-row gap-8'>
    {/* Womens Collection */}
     <div className='relative flex-1'>
<img src={womensCollectionImages} alt="womensCollectionImages" className='w-full h-[700px] object-cover'/>
     </div>

        {/* mens Collection */}
     <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
      <h2 className='text-2xl font-bold text-gray-900 mb-3'>Women's Collecion</h2>
    </div>

    </div>

 </section>
  )
}
export default GenderCollectionSection
