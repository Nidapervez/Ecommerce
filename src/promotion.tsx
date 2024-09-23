import React from 'react'

const Promotion = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
        {/* heading */}
        <div className="text-center mb-20">
    <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
     Our Promotions
    </h1>

    <div className="flex mt-2 justify-center">
      <div className="w-16 h-1 rounded-full bg-orange-600 inline-flex" />
    </div>
  </div>
  {/* promotion */}
  <div className='grid grid-cols-1 lg:grid-cols-2 rounded-2xl'>
    {/* first child */}
    <div className='mb-[100px]'>
    <div className="hero min-h-[80vh] dustom-img flex items-center justify-center bg-fixed">
      <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black uppercase hover:animate-spin ">Get Upto<span className='text-orange-600'> 60% Discount</span>  </h1>
          <p className="mb-5 text-black scroll-m-20 text-xl font-semibold tracking-tight">
            
  Flash Sale,get upto<span className='text-orange-600'> 60%</span> off on Seasonal Variant 
          </p>
     
        </div>
      </div>
    </div>
    </div>

    {/* second child */}
    <div className='mb-[100px]'>
    <div className="hero min-h-[80vh] lustom-img rounded-2xl flex items-center justify-center bg-fixed">
      <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black uppercase hover:animate-spin ">Get Upto<span className='text-purple-950'> 20% Discount</span> </h1>
          <p className="mb-5 text-black scroll-m-20 text-xl font-semibold tracking-tight">
            
  Flash Sale,get upto<span className='text-orange-600'> 20%</span> off on Jewelry 
          </p>
     
        </div>
      </div>
    </div>
    </div>
  </div>
  
  
  </div>
  )
}

export default Promotion