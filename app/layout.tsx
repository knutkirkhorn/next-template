import './globals.css';

import React from 'react';
import type {Metadata, Viewport} from 'next';
import {Inter} from 'next/font/google';
import {ThemeProvider} from 'next-themes';

import {Toaster} from '@/components/ui/sonner';
import {TooltipProvider} from '@/components/ui/tooltip';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Next.js Template',
	description: 'Template for building Next.js apps',
};

export const viewport: Viewport = {
	themeColor: [
		{media: '(prefers-color-scheme: light)', color: 'white'},
		{media: '(prefers-color-scheme: dark)', color: 'black'},
	],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<TooltipProvider delayDuration={0}>
						{children}
						<Toaster />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
