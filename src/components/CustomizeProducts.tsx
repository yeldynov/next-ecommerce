"use client";

const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="relative h-8 w-8 cursor-pointer rounded-full bg-red-500 ring-1 ring-gray-300">
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full ring-2" />
        </li>
        <li className="relative h-8 w-8 cursor-pointer rounded-full bg-blue-500 ring-1 ring-gray-300"></li>
        <li className="relative h-8 w-8 cursor-not-allowed rounded-full bg-green-500 bg-opacity-75 ring-1 ring-gray-300">
          <div className="absolute left-1/2 top-1/2 h-[2px] w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 transform rounded-full bg-red-400" />
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="cursor-pointer rounded-md px-4 py-1 text-sm text-softRed ring-1 ring-softRed">
          Small
        </li>
        <li className="cursor-pointer rounded-md bg-softRed px-4 py-1 text-sm text-white ring-1 ring-softRed">
          Medium
        </li>
        <li className="cursor-not-allowed rounded-md bg-pink-200 px-4 py-1 text-sm  text-white ring-1 ring-pink-200">
          Large
        </li>
      </ul>
    </div>
  );
};

export default CustomizeProducts;
