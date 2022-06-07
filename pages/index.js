import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react';
import Layout from '../components/Layout';

import Gallery from '../components/Gallery';

const Home = () => {
	return (
		<Layout label='Gallery .'>
			<Tabs
				colorScheme='pink'
				color='gray'
				align='center'
				fontSize='24px'
				fontFamily='saira'
				isFitted={true}
			>
				<TabList w='0.5' border='none'>
					<Tab _focus={{ borderBottom: '1px primary' }}>artworks</Tab>
					<Tab _focus={{ borderBottom: '1px primary' }}>characters</Tab>
					<Tab _focus={{ borderBottom: '1px primary' }}>commision</Tab>
					<Tab _focus={{ borderBottom: '1px primary' }}>portrait</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Gallery />
					</TabPanel>
					<TabPanel>characters</TabPanel>
					<TabPanel>commision</TabPanel>
					<TabPanel>portrait</TabPanel>
				</TabPanels>
			</Tabs>
		</Layout>
	);
};

export default Home;
