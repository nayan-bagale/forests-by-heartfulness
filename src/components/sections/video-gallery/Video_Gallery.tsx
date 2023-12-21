import { Container } from '@src/components/shared/container';
import thambnail from '@public/images/youtube_image.png';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@contentful/f36-icons';

const Video_Gallery = () => {
  return (
    <Container className="flex h-full w-full flex-col items-center justify-center">
      <h1>Video Gallery</h1>
      <div className=" my-9 flex w-full flex-col items-center gap-4">
        <div className="">
          <iframe
            className=" h-[190px] w-[310px] md:h-[430px] md:w-[760px] lg:h-[550px] lg:w-[960px]"
            width="960"
            height="550"
            src="https://www.youtube.com/embed/COtlTWa7bKw?si=aS3J6Dx9A48Po1He"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
        <div className=" flex w-full items-center justify-center gap-6">
          <button className=" h-full">
            <ChevronLeftIcon variant="secondary" />
          </button>
          <div className=" flex max-w-[80%] gap-6 overflow-scroll">
            <button className=" h-[100px] w-[120px] md:h-[150px] md:w-[180px] lg:h-[180px] lg:w-[220px]">
              <Image
                src={thambnail}
                className=" object-cover"
                width={250}
                height={250}
                alt="thambnail"
              />
            </button>
            <button className=" h-[100px] w-[120px] md:h-[150px] md:w-[180px] lg:h-[180px] lg:w-[220px]">
              <Image
                src={thambnail}
                className=" object-cover"
                width={250}
                height={250}
                alt="thambnail"
              />
            </button>
            <button className=" h-[100px] w-[120px] md:h-[150px] md:w-[180px] lg:h-[180px] lg:w-[220px]">
              <Image
                src={thambnail}
                className=" object-cover"
                width={250}
                height={250}
                alt="thambnail"
              />
            </button>
          </div>
          <button className=" h-full">
            <ChevronRightIcon variant="secondary" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Video_Gallery;
