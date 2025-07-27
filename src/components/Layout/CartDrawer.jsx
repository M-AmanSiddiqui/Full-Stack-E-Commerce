import React from 'react';
import { IoMdClose } from 'react-icons/io';
import CartContents from '../Cart/CartContents';

 function CartDrawer  ({drawerOpen, toggleCartDrawer}) {




    return (
    <div
     className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
      

      {/* Close button */}
      <div className='flex justify-end p-4'>
        <button onClick={toggleCartDrawer}>
<IoMdClose  className='h-6 w-6 text-gray-600'/>

        </button>
      </div>

      {/* Cart Content with scrollable area */}

    <div className='flex-grow p-4 overflow-y-auto'>
        <h2 className='text-xl font-semibold mb-4'> Your Cart </h2>

        {/* Component for Cart contents */}
        <CartContents />
    </div>
    {/* Checkout Button Fixed At the Buttom */}
    <div className='p-4 bg-white sticky bottom-0'>
        <button 
        className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'> Checkout</button>
  <p className='text-xs tracking-tighter text-gray-500 mt-2 text-center'>Shipping, taxes, and discount codes calculated at Checkout. </p>
    </div>
    </div>
  )
}
export default CartDrawer
