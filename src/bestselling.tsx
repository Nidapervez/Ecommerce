"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from './components/ui/button'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Bestsellingcard from './bestsellingcard';
// import { useAppSelector } from './app/store/hooks';


const Bestselling = () => {
  // const product=useAppSelector((state)=>state.products);
  // const bestsell=product.slice(0,3)
  // const bestsell=[
  //   {
  //     src:"/Pictures/114.jpeg",
  //     alt:"image",
  //     title:"Denim Jacket",
  //     description:"Good for Style",
  //     price:300,
  //     category:"jackets",
  //      slug:"denimjacket",
  //      discount:0
  //   },  {
  //     src:"/Pictures/skybluepolo.webp",
  //     alt:"image",
  //     title:"Sky Blue Polo",
  //     description:"It makes your summer easy",
  //     price:1650,
  //     category:"tops",
  //      slug:"skybluepolo",
  //      discount:0
  //   }, {
  //     src:"/Pictures/peplum.webp",
  //     alt:"image",
  //     title:"Red Peplum",
  //     description:"Its a party Wear",
  //     price:1550,
  //     category:"tops",
  //      slug:"redpeplum",
  //      discount:0
  //   },

  // ]
  return (
    <div className='mb-[100px] mt-[100px]'>
      {/* heading */}
    <div className="text-center mb-20">
    <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Best Selling Products
    </h1>

    <div className="flex mt-2 justify-center">
      <div className="w-16 h-1 rounded-full bg-orange-600 inline-flex" />
    </div></div>
  
  {/* bestselingcard */}
<div className="flex flex-wrap justify-center gap-5">
  
{/* {
bestsell.map((items:any,i)=>(
  <Bestsellingcard key={i} src={items.image[0]} alt={items.title} title={items.title} description={items.description} price={items.price} category={items.category} slug={items.slug} discount={items.discount}/>
))} */}




  </div>
  </div>
    
  )
}

export default Bestselling