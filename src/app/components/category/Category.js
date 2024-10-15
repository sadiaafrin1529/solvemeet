"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import Title from '../title/Title';

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
    <div className=" container mx-auto ">
      <Title  title={"Category"} />
      <Slider {...settings}>
        {data?.data?.map((item) => (
          <div className="m-5 p-5 ">
            <div
              key={item?.id}
              className="border  border-blue-500 rounded-xl py-7"
            >
              <div className="border-double border-4 border-blue-500 mx-auto p-3 rounded-[50%] w-20 h-20">
                <Image
                  className="text-center border-solid border-2 rounded-[50%] border-blue-500   object-cover"
                  width={80}
                  height={80}
                  src={item?.image}
                  alt={item?.name}
                />
              </div>
              <h3 className="text-2xl text-center">{item?.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}