import './globals.css';

import '@fontsource/saira';
import '@fontsource/dosis';

import Navbar from './Navbar';
import Footer from './Footer';

export const metadata = {
  title: 'Aung Khant Maw',
  description: 'Welcome to my portfolio website.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-saira flex flex-col justify-start min-h-screen items-center bg-background px-5 lg:px-10 xl:px-20 2xl:px-0">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
