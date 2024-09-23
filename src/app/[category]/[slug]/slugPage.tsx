"use client"
import { Button } from '@/components/ui/button';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import SlugComponent from '@/components/ui/slugComponent';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useState } from 'react';
import { addtocart } from '@/app/store/features/cart';

const SlugPage = ({params}:{params:{slug:string}}) => {
    const product=useAppSelector((state)=>state.products);
    const slug=product.filter((val)=>val.slug==params.slug);
    const dispatch=useAppDispatch()
    const[cartItem,setCartitem]=useState({
      id:slug[0].id,
      title:slug[0].title,
      image:slug[0].image,
      slug:slug[0].slug,
      price:slug[0].price,
      discount:slug[0].discount,
      category:slug[0].category,
      size:slug[0].size[0],
      qty:slug[0].qty,
      description:slug[0].description,
      color:slug[0].color,
      discount:slug[0].discount
    });
   
  return (
    <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
     
       <SlugComponent image={cartItem.image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      {/* title */}
        <h2 className="uppercase text-sm title-font text-gray-500 tracking-widest">
        {cartItem.category}
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
       {cartItem.title}
        </h1>
        <div className="divider"></div>
          <p className="leading-relaxed">
          {cartItem.description}
        </p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            {cartItem.color.map((item:any,i:any)=>(
            <button key={i} className="border-2 border-gray-300  rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
            style={{backgroundColor:item}}
            />
          ))}
          </div>
          <div className="form-control w-full max-w-xs">
            <select onChange={(e)=>setCartitem({..cartItem,size:e.target.value})} className='select select bordered'>
          <option disabled defaultValue={"Select Size"}>
            Select size
          </option>
                {cartItem.size.map((item:any,i:any)=>(
                  <option key={i}>{item}</option>
                ))}
               
              </select>
              <div className='flex items-center justify-between'>
              </div>

              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex items-center justify-between">
       
          <div >
          <span className={`scroll-m-20 text-2xl font-semibold tracking-tight text-black 
            ${cartItem.discount>0 &&
            "line-through decoration-2 decoration-bg-orange"}`}>
          </span> 
        
            {cartItem.discount>0 && (<span className="ml-5 title-font font-medium text-2xl text-gray-900">
           ${cartItem.price-cartItem.price*cartItem.discount)/100}
           </span>}
           </div>
           {/* addtocart */}
          <Button onClick={()=>dispatch(addtocart(cartItem))} className='group bg-slate-800 hover:bg-black text-white rounded-xl m-2'>
          <MdOutlineShoppingCart className='mr-2 w-4 group-hover:text-orange-600 duration-300' />Add to Cart
        </Button>
        <Button className='w-96 mr-36 group bg-slate-800 hover:bg-black text-white rounded-xl'>
          <FaHeart className=' group-hover:text-orange-600 duration-300' />Buy Now
        </Button>
      
        </div>
        <div className="divider"></div>
        <div className="flex items-center justify-between mt-10">
          <span className="title-font font-medium text-2xl text-gray-900  ">
            {slug[0].qty}
          </span>
          <Button className='group bg-slate-800 hover:bg-black text-white rounded-xl  w-40'>
          <FaPlus className='mr-2 w-4 group-hover:text-orange-600 duration-300' />Add
        </Button><div className='mr-2 ml-2'>1</div>
        <Button className='w-40 mr-36 group bg-slate-800 hover:bg-black text-white rounded-xl'>
          <FaMinus className=' group-hover:text-orange-600 duration-300' />less
        </Button>
      
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default SlugPage