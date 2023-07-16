import Image from 'next/image';
import Img from '../../public/images/img3.jpeg';
import FormComponent from './FormComponent';

export const revalidate = 0;
export const metadata = {
  title: 'Aung Khant Maw | Contact',
};

const imageStyle = {
  borderRadius: '0.75rem',
  overflow: 'hidden',
  border: '1px solid #fff',
};

const Contact = () => {
  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        Contact Me.
      </h1>
      <div className="flex flex-col items-center justify-center my-10 md:space-y-10 md:justify-between md:space-x-5 lg:flex-row-reverse">
        <div className="relative w-full hidden md:flex justify-center select-none items-center md:h-[450px] 2xl:h-[600px] md:flex-1">
          <Image
            priority
            src={Img}
            alt="image"
            style={imageStyle}
            width={450}
          />
        </div>
        <FormComponent />
      </div>
    </main>
  );
};

export default Contact;
