import { VStack, Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ label, children }) => {
	return (
		<VStack
			justifyContent='space-between'
			rowGap='30px'
			backgroundColor='background'
			py='30px'
		>
			<VStack minH='100vh' minW='60%' rowGap='20px'>
				<Navbar />
				<Box
					fontSize='44px'
					fontWeight='bold'
					fontFamily='dosis'
					color='primary'
					alignSelf='flex-start'
				>
					{label}
				</Box>
				<Box flex='1'>{children}</Box>
				<Footer />
			</VStack>
		</VStack>
	);
};

export default Layout;
