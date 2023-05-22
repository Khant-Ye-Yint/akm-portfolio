const Navbar = () => {
  return (
    <main className="container w-full flex flex-col justify-start items-center py-5 md:py-10 space-y-4 md:space-y-7 lg:space-y-12">
      <h1 className="text-center text-4xl font-dosis font-bold">
        Aung Khant Maw
      </h1>
      <div className="flex flex-row justify-center items-center space-x-4 md:space-x-10 lg:space-x-14 md:text-lg  text-black">
        <nav className="nav-item">gallery</nav>
        <nav className="nav-item">about</nav>
        <nav className="nav-item">commision</nav>
        <nav className="nav-item">contact</nav>
      </div>
    </main>
  );
};

export default Navbar;
