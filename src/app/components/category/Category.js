"use client"

import getCategory from "@/lib/getCategory";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { useEffect } from "react/cjs/react.production.min";

export default function Category() {
 //demo.webcodecare.com/api/categoriesApi
 https: useEffect;
  // Slider settings
  
 var settings = {
   dots: true,
   infinite: false,
   speed: 500,
   slidesToShow: 4,
   slidesToScroll: 4,
   initialSlide: 0,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true,
       },
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         initialSlide: 2,
       },
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
 };
  return (
    <div className="mt-10 container mx-auto">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}



