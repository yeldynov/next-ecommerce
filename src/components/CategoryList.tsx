import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="scrollbar-hide overflow-x-scroll px-4">
      <div className="flex gap-4 md:gap-8">
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/18023659/pexels-photo-18023659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/18023659/pexels-photo-18023659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/18023659/pexels-photo-18023659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/18023659/pexels-photo-18023659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/18023659/pexels-photo-18023659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/18023659/pexels-photo-18023659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/18023659/pexels-photo-18023659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/18023659/pexels-photo-18023659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
