import ImgOne from '../../public/images/img1.jpeg';
import ImgTwo from '../../public/images/img2.jpeg';
import ImgThree from '../../public/images/img3.jpeg';
import ImgFour from '../../public/images/img4.jpeg';

import Image from 'next/image';

const Gallery = () => {
  const imgList = [ImgOne, ImgTwo, ImgThree, ImgFour];

  return (
    <div className="grid grid-cols-2 gap-4 mt-5 md:grid-cols-3 lg:grid-cols-4">
      {imgList.map((img, index) => {
        return (
          <div
            className="h-[250px] md:h-[350px] lg:h-[400px] relative rounded-lg overflow-hidden hover:grayscale transition duration-1000 ease-out cursor-pointer"
            key={index}
          >
            <Image
              src={img}
              alt="img1"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
