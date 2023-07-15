'use client';

import Image from 'next/legacy/image';
import ImageCarousel from './imageCarousel';
import { useState } from 'react';

const Gallery = ({ data, category }) => {
  const clickHandler = (index) => {
    setShowCarousel(true);
    setCarouselIndex(index);
  };

  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredData = data.filter((item) => item.fields.category == category);
  console.log(data);

  return (
    <div className="grid grid-cols-2 gap-4 mt-5 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {filteredData.map((img, index) => {
        return (
          <div
            className="h-[250px] md:h-[350px] lg:h-[400px] relative rounded-lg overflow-hidden hover:grayscale transition duration-1000 ease-out cursor-pointer"
            key={index}
            onClick={() => clickHandler(index)}
          >
            <Image
              src={`http:${img.fields.image.fields.file.url}`}
              alt={img.fields.text}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        );
      })}
      <ImageCarousel
        showCarousel={showCarousel}
        setShowCarousel={setShowCarousel}
        carouselIndex={carouselIndex}
        setCarouselIndex={setCarouselIndex}
        data={filteredData}
      />
    </div>
  );
};

export default Gallery;
