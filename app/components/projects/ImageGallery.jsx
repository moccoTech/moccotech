'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity';

export default function ImageGallery({ images }) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image) => {
    setBigImage(image);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 h-64 sm:h-64 md:h-72 lg:h-[450px]">
        <Image
          src={urlFor(bigImage).url()}
          alt="Main image"
          className="h-full w-full object-cover object-center"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {images.length > 1 &&
          images.map((image, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg relative bg-indigo-500 min-h-20"
            >
              <Image
                src={urlFor(image).url()}
                alt="Photo"
                className="h-full w-full object-cover object-center cursor-pointer"
                width={200}
                height={200}
                onClick={() => handleSmallImageClick(image)}
                priority
              />
            </div>
          ))}
      </div>
    </div>
  );
}
