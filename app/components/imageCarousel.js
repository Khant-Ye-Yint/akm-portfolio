import { Carousel } from 'react-responsive-carousel';
import { motion, AnimatePresence } from 'framer-motion';

import ImageOne from '../../public/images/img1.jpeg';
import ImageTwo from '../../public/images/img2.jpeg';
import ImageThree from '../../public/images/img3.jpeg';
import ImageFour from '../../public/images/img4.jpeg';

import { MdArrowForwardIos, MdArrowBackIos, MdCircle } from 'react-icons/md';
import { RiCloseCircleLine } from 'react-icons/ri';

import Image from 'next/legacy/image';

const ImageCarousel = ({
  showCarousel,
  setShowCarousel,
  carouselIndex,
  setCarouselIndex,
}) => {
  const images = [ImageOne, ImageTwo, ImageThree, ImageFour];

  return (
    <AnimatePresence>
      {showCarousel ? (
        <motion.div
          className={`fixed top-0 left-0 z-20 select-none backdrop-blur-md bg-black bg-opacity-30 w-full h-screen block`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scaleY: 0.3 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.5 }}
            transition={{ ease: 'linear', duration: 0.3 }}
          >
            <div
              className="absolute z-30 text-4xl font-bold bg-black rounded-full cursor-pointer text-background top-5 right-5 hover:text-secondary"
              onClick={() => setShowCarousel(false)}
            >
              <RiCloseCircleLine />
            </div>
            <Carousel
              onChange={(index) => setCarouselIndex(index)}
              selectedItem={carouselIndex}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <div
                    className="absolute z-20 text-3xl cursor-pointer left-4 top-1/2 text-primary hover:text-secondary"
                    onClick={onClickHandler}
                    title={label}
                  >
                    <MdArrowBackIos />
                  </div>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <div
                    className="absolute z-20 text-3xl cursor-pointer right-4 top-1/2 text-primary hover:text-secondary"
                    onClick={onClickHandler}
                    title={label}
                  >
                    <MdArrowForwardIos />
                  </div>
                )
              }
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      aria-label={`Selected: ${label} ${index + 1}`}
                      title={`Selected: ${label} ${index + 1}`}
                      style={{ display: 'inline-block' }}
                    >
                      <div className="text-primary">
                        <MdCircle size={15} />
                      </div>
                    </li>
                  );
                }
                return (
                  <li
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                    style={{ display: 'inline-block' }}
                    className="text-black"
                  >
                    <MdCircle size={15} />
                  </li>
                );
              }}
            >
              {images.map((img, index) => {
                return (
                  <div className="relative w-full h-screen" key={index}>
                    <Image
                      src={img}
                      alt="imageOne"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>
                );
              })}
            </Carousel>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ImageCarousel;
