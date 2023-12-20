'use client';

import { Container } from '@src/components/shared/container';
import Image from 'next/image';
import farmers from '@public/images/farmers-image.png';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Video_Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Container className="flex h-full w-full flex-col items-center justify-center">
      <h1>Video Gallery</h1>
    </Container>
  );
};

export default Video_Gallery;
