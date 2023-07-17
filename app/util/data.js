import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const getGallery = async () => {
  const res = await client.getEntries({
    content_type: 'gallery',
    order: 'sys.createdAt',
  });

  return res.items;
};

const getAbout = async () => {
  const res = await client.getEntries({
    content_type: 'about',
    order: 'sys.createdAt',
  });

  return res.items;
};

const getCommision = async () => {
  const res = await client.getEntries({
    content_type: 'commision',
    order: 'sys.createdAt',
  });

  return res.items;
};

const getSpecificCommision = async (title) => {
  const res = await client.getEntries({
    content_type: 'commision',
    order: 'sys.createdAt',
    'fields.name': title,
  });

  return res.items;
};

const getSoldArtworks = async () => {
  const res = await client.getEntries({
    content_type: 'soldArtworks',
    order: 'sys.createdAt',
  });

  return res.items;
};

const getSoldArtworksById = async (id) => {
  const res = await client.getEntry(id);

  return res.fields;
};

const getContact = async () => {
  const res = await client.getEntries({
    content_type: 'contact',
    order: 'sys.createdAt',
  });

  return res.items;
};

export {
  getGallery,
  getAbout,
  getCommision,
  getContact,
  getSpecificCommision,
  getSoldArtworks,
  getSoldArtworksById,
};
