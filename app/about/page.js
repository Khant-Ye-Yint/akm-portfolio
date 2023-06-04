import Image from 'next/legacy/image';

import Img from '../../public/images/img1.jpeg';

const imageStyle = {
  borderRadius: '0.5rem',
  overflow: 'hidden',
  border: '1px solid #fff',
};

const About = () => {
  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        About Me.
      </h1>
      <div className="flex flex-col items-center justify-center my-5 space-y-4 md:justify-between md:space-x-5 md:flex-row-reverse">
        <div className="relative w-full h-[400px] md:h-[450px] 2xl:h-[600px] md:flex-1">
          <Image
            priority
            src={Img}
            alt="image"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            style={imageStyle}
          />
        </div>
        <p className="flex-1 text-lg text-justify 2xl:text-2xl font-dosis">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </main>
  );
};

export default About;
