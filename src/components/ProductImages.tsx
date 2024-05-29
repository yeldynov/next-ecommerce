"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/872514/pexels-photo-872514.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/18367606/pexels-photo-18367606.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/17871515/pexels-photo-17871515.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1196827/pexels-photo-1196827.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="relative h-[500px]">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="rounded-md object-cover"
        />
      </div>
      <div className="mt-8 flex cursor-pointer justify-between gap-4">
        {images.map((image, i) => (
          <div
            className="relative mt-8 h-32 w-1/4 gap-4"
            key={image.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={image.url}
              alt=""
              fill
              sizes="30vw"
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
