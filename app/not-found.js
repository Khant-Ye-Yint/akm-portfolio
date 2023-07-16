import Image from 'next/image';
import NotFoundImage from '../public/images/page_not_found.svg';
import Link from 'next/link';

export const metadata = {
  title: '404 Page not found',
};

const NotFound = () => {
  return (
    <main className="container flex flex-col items-center justify-start flex-1 gap-5 my-10">
      <Image
        src={NotFoundImage}
        alt="Page not found"
        className="min-w-[300px] max-w-[400px]"
      />
      <h1 className="text-xl">Opps! Page Not Found.</h1>
      <Link
        href="/"
        className="py-2 font-bold transition duration-150 ease-in rounded-md cursor-pointer text-md px-7 bg-primary text-background hover:bg-secondary"
      >
        Go Back to home
      </Link>
    </main>
  );
};

export default NotFound;
