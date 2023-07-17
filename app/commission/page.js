import Card from './Card';

import { getCommision } from '../util/data';

export const revalidate = 30;
export const metadata = {
  title: 'z3uzy | Commision',
};

const Comission = async () => {
  const commisionData = await getCommision();

  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        Commision.
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center space-y-10 md:space-y-0 lg:space-x-16">
        {commisionData.map((chunk, index) => (
          <Card data={chunk} key={index} />
        ))}
      </div>
    </main>
  );
};

export default Comission;
