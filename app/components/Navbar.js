import Link from 'next/link';

const Navbar = () => {
  return (
    <main className="container flex flex-col items-center justify-start w-full py-5 space-y-4 md:py-10 md:space-y-7 lg:space-y-12">
      <h1 className="text-4xl font-bold text-center font-dosis">
        Aung Khant Maw
      </h1>
      <div className="flex flex-row items-center justify-center space-x-4 text-black md:space-x-10 lg:space-x-14 md:text-lg">
        <Link href="/">
          <nav className="nav-item">gallery</nav>
        </Link>
        <Link href="/about">
          <nav className="nav-item">about</nav>
        </Link>
        <Link href="/commision">
          <nav className="nav-item">commision</nav>
        </Link>
        <Link href="/contact">
          <nav className="nav-item">contact</nav>
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
