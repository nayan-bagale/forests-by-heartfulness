'use client';

import { useState } from 'react';

const Donatation_form = () => {
  const [amount, setAmount] = useState<null | number>(null);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);

    setAmount(value);
  };

  return (
    <div className=" flex w-[40%] px-8">
      <div className="flex flex-col gap-5 text-[#173E5F] ">
        <h2>
          Be the reason someone <br /> smiles today.
        </h2>
        <div className="flex flex-col gap-5">
          <p className="text-lg font-medium">Choose an amount to donate</p>
          <div className=" flex items-center justify-center gap-8">
            <button
              className=" h-20 w-36 rounded border-2 text-lg font-medium"
              onClick={() => setAmount(50)}>
              {' '}
              &#8377;50
            </button>
            <button
              className=" h-20 w-36 rounded border-2 text-lg font-medium"
              onClick={() => setAmount(200)}>
              {' '}
              &#8377;200
            </button>
          </div>
          <div className=" flex items-center justify-center gap-8">
            <button
              className=" h-20 w-36 rounded border-2 text-lg font-medium"
              onClick={() => setAmount(1000)}>
              &#8377;1000
            </button>
            <button
              className=" h-20 w-36 rounded border-2 text-lg font-medium"
              onClick={() => setAmount(5000)}>
              &#8377;5000
            </button>
          </div>
          <input
            className="h-20 rounded border-2 bg-[transparent] px-4 text-lg font-medium placeholder:font-bold placeholder:text-[#173E5F]"
            type="number"
            placeholder="&#8377; Enter a custom amount"
            value={amount ? amount : ''}
            onChange={handleAmountChange}
          />
          <button
            className=" rounded-full p-2 font-medium text-colorWhite "
            style={{
              background:
                'linear-gradient(0deg, #276EF1, #276EF1), linear-gradient(0deg, #5899D0, #5899D0)',
            }}>
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donatation_form;
