'use client';

import { MdKeyboardArrowRight, MdCheck } from 'react-icons/md';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useState } from 'react';

const variants = {
  hover: { y: -25 },
  normal: { y: 0 },
};

const camelCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

const List = ({ data }) => (
  <div className="flex flex-row items-center self-start justify-between w-full list-none">
    <div className="w-16 ">
      <MdCheck className="flex-1 text-xl font-bold " />
    </div>
    <li>
      <span className="text-justify whitespace-pre-wrap">{data}</span>
    </li>
  </div>
);

const Card = ({ data }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      animate={hover ? 'hover' : 'normal'}
      variants={variants}
      className="w-[300px] my-10 cursor-default min-h-[400px] shadow-lg  transition-shadow ease-in-out duration-150 hover:shadow-primary  flex flex-col py-7 px-7 justify-between items-center"
    >
      <div className="flex flex-col items-center justify-center w-full space-y-5">
        <div className="flex flex-col items-center justify-center w-full space-y-1 ">
          <h3 className="text-4xl font-bold rounded-lg text-primary font-dosis">
            {data.fields.name}
          </h3>
          <div className="w-16 h-1 rounded-lg bg-primary"></div>
        </div>
        <div className="flex flex-col items-center justify-start w-full space-y-2">
          {data.fields.availableServices.map((data, index) => (
            <List data={data} key={index} />
          ))}
        </div>
      </div>
      <Link href={`/commission/${camelCase(data.fields.name)}`}>
        <button className="flex flex-row items-center justify-center py-2 mt-5 font-bold transition duration-150 ease-in rounded-md cursor-pointer text-md px-7 bg-primary text-background hover:bg-secondary">
          <MdKeyboardArrowRight className="text-2xl font-bold" /> More details
        </button>
      </Link>
    </motion.div>
  );
};

export default Card;
