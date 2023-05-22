import {
  SiKofi,
  SiTwitter,
  SiFacebook,
  SiGmail,
  SiInstagram,
} from 'react-icons/si';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="container flex flex-col md:flex-row justify-between items-center py-5 md:py-10 space-y-3">
      <h1 className="text-center text-4xl font-dosis font-bold">
        Aung Khant Maw
      </h1>
      <span className="text-black">&copy;{new Date().getFullYear()}</span>
      <div className="flex flex-row justify-center items-center space-x-5">
        <Link href="https://www.ko-fi.com" target="_blank" className="icon">
          <span className="text-3xl">
            <SiKofi />
          </span>
        </Link>
        <Link href="https://www.twitter.com" target="_blank" className="icon">
          <SiTwitter />
        </Link>
        <Link href="https://www.gmail.com" target="_blank" className="icon">
          <SiGmail />
        </Link>
        <Link href="https://www.facebook.com" target="_blank" className="icon">
          <SiFacebook />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" className="icon">
          <SiInstagram />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
