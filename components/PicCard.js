import { Box } from '@chakra-ui/react';
import Image from 'next/image';

const PicCard = ({ alt, src }) => {
	return (
		<Box
			position='relative'
			h='360px'
			w='270px'
			borderRadius='13px'
			overflow='hidden'
			_hover={{ cursor: 'pointer', filter: 'grayscale(100%)' }}
			p='0'
			m='0'
			transitionDuration='1.5s'
		>
			<Image
				src={src}
				alt={alt}
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>
		</Box>
	);
};

export default PicCard;
