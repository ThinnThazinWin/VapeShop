import React from "react";

export default function NewReleaseItem ({product}) {
return (
   
  <div className="flex flex-row mx-auto p-2">
   
   <img src={product.image} alt={product.name} className="rounded-lg  shadow w-[320px] h-[200px]"/>

    </div>
   
  
)
}