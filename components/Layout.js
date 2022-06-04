import { VStack, Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ label, children }) => {
	return (
		<VStack
			minH='100vh'
			justifyContent='space-between'
			px='300px'
			gap='30px'
			backgroundColor='background'
		>
			<Navbar />
			<Box
				fontSize='48px'
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
