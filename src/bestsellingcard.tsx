import React from 'react';
import Image from 'next/image';
import { Button } from './components/ui/button';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';

const Bestsellingcard = ({ src, alt, title, description, price, category, slug,discount,}: { src: string; alt: string; title: string; description: string; price: number; category: string; slug: string;discount:number }) => {
  return (
    <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-lg relative group">
      <Link href={`/${category}/${slug}`}>
        <div className="block relative h-[23rem] overflow-hidden">
          <Image src={src} alt={alt} width={400} height={400} />
        </div>
      </Link>
      <div className="card-body">
        {title && (<h2 className="card-title">{title}</h2>)}
        <p>{description}</p>



        <div className="flex gap-4 card-actions justify-end">
          <p className={`${discount>0 && "line-through decoration-2 decoration-orange"}`}>${price}</p>
        
          {discount >0 && (<p className="">
           ${price-(price*discount)/100}
           </p>
           )}
        </div>
        <Button className='group bg-slate-800 hover:bg-black text-white rounded-xl absolute ml-2 bottom-2'>
          <MdOutlineShoppingCart className='mr-2 w-4 group-hover:text-orange-600 duration-300' />Add to Cart
        </Button>
        <Button className='group bg-slate-800 hover:bg-black text-white rounded-xl absolute ml-2 bottom-14'>
          <FaHeart className='mr-2 w-4 group-hover:text-orange-600 duration-300' />Buy Now
        </Button>
        {discount> 0 &&(
          <div className='scroll-m-20 text-xs font-semibold tracking-tight bg-orange-600 absolute top'>{`${discount}% off`}</div>
        )}
      </div>
    </div>
  );
};

export default Bestsellingcard;
