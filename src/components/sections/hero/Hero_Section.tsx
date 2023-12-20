import Image from 'next/image';
import hero_image from '@public/images/hero-image.png';

const Hero_Section = () => {
  return (
    <div className="relative flex">
      <div className=" brightness-50">
        <Image src={hero_image} alt="hero image" width={2500} height={2500} />
      </div>
      <h1 className=" absolute top-[40%] left-2/4 w-full -translate-x-2/4 -translate-y-2/4 text-center text-5xl italic leading-relaxed text-colorWhite">
        Creating Mini Forests Of Indigenous And <br />
        Native Species Across India
      </h1>
    </div>
  );
};

export default Hero_Section;
