import React from 'react'
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandMeta } from 'react-icons/tb'
import { Link } from 'react-router-dom';
 function Topbar() {
  return (
    <div className="bg-[#ea2e0e] text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
      <div className='hidden md:flex items-center space-x-4'>
        <Link to="#" className="hover:text-gray-300">
        <TbBrandMeta className="h-5 w-5"/>
        </Link>

         <Link to="#" className="hover:text-gray-300">
        <IoLogoInstagram className="h-5 w-5"/>
        </Link>

         <Link to="#" className="hover:text-gray-300">
        <RiTwitterXLine className="h-5 w-5"/>
        </Link>
     </div>
     <div className='text-sm text-center flex-grow'>
        <span>We ship worldwide - Fast and reliable shipping!</span>
     </div>
     <div className='text-sm hidden md:block'>
        <Link to="+923322430504" className='hover:text-gray-300'>+92332243050</Link>
     </div>
     </div>
    </div>
  )
}
export default Topbar