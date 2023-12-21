import Image from 'next/image';
import hero_image from '@public/images/hero-image.png';

const Hero_Section = () => {
  return (
    <div className="relative flex">
      <div className=" h-[320px] overflow-hidden brightness-50 md:h-fit">
        <Image
          src={hero_image}
          alt="hero image"
          className=" h-full object-cover "
          width={2500}
          height={2500}
        />
      </div>
      <h1 className=" absolute top-[40%] left-2/4 w-full -translate-x-2/4 -translate-y-2/4 text-center text-sm italic leading-relaxed text-colorWhite md:text-3xl lg:text-5xl">
        Creating Mini Forests Of Indigenous And <br />
        Native Species Across India
      </h1>
    </div>
  );
};

export default Hero_Section;
