// components/recentworks.jsx
import React from "react";
import Image from "next/image";
import { client } from "../configSanity";

import Link from "next/link";

async function getData() {
  const query = `*[_type== 'designs']{
    about,description,heading,link,_id,
    "imageUrl": image.asset->url }`;
  const data = await client.fetch(query);

  return data;
}

const Works = async () => {
  const data = (await getData()) || [];

  return (
    <div className="mt-4 grid lg:grid-cols-2 gap-4 md:grid-cols-2 grid-cols-1">
      {data.map((design) => (
     
        <div key={design._id}>
            
          <div className="mt-20" >
            <a href={design.link}>
          {design.imageUrl && (
            <Image className="w-auto h-lg" style={{ height: '70%', width: '100%' }}
           width={1400}
           height={500}

              src={design.imageUrl}
              alt={design.heading}
            />)}
            <h1 className="font-bold font-VT323 mt-8 lg:text-2xl md:text-xl stext-xl">{design.heading}</h1>
            <p className="font-light font-VT323 mt-2 mb-4 text-sm lg:text-xl md:text-lg text-gray-400">{design.description}</p>
            
            </a>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default Works;
