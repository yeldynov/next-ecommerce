"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  // TEMP
  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex w-32 items-center justify-between rounded-3xl bg-gray-100 px-4 py-2">
            <button
              onClick={() => handleQuantity("d")}
              className="cursor-pointer text-xl"
            >
              -
            </button>
            {quantity}
            <button
              onClick={() => handleQuantity("i")}
              className="cursor-pointer text-xl"
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">{stock} items</span> left!
            <br /> Don&apos;t miss it!
          </div>
        </div>

        <button className="w-36 rounded-3xl px-4 py-2 text-sm text-softRed ring-1 ring-softRed hover:bg-softRed hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;