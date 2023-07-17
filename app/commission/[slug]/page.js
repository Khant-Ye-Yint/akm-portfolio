import { getSpecificCommision, getCommision } from '../../util/data';

import TabContainer from '../TabContainer';

export const dynamicParams = false;
export const revalidate = 30;
export const metadata = {
  title: 'z3uzy | Commission',
};

const camelCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

export async function generateStaticParams() {
  const data = await getCommision();

  return data.map((chunk) => ({
    slug: camelCase(chunk.fields.name),
  }));
}

const toSentence = (str) => {
  const result = str.replace(/([A-Z])/g, ' $1');

  const final = result.charAt(0).toUpperCase() + result.slice(1);

  return final;
};

const Details = async ({ params }) => {
  const { slug } = params;

  const title = toSentence(slug);
  const data = await getSpecificCommision(title);

  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        {title} Details.
      </h1>

      <TabContainer data={data} />
    </main>
  );
};

export default Details;
