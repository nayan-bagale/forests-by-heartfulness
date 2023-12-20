import Carousel from './carousel/help-farmer/Carousel';
import Donatation_form from './donate/Donatation_form';

const Donate_Carousel = () => {
  return (
    <div className="flex w-full items-center justify-between ">
      <Donatation_form />
      <Carousel />
    </div>
  );
};

export default Donate_Carousel;
