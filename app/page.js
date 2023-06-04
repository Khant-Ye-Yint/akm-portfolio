'use client';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';

import Gallery from './components/gallery';
import ImageCarousel from './components/imageCarousel';

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const categories = ['artworks', 'characters', 'comission', 'portrait'];

  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        Gallery.
      </h1>
      <Tabs
        className="my-5"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="flex flex-row items-center justify-center space-x-3 lg:space-x-5 bg-background">
          {categories.map((category, index) => {
            return (
              <Tab className="tab" key={index}>
                <span
                  className={`bg-background ${
                    tabIndex == index
                      ? 'border-b-2 border-primary text-primary'
                      : 'tabs'
                  } `}
                >
                  {category}
                </span>
              </Tab>
            );
          })}
        </TabList>

        {categories.map((category, index) => {
          return (
            <TabPanel key={index}>
              <Gallery
                setCarouselIndex={setCarouselIndex}
                setShowCarousel={setShowCarousel}
              />
            </TabPanel>
          );
        })}
      </Tabs>
      <ImageCarousel
        showCarousel={showCarousel}
        setShowCarousel={setShowCarousel}
        carouselIndex={carouselIndex}
        setCarouselIndex={setCarouselIndex}
      />
    </main>
  );
};

export default Home;
