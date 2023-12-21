import { Container } from '@src/components/shared/container';

const Quote_Section = () => {
  return (
    <Container className=" flex h-[20rem] w-full items-center justify-center md:my-20">
      <p className=" w-[78ch] text-center text-xs font-medium text-[#173E5F] md:text-xl lg:text-3xl">
        We are depleting the Earth's natural resources, polluting its air and water, destabilising
        the climate, and driving many of its species to extinction.The total forest cover in India
        is 80.73* million hectares which forms 24.56%* of the geographical area of the country. The
        country has lost 1.93 million* hectares of forest cover from 2001 to 2020.
      </p>
    </Container>
  );
};

export default Quote_Section;
