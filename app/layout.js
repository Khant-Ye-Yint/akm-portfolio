import './globals.css';

import '@fontsource/saira';
import '@fontsource/dosis';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'react-tabs/style/react-tabs.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Aung Khant Maw',
  description:
    "Welcome to my portfolio website. I'm Aung Khant Maw, a professional digital artist.",
  keywords: [
    'Aung Khant Maw',
    'Digital Arts',
    'Artist',
    'Illustration',
    'Myanmar',
    'Dreamverse',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-start min-h-screen px-5 font-saira bg-background lg:px-10 xl:px-20 2xl:px-0">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
