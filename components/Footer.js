import { Stack, Box } from '@chakra-ui/react';
import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';

import BrandImg from '../public/Brand.png';
import {
	SiGmail,
	SiKofi,
	SiTwitter,
	SiInstagram,
	SiFacebook,
} from 'react-icons/si';

const SocialIcon = ({ href, Icon }) => (
	<Box
		w='30px'
		h='30px'
		color='primary'
		_hover={{ cursor: 'pointer', color: 'grey' }}
	>
		<Link href={href}>
			<Icon size='30' />
		</Link>
	</Box>
);

const Footer = () => {
	return (
		<Stack
			width='100%'
			flexDir={{ base: 'column', md: 'row' }}
			justifyContent='space-between'
			alignItems='center'
			rowGap={{ base: '20px' }}
			w={{ base: '80%', md: '70%', lg: '90%', xl: '60%' }}
		>
			<Box width={300} height={200} position='relative'>
				<Image
					src={BrandImg}
					layout='fill'
					objectFit='contain'
					objectPosition='center'
					alt='brand image'
					placeholder='blur'
					priority
				/>
			</Box>
			<Box fontFamily='saira' fontSize='20px' color='gray'>
				2022
			</Box>
			<Stack
				columnGap={{ base: '20px', lg: '30px' }}
				flexDir='row'
				justifyContent='space-between'
				alignItems='center'
			>
				<SocialIcon href='#' Icon={SiKofi} />
				<SocialIcon href='#' Icon={SiTwitter} />
				<SocialIcon href='#' Icon={SiGmail} />
				<SocialIcon href='#' Icon={SiInstagram} />
				<SocialIcon href='#' Icon={SiFacebook} />
			</Stack>
		</Stack>
	);
};

export default Footer;
