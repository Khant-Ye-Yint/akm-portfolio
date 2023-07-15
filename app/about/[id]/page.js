export const dynamicParams = false;

export async function generateStaticParams() {
  const data = [{ id: '1' }, { id: '2' }, { id: '3' }];

  return data.map((chunk) => ({
    id: chunk.id,
  }));
}

const AboutPage = ({ params }) => {
  return <div>{params.id}</div>;
};

export default AboutPage;
