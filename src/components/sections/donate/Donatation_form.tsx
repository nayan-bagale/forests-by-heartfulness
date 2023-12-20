'use client';

import { useState } from 'react';

const Donatation_form = () => {
  const [amount, setAmount] = useState<null | number>(null);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);

    setAmount(value);
  };

  return (
    <div className=" flex w-[40%] justify-center px-8">
      <div className="flex flex-col gap-5 text-[#173E5F] ">
        <h1>
          Be the reason someone <br /> smiles today.
        </h1>
        <div className="flex flex-col gap-5">
          <p className="text-xl font-medium">Choose an amount to donate</p>
          <div className="flex flex-col gap-5">
            <div className=" flex items-center justify-center gap-8">
              <button
                className=" rounded border-2 font-medium md:h-20 md:w-36 md:text-lg lg:h-24 lg:w-48 lg:text-2xl"
                onClick={() => setAmount(50)}>
                {' '}
                &#8377;50
              </button>
              <button
                className=" rounded border-2 font-medium md:h-20 md:w-36 md:text-lg lg:h-24 lg:w-48 lg:text-2xl"
                onClick={() => setAmount(200)}>
                {' '}
                &#8377;200
              </button>
            </div>
            <div className=" flex items-center justify-center gap-8">
              <button
                className=" rounded border-2 font-medium md:h-20 md:w-36 md:text-lg lg:h-24 lg:w-48 lg:text-2xl"
                onClick={() => setAmount(1000)}>
                &#8377;1000
              </button>
              <button
                className=" rounded border-2 font-medium md:h-20 md:w-36 md:text-lg lg:h-24 lg:w-48 lg:text-2xl"
                onClick={() => setAmount(5000)}>
                &#8377;5000
              </button>
            </div>
            <input
              className="mx-8 rounded border-2 bg-[transparent] px-4 text-lg font-medium placeholder:font-bold placeholder:text-[#173E5F] md:h-20 lg:h-24 lg:text-xl"
              type="number"
              placeholder="&#8377; Enter a custom amount"
              value={amount ? amount : ''}
              onChange={handleAmountChange}
            />
          </div>

          <button className=" mr-12 rounded-full bg-[linear-gradient(0deg,_#5899D0,_#5899D0)] text-sm font-medium text-colorWhite shadow-md active:bg-[linear-gradient(0deg,_#276EF1,_#276EF1)] md:p-2 lg:p-3">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donatation_form;
