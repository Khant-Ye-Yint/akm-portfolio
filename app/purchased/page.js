import Image from 'next/legacy/image';
import Link from 'next/link';
import { getSoldArtworks } from '../util/data';

export const revalidate = 30;
export const metadata = {
  title: 'z3uzy | Purchased',
};

const camelCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

const About = async () => {
  const data = await getSoldArtworks();
  console.log(data);

  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        Purchased Artworks.
      </h1>

      <div className="grid w-full grid-cols-2 gap-4 mt-5 lg:mt-10 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {data.map((img, index) => {
          return (
            <Link key={index} href={`purchased/${camelCase(img.sys.id)}`}>
              <div className="h-[250px] md:h-[350px] lg:h-[400px] relative rounded-lg overflow-hidden hover:grayscale transition duration-1000 ease-out cursor-pointer">
                <Image
                  src={`http:${img.fields.image.fields.file.url}`}
                  alt={img.fields.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default About;
