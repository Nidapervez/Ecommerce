import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Categories = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
      <div className="text-center mb-20">
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Categories
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-orange-600 inline-flex" />
        </div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Category Item */}
        <div className='relative w-full h-80 overflow-hidden group'>
          <Link href={"/jackets"}>
            <div className='relative w-full h-full'>
              <Image 
                src={require('../../emcomerce/public/Pictures/6.jpg')} 
                alt="jacket" 
                layout="fill" 
                objectFit="cover" 
                className='rounded-xl duration-500 group-hover:scale-110'
              />
            </div>
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center text-xl font-extrabold lg:text-2xl p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity'>
              <h1 className='uppercase'>Jackets</h1>
            </div>
          </Link>
        </div>

        {/* Repeat for other images */}
        <div className='relative w-full h-80 overflow-hidden group'>
          <Link href={"/Tops"}>
            <div className='relative w-full h-full'>
              <Image 
                src={require('../../emcomerce/public/Pictures/4.jpg')} 
                alt="tops" 
                layout="fill" 
                objectFit="cover" 
                className='rounded-xl duration-500 group-hover:scale-110'
              />
            </div>
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center text-xl font-extrabold lg:text-2xl p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity'>
              <h1 className='uppercase'>Tops</h1>
            </div>
          </Link>
        </div>

        <div className='relative w-full h-80 overflow-hidden group'>
          <Link href={"/shoes"}>
            <div className='relative w-full h-full'>
              <Image 
                src={require('../../emcomerce/public/Pictures/12.jpg')} 
                alt="shoes" 
                layout="fill" 
                objectFit="cover" 
                className='rounded-xl duration-500 group-hover:scale-110'
              />
            </div>
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center text-xl font-extrabold lg:text-2xl p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity'>
              <h1 className='uppercase'>Shoes</h1>
            </div>
          </Link>
        </div>

        <div className='relative w-full h-80 overflow-hidden group'>
          <Link href={"/jeans"}>
            <div className='relative w-full h-full'>
              <Image 
                src={require('../../emcomerce/public/Pictures/7.jpg')} 
                alt="Jeans" 
                layout="fill" 
                objectFit="cover" 
                className='rounded-xl duration-500 group-hover:scale-110'
              />
            </div>
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center text-xl font-extrabold lg:text-2xl p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity'>
              <h1 className='uppercase'>Jeans</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories;
