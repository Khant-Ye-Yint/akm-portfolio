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
		<VStack width='100%' height='30vh' gap='30px' mt='10px'>
			<Box width={500} height={250} position='relative'>
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
				gap='85px'
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
