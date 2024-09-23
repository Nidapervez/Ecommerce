import React from 'react';
import Image from 'next/image';
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const Services = () => {
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container px-5  mx-auto">
      <div className="text-center mb-20">
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
         Our Services
        </h1>
    
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-orange-600 inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
       
        <div className="p-4 mx-auto md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center  bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <TbTruckDelivery className="h-40 w-40 bg-white " />
          </div>
          <div className="flex-grow">
            <h2 className="capitalizw font-bold text-black hover:text-orange-600 duration-300">
              Free Delivery
            </h2>
            <p className="capitalize text-black">
           Free Delivery on order above 1000$.
            </p>
            
          </div>
        </div>
        <div className="p-4 mx-auto md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center  bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <RiCustomerService2Fill className="h-40 w-40 bg-white " />
          </div>
          <div className="flex-grow">
            <h2 className="capitalizw font-bold text-black hover:text-orange-600 duration-300">
            24/7 Customer Care
            </h2>
            <p className="capitalize text-black">
          For Queries and Question Feel free to contact.
            </p>
            
          </div>
        </div>
        <div className="p-4 mx-auto md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center  bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <FaMoneyCheckDollar className="h-40 w-40 bg-white " />
          </div>
          <div className="flex-grow">
            <h2 className="capitalizw font-bold text-black hover:text-orange-600 duration-300">
              Money Back Garantee
            </h2>
            <p className="capitalize text-black">
           Get money Back Garantee on Damage products
            </p>
            
          </div>
        </div>
      </div>
      
    </div>
  </section>
  </div>
  )
}

export default Services