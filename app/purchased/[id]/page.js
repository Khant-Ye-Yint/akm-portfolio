import Image from 'next/image';
import { getSoldArtworks, getSoldArtworksById } from '../../util/data';
import moment from 'moment';

export const dynamicParams = false;
export const revalidate = 30;
export const metadata = {
  title: 'z3uzy | Purchased',
};

// const camelCase = (str) => {
//   return str
//     .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
//       return index == 0 ? word.toLowerCase() : word.toUpperCase();
//     })
//     .replace(/\s+/g, '');
// };

export async function generateStaticParams() {
  const data = await getSoldArtworks();

  return data.map((chunk) => ({
    id: chunk.sys.id,
  }));
}

const imageStyle = {
  borderRadius: '0.75rem',
  overflow: 'hidden',
  border: '1px solid #fff',
};

const toSentence = (str) => {
  const result = str.replace(/([A-Z])/g, ' $1');

  const final = result.charAt(0).toUpperCase() + result.slice(1);

  return final;
};

const Details = async ({ params }) => {
  const { id } = params;

  const data = await getSoldArtworksById(id);

  const name = toSentence(data.name);
  const date = moment(data.date).format('MM-DD-YYYY');

  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        {name}.
      </h1>
      <div className="flex flex-col items-center justify-center w-full my-10 space-y-5">
        <Image
          priority
          src={`http:${data.image.fields.file.url}`}
          alt="image"
          style={imageStyle}
          width={350}
          height={400}
        />
        <div className="grid grid-cols-2 gap-4 w-[300px] font-dosis text-black font-extrabold text-xl">
          <span>Name -</span>
          <span className="text-primary">{name}</span>
          <span>Date -</span>
          <span className="text-primary">{date}</span>
          <span>Price -</span>
          <span className="text-primary">{data.price}</span>
          <span>Client -</span>
          <span className="text-primary">{data.client}</span>
        </div>
      </div>
    </main>
  );
};

export default Details;
