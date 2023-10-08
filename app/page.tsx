import React from 'react';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24 justify-between bg-gradient-to-b from-slate-100 to-slate-200">
			<div className="flex flex-col items-center space-y-4">
				<h1 className="text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500">Next.js Template</h1>
				<div className="flex flex-col">
					<p className="text-md mb-4">To install the template, run the following command:</p>
					<code className="p-3 font-mono bg-gray-800 rounded-md text-white">
						npx create-next-app@latest -e https://github.com/knutkirkhorn/next-template
					</code>
				</div>
			</div>
		</main>
	);
}
