'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <main className="container flex flex-col items-center justify-start w-full py-5 space-y-4 md:py-10 md:space-y-7 lg:space-y-12">
      <h1 className="text-4xl font-bold text-center font-dosis">
        Aung Khant Maw
      </h1>
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
        <Link href="/commision">
          <nav
            className={`nav-item ${
              pathname.includes('/commision') && 'text-primary'
            }`}
          >
            commision
          </nav>
        </Link>
        <Link href="/contact">
          <nav
            className={`nav-item ${pathname == '/contact' && 'text-primary'}`}
          >
            contact
          </nav>
        </Link>
        <Link href="/sold-artworks">
          <nav
            className={`nav-item text-center ${
              pathname.includes('/sold-artworks') && 'text-primary'
            }`}
          >
            sold-artworks
          </nav>
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
