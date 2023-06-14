'use client';

import Image from 'next/legacy/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import { HiStar } from 'react-icons/hi';

import imgOne from '../../../public/images/img1.jpeg';
import imgTwo from '../../../public/images/img2.jpeg';
import imgThree from '../../../public/images/img3.jpeg';

const capatalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const List = ({ children }) => (
  <h1 className="flex flex-row flex-wrap items-center justify-start space-x-1 text-xl font-saira">
    <HiStar /> <span>{children}</span>
  </h1>
);
// const categories = ['B&W', 'Color', 'Color and Background'];

const categories = [
  {
    type: 'B&W',
    image: imgOne,
    services: ['Black and white color', 'Sketches'],
  },
  {
    type: 'Color',
    image: imgTwo,
    services: ['Detail artwork', 'Colors'],
  },
  {
    type: 'Color and Background',
    image: imgThree,
    services: ['Detail artwork', 'Colors', 'Background'],
  },
];

const Details = ({ params }) => {
  const { slug } = params;
  const [tabIndex, setTabIndex] = useState(0);

  const img = tabIndex == 0 ? imgOne : tabIndex == 1 ? imgTwo : imgThree;

  const cappedWord = capatalize(slug);
  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        {cappedWord} Details.
      </h1>
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <div className="relative w-[300px] h-[400px] rounded-lg overflow-hidden">
          <Image
            src={img}
            alt="image"
            layout="fill"
            objectPosition="center"
            objectFit="cover"
          />
        </div>
        <Tabs
          className="flex flex-col items-center justify-center w-full my-5 space-y-5"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="flex flex-row items-center justify-center space-x-3 lg:space-x-5 bg-background">
            {categories.map((category, index) => {
              return (
                <Tab className="tab" key={index}>
                  <span
                    className={`bg-background outline-none  ${
                      tabIndex == index
                        ? 'border-b-2 border-primary text-primary'
                        : 'tabs'
                    } `}
                  >
                    {category.type}
                  </span>
                </Tab>
              );
            })}
          </TabList>
          <div>
            {categories.map((category, index) => {
              return (
                <TabPanel
                  key={index}
                  className="max-w-[600px] min-w-[400px] flex flex-col justify-center items-start space-y-2"
                >
                  {category.services.map((service, index) => {
                    return <List key={index}>{service}</List>;
                  })}
                </TabPanel>
              );
            })}
          </div>
        </Tabs>
      </div>
    </main>
  );
};

export default Details;
