
"use client"

import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import {FaPlus, FaMinus,FaTrash} from "react-icons/fa"

const Cartcard = ({src,title,size,price}:{src:string,title:string,size:string;price:number}) => {
  return (
    <div className='flex p-10'>
{/* image */}
<Image src={src}  alt={title} width={80} height={80} className='w-[100px] h-[100px]' />

{/* someinfo */}
<div className='flex px-5 justify-between items-center  w-full'> 

  <div>
    {/* title */}
<h2 className='text-sm font-semibold leading-none line line-clamp-1 text-black'>
{title}
</h2>
{/* size */}
<p className='mt-2 text-sm text-black leading-none line-clamp-1 font-semibold'>
  size:&nbsp;<span>{size}</span></p>
{/* quantity */}
<div className='mt-2 flex items-center'>

  <Button className="group hover:bg-white bg-black text-white hover:text-black w-fit h-fit rounded-lg text-xs duration-300">
    <FaMinus className="h-2 w-2 group-hover:text-black"/>
  </Button>
  <div className="mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tighter">1</div>
  <Button className="group hover:bg-white bg-black text-white hover:text-black w-fit h-fit rounded-lg text-xs duration-300">
    <FaPlus className="h-2 w-2 group-hover:text-black"/>
  </Button>
</div>
{/* Price and delete */}
<div className='lg:hidden  mt-2 flex flex-col  gap-5'> 
  <h3 className='text-sm font-semibold leading-none line-clamp-1'><span>Price:&nbsp;</span>&#36;{price}</h3>
<FaTrash className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer'/>

</div>
</div></div>
{/* price and delete */}
<div className='hidden lg:flex flex-col  items-end mt-2 gap-5'> 
  <h3 className='text-sm font-semibold leading-none '><span>Price:&nbsp;</span>&#36;{price}</h3>
<FaTrash className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer'/>

</div>



    </div>
  )
}

export default Cartcard