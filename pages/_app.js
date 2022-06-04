import { ChakraProvider } from '@chakra-ui/react';
import theme from '../Theme/theme';

import '@fontsource/dosis/700.css';
import '@fontsource/saira/400.css';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
