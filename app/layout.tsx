import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Bright Reach Media | Performance Marketing Agency',
  description: '10+ years of experience in Meta & Google Ads. $1M+ Ad Spend Managed.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#050505] text-white font-sans selection:bg-[#00FF00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
