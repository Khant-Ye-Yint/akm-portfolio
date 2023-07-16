import { getGallery } from './util/data';
import TabContainer from './components/TabContainer';

export const revalidate = 30;
export const metadata = {
  title: 'Aung Khant Maw',
};

const Home = async () => {
  const data = await getGallery();

  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        Gallery.
      </h1>
      <TabContainer data={data} />
    </main>
  );
};

export default Home;
