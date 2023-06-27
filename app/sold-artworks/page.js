import ImgOne from '../../public/images/img1.jpeg';
import ImgTwo from '../../public/images/img2.jpeg';
import ImgThree from '../../public/images/img3.jpeg';
import ImgFour from '../../public/images/img4.jpeg';

import Image from 'next/legacy/image';
import Link from 'next/link';

const About = () => {
  const imgList = [ImgOne, ImgTwo, ImgThree, ImgFour];

  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        Sold Artworks.
      </h1>

      <div className="grid w-full grid-cols-2 gap-4 mt-5 lg:mt-10 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {imgList.map((img, index) => {
          return (
            <Link key={index} href={`sold-artworks/bitch`}>
              <div className="h-[250px] md:h-[350px] lg:h-[400px] relative rounded-lg overflow-hidden hover:grayscale transition duration-1000 ease-out cursor-pointer">
                <Image
                  src={img}
                  alt={`img ${index}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default About;
