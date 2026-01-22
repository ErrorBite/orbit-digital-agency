import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Orbit Digital Agency - Web Design & Development',
  description:
    'Orbit is a full-service digital agency transforming brands through code and design. We create beautiful, high-performance digital experiences.',
  keywords: 'web design, web development, digital agency, UI/UX design, branding',
  authors: [{ name: 'Orbit Digital Agency' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orbit.agency',
    title: 'Orbit Digital Agency',
    description: 'Transforming brands through code and design.',
    images: [
      {
        url: 'https://orbit.agency/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Orbit Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orbit Digital Agency',
    description: 'Transforming brands through code and design.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
