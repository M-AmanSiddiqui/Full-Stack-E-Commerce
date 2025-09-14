import React from 'react'
import mensCollectionImages from "../../assets/mens-collection.webp"
import womensCollectionImages from "../../assets/womens-collection.webp"
import { Link } from 'react-router-dom'
 function GenderCollectionSection() {
  return (
 <section className='py-16 px-4 lg:px-0'>
    <div className='container mx-auto flex flex-col md:flex-row gap-8'>
    {/* Womens Collection */}
     <div className='relative flex-1'>
<img src={womensCollectionImages} alt="womensCollectionImages" className='w-full h-[700px] object-cover'/>
    

        {/* Womens Collection */}
     <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
      <h2 className='text-2xl font-bold text-gray-900 mb-3'>Women's Collecion</h2>
<Link to="/collecions/all?gender=Women" className='text-gray-900 underline'>
Shop Now
</Link>
 </div>
 </div>

 
    <div className='relative flex-1'>
<img src={mensCollectionImages} alt="mensCollectionImages" className='w-full h-[700px] object-cover'/>
    

        {/* Mens Collection */}
     <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
      <h2 className='text-2xl font-bold text-gray-900 mb-3'>Men's Collecion</h2>
<Link to="/collecions/all?gender=Men" className='text-gray-900 underline'>
Shop Now
</Link>
 </div>
 </div>

    </div>

 </section>
  )
}
export default GenderCollectionSection
