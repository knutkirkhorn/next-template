import {ThemeProvider} from '@/components/theme-provider';
import './globals.css';
import type {Metadata, Viewport} from 'next';
import {Inter} from 'next/font/google';
import React from 'react';
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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<TooltipProvider delayDuration={0}>
						{children}
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
