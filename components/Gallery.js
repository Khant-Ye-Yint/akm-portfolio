import { useState, useEffect } from 'react';

import { Grid, GridItem, Box } from '@chakra-ui/react';
import PicCard from './PicCard';

import ImageCarousel from './ImageCarousel';

import ImgOne from '../public/pics/one.png';
import ImgTwo from '../public/pics/two.png';
import ImgThree from '../public/pics/three.png';
import ImgFour from '../public/pics/four.png';

import useScrollControl from '../hooks/useScrollControl';

const Gallery = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showCrousel, setShowCrousel] = useState(false);

	const { allowScroll, preventScroll } = useScrollControl();

	useEffect(() => {
		showCrousel ? preventScroll() : allowScroll();
	}, [showCrousel, allowScroll, preventScroll]);

	return (
		<Box>
			<Grid
				templateColumns={{
					base: 'repeat(1,1fr)',
					md: 'repeat(2,1fr)',
					lg: 'repeat(3,1fr)',
					xl: 'repeat(4,1fr)',
				}}
				rowGap='20px'
				columnGap='20px'
				mt='20px'
				autoColumns='auto'
			>
				{[ImgOne, ImgTwo, ImgThree, ImgFour].map((img, index) => (
					<GridItem
						key={index}
						onClick={() => {
							setCurrentIndex(index);
							setShowCrousel(true);
						}}
					>
						<PicCard alt='pic two' src={img} />
					</GridItem>
				))}
			</Grid>
			<ImageCarousel
				showCrousel={showCrousel}
				setShowCrousel={setShowCrousel}
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
			/>
		</Box>
	);
};

export default Gallery;
