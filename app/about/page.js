import Image from 'next/image';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getAbout } from '../util/data';

const imageStyle = {
  borderRadius: '0.75rem',
  overflow: 'hidden',
  border: '1px solid #fff',
};

export const revalidate = 30;
export const metadata = {
  title: 'Aung Khant Maw | About',
};

const Bold = ({ children }) => <span className="font-bold">{children}</span>;

const Text = ({ children }) => <p className="text-justify">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};

const About = async () => {
  const aboutData = await getAbout();

  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        About Me.
      </h1>
      <div className="flex flex-col items-center justify-center my-10 space-y-4 md:justify-between md:space-x-5 lg:flex-row-reverse">
        <div className="relative w-full flex justify-center items-center md:h-[450px] 2xl:h-[600px] md:flex-1">
          <Image
            priority
            src={`http:${aboutData[0].fields.image.fields.file.url}`}
            alt="image"
            style={imageStyle}
            width={450}
            height={500}
          />
        </div>
        <div className="flex-1 text-lg text-justify xl:text-xl 2xl:text-2xl font-dosis">
          {documentToReactComponents(aboutData[0].fields.description, options)}
        </div>
      </div>
    </main>
  );
};

export default About;
