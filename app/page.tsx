import CopyButton from '@/components/copy-button';
import Header from '@/components/header';
import React from 'react';

const installCommand = 'npx create-next-app@latest -e https://github.com/knutkirkhorn/next-template';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center px-16 py-4 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-gray-900 dark:to-black">
			<Header />
			<div className="flex flex-col items-center space-y-4">
				<h1 className="text-4xl font-bold text-center mb-5 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500 dark:from-gray-500 dark:to-gray-200">
					Next.js Template
				</h1>
				<div className="flex flex-col">
					<p className="text-md mb-4">To install the template, run the following command:</p>
					<CopyButton textToCopy={installCommand} />
				</div>
			</div>
		</main>
	);
}
