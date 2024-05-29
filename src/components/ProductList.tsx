import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-between gap-x-8 gap-y-16">
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://images.pexels.com/photos/20877782/pexels-photo-20877782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute z-10 rounded-md object-cover transition-opacity duration-500 ease-linear hover:opacity-0"
          />
          <Image
            src="https://images.pexels.com/photos/18023659/pexels-photo-18023659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="w-max rounded-2xl px-4 py-2 text-xs ring-1 ring-softRed hover:bg-softRed hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://images.pexels.com/photos/20877782/pexels-photo-20877782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute z-10 rounded-md object-cover transition-opacity duration-500 ease-linear hover:opacity-0"
          />
          <Image
            src="https://images.pexels.com/photos/18023659/pexels-photo-18023659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="w-max rounded-2xl px-4 py-2 text-xs ring-1 ring-softRed hover:bg-softRed hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://images.pexels.com/photos/20877782/pexels-photo-20877782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute z-10 rounded-md object-cover transition-opacity duration-500 ease-linear hover:opacity-0"
          />
          <Image
            src="https://images.pexels.com/photos/18023659/pexels-photo-18023659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="w-max rounded-2xl px-4 py-2 text-xs ring-1 ring-softRed hover:bg-softRed hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://images.pexels.com/photos/20877782/pexels-photo-20877782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute z-10 rounded-md object-cover transition-opacity duration-500 ease-linear hover:opacity-0"
          />
          <Image
            src="https://images.pexels.com/photos/18023659/pexels-photo-18023659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="w-max rounded-2xl px-4 py-2 text-xs ring-1 ring-softRed hover:bg-softRed hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
