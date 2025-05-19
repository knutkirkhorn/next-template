import React from 'react';

import CopyCommandButton from '@/components/copy-button';
import Header from '@/components/header';

const installCommand =
	'npx create-next-app@latest -e https://github.com/knutkirkhorn/next-template';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center px-16 py-4 bg-background">
			<Header />
			<div className="flex flex-col items-center space-y-4">
				<h1 className="mb-5 text-foreground text-center text-4xl font-bold">
					Next.js Template
				</h1>
				<div className="flex flex-col mt-4">
					<p className="mb-4 text-foreground">
						To install the template, run the following command:
					</p>
					<CopyCommandButton textToCopy={installCommand} />
				</div>
			</div>
		</main>
	);
}
