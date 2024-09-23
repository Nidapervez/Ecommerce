
"use client"
import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';
import Cartcard from '@/components/cartcard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/features/cart';


const Cart = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(addToCart([]))
  },[])
  return (
    <div className='mt-[50px] mb-[100px]'>
      <div className='grid lg:grid-cols-3 grid-cols-1'>
        {/* items */}
        <div className='col-span-2'>

            <Cartcard src="/pictures/10.jpg" title='accesories' size="L" price={500}/>
        </div>
        {/* summary */}
        <div className='bg-slate-200 text-black p-5 rounded-xl'>
        {/* heading */}
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight uppercase">Order Summary</h2>
        <div className="divider mt-2 mb-2 h-1 bg-gray-400"></div>
        {/* pricing */}
<div className='text-sm font-medium tracking-tight text-black'>
{/* prodcut price */}
<div className='flex items-center justify-between capitalize'>
<h2>sub total</h2>
<h2>1500$</h2></div>
{/* delivery charges */}
<div className='flex items-center justify-between capitalize'>
<h2>Delivery charges</h2>
<h2>TBD</h2></div>
{/* service charges */}
<div className='flex items-center justify-between capitalize'>
<h2>Sales tax</h2>
<h2>TBD</h2></div>
<div className="divider mt-2 mb-2 h-1 bg-gray-400"></div>
{/* estimated total */}

<div className='flex items-center justify-between uppercase font-semibold text-sm tracking-tight'>
<h2>Estimated total</h2>
<h2>1500$</h2></div>
<div className="divider mt-2 mb-2 h-1 bg-gray-400"></div>
{/* checkoutbutton */}
<div className='flex items-center justify-center w-full'><Button className="bg-gray-800 hover:bg-black duration:300 text-white hover:text-orange-600 rounded-xl uppercase p-5">Proceed to checkout</Button></div>
<div className="divider mt-2 mb-2 h-1 bg-gray-400 "></div>

<p>Delivery charges and Sales tax will be concluded at the check out</p>
</div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
