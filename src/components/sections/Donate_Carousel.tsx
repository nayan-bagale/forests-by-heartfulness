import Carousel from './carousel/help-farmer/Carousel';
import Donatation_form from './donate/Donatation_form';

const Donate_Carousel = () => {
  return (
    <div className=" mb-20 flex w-full flex-col-reverse items-center justify-between gap-14 md:mt-10 md:flex-row ">
      <Donatation_form />
      <Carousel />
    </div>
  );
};

export default Donate_Carousel;
