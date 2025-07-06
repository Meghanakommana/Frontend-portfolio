'use client';

import React, { useEffect, useRef } from 'react';

const baseimages = [
  'https://www.betterlyf.com/images/articles/wp-content/uploads/2021/02/mental-health-counselor-quotes.jpg',
  'https://www.betterlyf.com/images/articles/wp-content/uploads/2021/02/physical-therapy-quotes.jpg',
  'https://i.pinimg.com/474x/6f/42/dd/6f42dda4a1dc1e7e13e04c57a9b01f3e.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH96YR6DiPzrgy_pawbpUpBaxUV6UHKN_bqA&s',
  'https://otpotential.com/wp-content/uploads/2021/11/10-05-Laura-Quote.jpg',
  'https://i.pinimg.com/236x/2f/5e/70/2f5e70a90204c5d6822c7cad001db783.jpg',
  'https://d3eizkexujvlb4.cloudfront.net/2016/06/08124836/Always-Remember-Brave-Strong-and-Smart-1024x790.jpg',
  'https://otpotential.com/wp-content/uploads/2021/11/01-spend-our-days.jpg',
  'https://d3eizkexujvlb4.cloudfront.net/2016/05/04155355/BicycleBalanceFree-scaled.jpg',
  'https://i.pinimg.com/236x/bf/14/25/bf142599baec4d2455c03aa9522c1e68.jpg',
  'https://www.southernliving.com/thmb/W0E23axZMBvm6cbFPyEggtFGtlg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SL_SelfCare_31-8fdf25187e5446c792974050bdf38c4d.jpg',
];

const images=[...baseimages, ...baseimages]; 

const MotivationGallery = () => {
  return (
    <section id="gallery" className="py-20 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Find Your Calm</h2>
        <p className="text-lg text-gray-600 mt-2">Inspiration that never stops scrolling</p>
      </div>

      <div className="overflow-hidden w-full">
        <div className="gallery-loop px-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`motivational-${index}`}
              className="w-[300px] h-[200px] object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotivationGallery;