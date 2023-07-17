'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '../../public/images/logo.png';

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <main className="container flex flex-col items-center justify-start w-full py-5 space-y-4 md:py-10 md:space-y-7 lg:space-y-12">
      <div className="relative h-[10vh] w-full">
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

      <div className="flex flex-row items-center justify-center space-x-4 text-black md:space-x-10 lg:space-x-14 md:text-lg">
        <Link href="/">
          <nav className={`nav-item ${pathname == '/' && 'text-primary'}`}>
            gallery
          </nav>
        </Link>
        <Link href="/about">
          <nav className={`nav-item ${pathname == '/about' && 'text-primary'}`}>
            about
          </nav>
        </Link>
        <Link href="/commission">
          <nav
            className={`nav-item ${
              pathname.includes('/commission') && 'text-primary'
            }`}
          >
            commission
          </nav>
        </Link>
        <Link href="/contact">
          <nav
            className={`nav-item ${pathname == '/contact' && 'text-primary'}`}
          >
            contact
          </nav>
        </Link>
        <Link href="/purchased">
          <nav
            className={`nav-item text-center ${
              pathname.includes('/purchased') && 'text-primary'
            }`}
          >
            purchased
          </nav>
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
