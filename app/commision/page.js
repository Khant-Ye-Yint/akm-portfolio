import Card from './Card';

const Comission = () => {
  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        Commision.
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center space-y-10 md:space-y-0 lg:space-x-16">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Comission;
