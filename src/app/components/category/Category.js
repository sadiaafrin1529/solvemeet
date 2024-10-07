"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slider from "react-slick";

export default function Category() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://demo.webcodecare.com/api/categoriesApi`);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

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
console.log(data?.data)
  return (
    <div className="mt-10 container mx-auto">
        <Slider {...settings}>
          {data?.data?.map((item) => (
            <div key={item?.id}>
              <h3 className="text-2xl">{item?.name}</h3>
              <Image width={70} height={70} src={item?.image} />
            </div>
          ))}
        </Slider>
    </div>
  );
}