import {
  SiKofi,
  SiTwitter,
  SiFacebook,
  SiGmail,
  SiInstagram,
} from 'react-icons/si';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';

const Footer = () => {
  return (
    <footer className="container flex flex-col items-center justify-between py-5 space-y-3 md:flex-row md:py-10">
      <div className="relative h-[10vh] w-[200px]">
        <Image
          src={Logo}
          alt="Logo"
          priority
          fill
          sizes="40vw"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <span className="flex-1 text-center text-black">
        &copy;{new Date().getFullYear()}
      </span>
      <div className="flex flex-row items-center justify-between w-[200px]">
        <Link
          href="https://www.ko-fi.com/z3uzy"
          target="_blank"
          className="icon"
        >
          <span className="text-3xl">
            <SiKofi />
          </span>
        </Link>
        <Link
          href="https://www.twitter.com/Blue8ctopus?t=7nd9e5IIw40PK5EvgNAKsQ&s=09"
          target="_blank"
          className="icon"
        >
          <SiTwitter />
        </Link>
        <Link
          href="https://aungkhantmaw.akr@gmail.com"
          target="_blank"
          className="icon"
        >
          <SiGmail />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=100008436343196"
          target="_blank"
          className="icon"
        >
          <SiFacebook />
        </Link>
        <Link
          href="https://www.instagram.com/z3uzy/"
          target="_blank"
          className="icon"
        >
          <SiInstagram />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
