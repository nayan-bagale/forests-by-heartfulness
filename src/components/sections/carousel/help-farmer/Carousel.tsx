'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import farmer from '@public/images/farmers-image.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const Carousel = () => {
  return (
    <div className=" mb-20 h-full w-[60%] justify-end">
      <>
        <div className=" relative flex text-colorWhite ">
          <Image src={farmer} alt="farmer" width={950} height={950} />
          <div className="absolute bottom-8 left-8 h-[30%] w-[55%] bg-[#0F3A30] p-4 pt-6  shadow">
            <h1 className=" md:text-xl lg:text-xl">Help Farmers like Sam and his wife</h1>
            <p className=" mt-4 leading-8 text-colorWhite md:text-base lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum Lorem ipsum dolor
              sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Carousel;
