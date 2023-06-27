import Image from 'next/image';

import ImageOne from '../../../public/images/img1.jpeg';

const imageStyle = {
  borderRadius: '0.75rem',
  overflow: 'hidden',
  border: '1px solid #fff',
};

const Details = ({ params }) => {
  const { slug } = params;
  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        {slug}.
      </h1>
      <div className="flex flex-col items-center justify-center w-full my-10 space-y-5">
        <Image
          priority
          src={ImageOne}
          alt="image"
          style={imageStyle}
          width={350}
        />
        <div className="grid grid-cols-2 gap-4 w-[300px] font-dosis text-black font-extrabold text-xl">
          <span>Name -</span>
          <span className="text-primary">Bitch</span>
          <span>Date -</span>
          <span className="text-primary">20th June, 2022</span>
          <span>Price -</span>
          <span className="text-primary">$300</span>
          <span>Client -</span>
          <span className="text-primary">Tun Lin Aung</span>
        </div>
      </div>
    </main>
  );
};

export default Details;
