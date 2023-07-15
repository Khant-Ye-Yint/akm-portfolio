'use client';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import Gallery from './gallery';

const TabContainer = ({ data }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const categories = ['artworks', 'characters', 'comission', 'portraits'];

  return (
    <div>
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
                  className={`bg-background outline-none ${
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
              <Gallery data={data} category={category} />
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
};

export default TabContainer;
