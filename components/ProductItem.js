import React from "react";
import {AiFillStar} from 'react-icons/ai'
export default function ProductItem ({product}) {
return (
   
  <div className="card">
    <div className="flex flex-col items-center justify-center p-5">
    <div className='flex flex-col w-[100px] bg-red-500 items-center justify-center rounded-lg'><p className="text-white">25%Off</p></div>
    </div>
<img src={product.image} alt={product.name} className="rounded-lg  shadow "/>
<div className="flex flex-col items-center justify-center p-2">
    <h2 className='text-lg font-bold'>{product.name}</h2>
    <p className='mb-1'>{product.category}</p>
    <p className='mb-1'>{product.price}</p>
<div  className="flex">
<AiFillStar size={20} className="me-0.5 text-yellow-500" />
    <p className='mb-1 text-sm text-yellow-500 font-bold'>{product.point}</p>
</div>
   
</div>
    </div>
   
  
)
}