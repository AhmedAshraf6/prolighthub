import TopNavbar from '@/components/shared-component/TopNavbar';
import './globals.css';
import { Inter } from 'next/font/google';
import MainProvider from '@/contexts/MainContext';
import AsideNavbar from '@/components/shared-component/AsideNavbar';
import Navbar from '@/components/shared-component/Navbar';
import Footer from '@/components/shared-component/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Prolighthub',
  description: 'Prolighthub',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MainProvider>
          <TopNavbar />
          <Navbar />
          {/* Responsive Navbar */}
          <div>
            <AsideNavbar />
          </div>
          {children}
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
