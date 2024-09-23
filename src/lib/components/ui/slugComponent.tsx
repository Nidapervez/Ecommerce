"use client";
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';



const SlugComponent = ({image,}:string|string[]|StaticImageData|any) => {
  const [path,setPath] = useState("");

  return (
    <div>
      <Image
        src={path? path :image[0]}
        alt="ecommerce"
        width={500}
        height={500}
      />
      {image.map((item:string,i:number)=>( 
        <div key={i}>
          <Image
            src={item}
            alt="ecommerce thumbnail"
            width={60}
            height={60}
            onClick={() => setPath(item)}
          />
        </div>))}
    </div>
  );
};

export default SlugComponent;
