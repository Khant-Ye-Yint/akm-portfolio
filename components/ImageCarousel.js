import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactDom from 'react-dom';

import { Box, HStack } from '@chakra-ui/react';
import {
	MdArrowRight,
	MdArrowLeft,
	MdClose,
	MdCatchingPokemon,
} from 'react-icons/md';

import Image from 'next/image';

import ImgOne from '../public/pics/one.png';
import ImgTwo from '../public/pics/two.png';
import ImgThree from '../public/pics/three.png';
import ImgFour from '../public/pics/four.png';

const ImageCarousel = ({
	showCrousel,
	setShowCrousel,
	currentIndex,
	setCurrentIndex,
}) => {
	return (
		<Box
			position='fixed'
			top='0'
			left='0'
			h='100vh'
			w='100vw'
			bg='background'
			display={showCrousel ? 'block' : 'none'}
			zIndex={500}
		>
			<Box
				position='absolute'
				left={5}
				top={5}
				cursor='pointer'
				color='primary'
				_hover={{ color: 'gray' }}
				onClick={() => setShowCrousel(false)}
				zIndex={1000}
			>
				<MdClose size={42} />
			</Box>
			<Carousel
				onChange={(index) => setCurrentIndex(index)}
				selectedItem={currentIndex}
				renderArrowPrev={(onClickHandler, hasPrev, label) =>
					hasPrev && (
						<Box
							type='button'
							onClick={onClickHandler}
							title={label}
							position='absolute'
							zIndex={2}
							top='calc(50% - 15px)'
							width={30}
							height={30}
							cursor='pointer'
							left={15}
							color='black'
							justifyContent='center'
							alignItems='center'
						>
							<MdArrowLeft size='42px' />
						</Box>
					)
				}
				renderArrowNext={(onClickHandler, hasNext, label) =>
					hasNext && (
						<Box
							type='button'
							onClick={onClickHandler}
							title={label}
							position='absolute'
							zIndex={2}
							top='calc(50% - 15px)'
							width={30}
							height={30}
							cursor='pointer'
							right={15}
							color='black'
							justifyContent='center'
							alignItems='center'
						>
							<MdArrowRight size='42px' />
						</Box>
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
								<Box color='primary'>
									<MdCatchingPokemon size={20} />
								</Box>
							</li>
						);
					}
					return (
						<li
							onClick={onClickHandler}
							onKeyDown={onClickHandler}
							value={index}
							key={index}
							role='button'
							tabIndex={0}
							title={`${label} ${index + 1}`}
							aria-label={`${label} ${index + 1}`}
							style={{ display: 'inline-block' }}
						>
							<MdCatchingPokemon size={20} />
						</li>
					);
				}}
			>
				{[ImgOne, ImgTwo, ImgThree, ImgFour].map((img, index) => (
					<HStack w='full' justifyContent='center' key={index}>
						<Box position='relative' h='100vh' w='800px'>
							<Image
								src={img}
								alt='two'
								h='full'
								w='300px'
								layout='fill'
								objectFit='cover'
								objectPosition='center'
								placeholder='blur'
							/>
						</Box>
					</HStack>
				))}
			</Carousel>
		</Box>
	);
};

export default ImageCarousel;
