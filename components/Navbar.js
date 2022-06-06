import { VStack, Box, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BrandImg from '../public/Brand.png';

const NavLink = ({ text, href }) => {
	const router = useRouter();
	const { asPath } = router;

	return (
		<Box _hover={{ color: 'primary' }} color={asPath === href && 'primary'}>
			<Link href={href}>{text}</Link>
		</Box>
	);
};

const Navbar = () => {
	return (
		<VStack
			height='30vh'
			gap='30px'
			w={{ base: '80%', md: '70%', lg: '90%', xl: '60%' }}
		>
			<Box w='400px' h='200px' position='relative'>
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
			<HStack
				fontFamily='saira'
				fontSize='16px'
				fontWeight='normal'
				color='grey'
				columnGap={['20px', '50px', '85px']}
				rowGap='30px'
				flexWrap='wrap'
				justifyContent='center'
			>
				<NavLink text='gallery' href='/' />
				<NavLink text='about' href='/about' />
				<NavLink text='commision' href='/commision' />
				<NavLink text='contact' href='/contact' />
			</HStack>
		</VStack>
	);
};

export default Navbar;
