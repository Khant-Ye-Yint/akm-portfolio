import { VStack, Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ label, children }) => {
	return (
		<VStack
			minH='100vh'
			justifyContent='space-between'
			px={{ base: '20px', md: '50px', lg: '70px', xl: '350px' }}
			gap='30px'
			backgroundColor='background'
			py='30px'
		>
			<Navbar />
			<Box
				fontSize='44px'
				fontWeight='bold'
				fontFamily='dosis'
				w='full'
				color='primary'
			>
				{label}
			</Box>
			<Box flex='1' w='full'>
				{children}
			</Box>
			<Footer />
		</VStack>
	);
};

export default Layout;
