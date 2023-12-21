'use client';

import { useState } from 'react';

const Donatation_form = () => {
  const [amount, setAmount] = useState<null | number>(null);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);

    setAmount(value);
  };

  return (
    <div className=" flex justify-end px-8 pt-6 md:w-[50%]  md:px-0">
      <div className=" flex w-full flex-col text-[#173E5F] md:ml-10 lg:ml-36 ">
        <h1 className=" md:text-2xl lg:text-5xl">
          Be the reason someone <br /> smiles today.
        </h1>
        <p className=" mt-2 mb-3 font-medium md:mt-4 md:mb-6 md:text-lg lg:mt-12 lg:text-2xl">
          Choose an amount to donate
        </p>
        <div className="flex flex-col">
          <div className="flex w-full flex-col gap-3 text-[#17305f] lg:gap-5">
            <button
              className=" flex h-10 items-center justify-between rounded border-2 p-2 font-medium md:h-16 md:p-6 lg:h-20"
              onClick={() => setAmount(50)}>
              <p className=" text-left text-xs font-medium md:text-base lg:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <hr className=" mx-2 h-6 border border-l border-colorBlack md:h-10 lg:mx-4 lg:h-14" />
              <p className=" min-w-[3rem] font-medium md:text-xl lg:min-w-[5rem] lg:text-2xl">
                &#8377;50
              </p>
            </button>
            <button
              className=" flex h-10 items-center justify-between rounded border-2 p-2 font-medium md:h-16 md:p-6 lg:h-20"
              onClick={() => setAmount(500)}>
              <p className=" text-left text-xs font-medium md:text-base lg:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <hr className=" mx-2 h-6 border border-l border-colorBlack md:h-10 lg:mx-4 lg:h-14" />
              <p className=" min-w-[3rem] font-medium md:text-xl lg:min-w-[5rem] lg:text-2xl">
                &#8377;500
              </p>
            </button>
            <button
              className=" flex h-10 items-center justify-between rounded border-2 p-2 font-medium md:h-16 md:p-6 lg:h-20"
              onClick={() => setAmount(2000)}>
              <p className=" text-left text-xs font-medium md:text-base lg:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <hr className=" mx-2 h-6 border border-l border-colorBlack md:h-10 lg:mx-4 lg:h-14" />
              <p className=" min-w-[3rem] font-medium md:text-xl lg:min-w-[5rem] lg:text-2xl">
                &#8377;2000
              </p>
            </button>

            <input
              className="mt-2 h-10 rounded border-2 bg-[transparent] px-4 font-medium placeholder:font-bold placeholder:text-[#173E5F] md:h-16 md:text-lg lg:h-20 lg:text-xl"
              type="number"
              placeholder="&#8377; Enter a custom amount"
              value={amount ? amount : ''}
              onChange={handleAmountChange}
            />
          </div>

          <button className=" mt-3 rounded-full bg-[linear-gradient(0deg,_#5899D0,_#5899D0)] p-2 text-sm font-medium text-colorWhite shadow-md active:bg-[linear-gradient(0deg,_#276EF1,_#276EF1)] md:mt-4 lg:mt-6 lg:p-3">
            DONATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donatation_form;
