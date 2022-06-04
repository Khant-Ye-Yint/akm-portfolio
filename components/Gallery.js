import { Grid, GridItem } from '@chakra-ui/react';
import PicCard from './PicCard';

import ImgOne from '../public/pics/one.png';
import ImgTwo from '../public/pics/two.png';
import ImgThree from '../public/pics/three.png';
import ImgFour from '../public/pics/four.png';

const Gallery = () => {
	return (
		<Grid templateColumns='repeat(4,1fr)' rowGap='20px' mt='20px'>
			<GridItem>
				<PicCard alt='pic one' src={ImgOne} />
			</GridItem>
			<GridItem>
				<PicCard alt='pic two' src={ImgTwo} />
			</GridItem>
			<GridItem>
				<PicCard alt='pic three' src={ImgThree} />
			</GridItem>
			<GridItem>
				<PicCard alt='pic four' src={ImgFour} />
			</GridItem>
			<GridItem>
				<PicCard alt='pic one' src={ImgOne} />
			</GridItem>
			<GridItem>
				<PicCard alt='pic two' src={ImgTwo} />
			</GridItem>
			<GridItem>
				<PicCard alt='pic three' src={ImgThree} />
			</GridItem>
			<GridItem>
				<PicCard alt='pic four' src={ImgFour} />
			</GridItem>
		</Grid>
	);
};

export default Gallery;
