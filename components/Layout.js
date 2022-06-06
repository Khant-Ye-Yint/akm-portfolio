import { VStack, Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ label, children }) => {
	return (
		<VStack
			minH='100vh'
			justifyContent='space-between'
			// px={{ base: '20px', md: '50px', lg: '70px', xl: '350px' }}
			gap='30px'
			backgroundColor='background'
			py='30px'
		>
			<Navbar />
			<Box
				fontSize='44px'
				fontWeight='bold'
				fontFamily='dosis'
				color='primary'
				w={{ base: '80%', md: '70%', lg: '90%', xl: '60%' }}
			>
				{label}
			</Box>
			<Box flex='1' w={{ base: '80%', md: '70%', lg: '90%', xl: '60%' }}>
				{children}
			</Box>
			<Footer />
		</VStack>
	);
};

export default Layout;
