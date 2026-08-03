// src/app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import { Instrument_Serif, Figtree } from 'next/font/google';
import type { Metadata } from 'next';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif-display',
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-sans-body',
});

export const metadata: Metadata = {
  title: 'Anderson Whittle — Founder & Engineer',
  description:
    'Founder & Engineer building AI you can trust — WYEA · VybeOS. Grounded, verifiable systems for legal practices and modern brands.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${figtree.variable}`}>
      <body className="bg-black text-white font-sans antialiased">{children}</body>
    </html>
  );
}
