import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();

  return (
    <div className="scrollbar-hide overflow-x-scroll px-4">
      <div className="flex gap-4 md:gap-8">
        {cats.items.map((item) => (
          <Link
            key={item._id}
            href={`/list?cat=${item.slug}`}
            className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className="relative h-96 w-full bg-slate-100">
              <Image
                src={item.media?.mainMedia?.image?.url || "/category.png"}
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 text-xl font-light tracking-wide">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
