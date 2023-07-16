'use client';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { HiStar } from 'react-icons/hi';
import { useState } from 'react';
import Image from 'next/legacy/image';

const List = ({ children }) => (
  <h1 className="flex flex-row flex-wrap items-center justify-start space-x-1 text-xl font-saira">
    <HiStar /> <span>{children}</span>
  </h1>
);

const categories = ['B&W', 'Color', 'Color and Background'];

const TabContainer = ({ data }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const imgOne = 'http:' + data[0].fields.bAndWImage.fields.file.url;
  const imgTwo = 'http:' + data[0].fields.colorImage.fields.file.url;
  const imgThree =
    'http:' + data[0].fields.colorAndBackgroundImage.fields.file.url;
  const img = tabIndex == 0 ? imgOne : tabIndex == 1 ? imgTwo : imgThree;

  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <div className="relative w-[300px] h-[400px] rounded-lg overflow-hidden">
        <Image
          src={img}
          priority
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
                  {category}
                </span>
              </Tab>
            );
          })}
        </TabList>
        <div>
          <TabPanel className="max-w-[600px] min-w-[350px] flex flex-col justify-center items-start space-y-2">
            {data[0].fields.bAndWhiteText.map((service, index) => {
              return <List key={index}>{service}</List>;
            })}
          </TabPanel>
          <TabPanel className="max-w-[600px] min-w-[350px] flex flex-col justify-center items-start space-y-2">
            {data[0].fields.colorText.map((service, index) => {
              return <List key={index}>{service}</List>;
            })}
          </TabPanel>
          <TabPanel className="max-w-[600px] min-w-[350px] flex flex-col justify-center items-start space-y-2">
            {data[0].fields.colorAndBackgroundText.map((service, index) => {
              return <List key={index}>{service}</List>;
            })}
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabContainer;
