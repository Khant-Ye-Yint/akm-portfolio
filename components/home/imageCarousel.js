import { Carousel } from 'react-responsive-carousel';

import ImageOne from '../../public/images/img1.jpeg';
import ImageTwo from '../../public/images/img2.jpeg';
import ImageThree from '../../public/images/img3.jpeg';
import ImageFour from '../../public/images/img4.jpeg';

import {
  MdArrowForwardIos,
  MdArrowBackIos,
  MdClose,
  MdFavorite,
} from 'react-icons/md';

import Image from 'next/legacy/image';

const ImageCarousel = ({
  showCarousel,
  setShowCarousel,
  carouselIndex,
  setCarouselIndex,
}) => {
  const images = [ImageOne, ImageTwo, ImageThree, ImageFour];

  return (
    <div
      className={`fixed top-0 left-0 z-20 select-none w-full h-screen bg-black ${
        showCarousel ? 'block' : 'hidden'
      }`}
    >
      <div
        className="absolute z-30 text-4xl cursor-pointer top-5 right-5 text-primary hover:text-secondary"
        onClick={() => setShowCarousel(false)}
      >
        <MdClose />
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
                  <MdFavorite size={20} />
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
              className="text-ascent"
            >
              <MdFavorite size={20} />
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
    </div>
  );
};

export default ImageCarousel;
