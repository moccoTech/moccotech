'use client';

import { Montserrat_Alternates, Montserrat } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'react-hot-toast';

import './globals.css';
import { ModalProvider } from './context/ModalContext';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const headingsFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-headings',
});
const bodyFont = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-body',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${headingsFont.variable} ${bodyFont.variable} font-body`}
      >
        <ModalProvider>
          <NextTopLoader color="#6366f1" showSpinner={false} />
          <Toaster position="top-center" />
          <Header />
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
        </ModalProvider>
      </body>
    </html>
  );
}
