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
    <div className=" flex min-h-[400px] w-full justify-end md:min-h-[600px] md:w-[50%] lg:h-full">
      <Swiper pagination={true} modules={[Pagination]} loop={true} className="mySwiper">
        <SwiperSlide>
          <div className=" relative flex h-full w-full overflow-hidden text-colorWhite ">
            <Image src={farmer} alt="farmer" className=" object-cover" width={900} height={900} />
            <div className="absolute bottom-8 left-8 h-[35%] w-[55%] bg-[#0F3A30] p-2 pt-3 shadow md:h-[33%] md:p-4 md:pt-6">
              <h1 className=" text-sm md:text-base lg:text-xl">
                Help Farmers like Sam and his wife
              </h1>
              <p className=" mt-1 text-xs text-colorWhite md:text-sm lg:mt-4 lg:text-base lg:leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum Lorem ipsum
                dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative flex h-full w-full overflow-hidden text-colorWhite ">
            <Image src={farmer} alt="farmer" className=" object-cover" width={900} height={900} />
            <div className="absolute bottom-8 left-8 h-[35%] w-[55%] bg-[#0F3A30] p-2 pt-3 shadow md:h-[33%] md:p-4 md:pt-6">
              <h1 className=" text-sm md:text-base lg:text-xl">
                Help Farmers like Sam and his wife
              </h1>
              <p className=" mt-1 text-xs text-colorWhite md:text-sm lg:mt-4 lg:text-base lg:leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum Lorem ipsum
                dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative flex h-full w-full overflow-hidden text-colorWhite ">
            <Image src={farmer} alt="farmer" className=" object-cover" width={900} height={900} />
            <div className="absolute bottom-8 left-8 h-[35%] w-[55%] bg-[#0F3A30] p-2 pt-3 shadow md:h-[33%] md:p-4 md:pt-6">
              <h1 className=" text-sm md:text-base lg:text-xl">
                Help Farmers like Sam and his wife
              </h1>
              <p className=" mt-1 text-xs text-colorWhite md:text-sm lg:mt-4 lg:text-base lg:leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum Lorem ipsum
                dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
