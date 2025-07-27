import React from 'react'

 function CartContents() {
const cartProducts = [

     {
  productID: "prod001",
  name: "Stylish T-Shirt",
  size: "M",
  color: "Red",
  quantity: 2,
  price: 15,
  image: "https://picsum.photos/200?random=1"
},
   {
  productID: "prod002",
  name: "Stylish T-Shirt",
  size: "L",
  color: "Blue",
  quantity: 24,
  price: 135,
  image: "https://picsum.photos/200?random=2"
},

]

  return (
    <div>
      {cartProducts.map((product, index ) => (
<div key={index} className='fle items-start justify-between py-4 border-b'>
    <div className='flex items-start'> <img src={product.image} alt={product.name} 
    className='w-20  h-24 object-cover mr-4 rounded'/>

<div>
    <h3>{product.name}</h3>
    <p className='text-sm text-gray-500 '>size: {product.size} | color: {product.color}</p>
    </div>    
</div>
</div>
      ))}
    </div>
  )
}
export default CartContents