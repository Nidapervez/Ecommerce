"use client"


import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bestsellingcard from '@/bestsellingcard';
// import { useAppSelector } from '@/app/store/hooks';


const Featuredproduct = () => {
//mydata

// const bestsell=useAppSelector((state)=>state.products);


  // carosel setting
var settings = {
  dots: true,
  arrows:false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      }
    }
  ]
};


  return (
    <div className="mb-[100px] mt-[100px]">
     {/* heading */}
     <div className="text-center mb-20">
    <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Featured Product
    </h1>

    <div className="flex mt-2 justify-center">
      <div className="w-16 h-1 rounded-full bg-orange-600 inline-flex" />
    </div></div>
    {/* carousel */}
    <Slider {...settings}>
    {/* {
bestsell.map((items:any,i)=>(
  <Bestsellingcard key={i} src={items.image[0]} alt={items.title} title={items.title} description={items.description} price={items.price} category={items.category} slug={items.slug} discount={items.discount}/>
))} */}
      </Slider>
    </div>
  )
}

export default Featuredproduct