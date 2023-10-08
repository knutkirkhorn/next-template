import CopyButton from '@/components/copy-button';
import ThemeSwitcherButton from '@/components/theme-switcher-button';
import {Button} from '@/components/ui/button';
import {Github, Twitter} from 'lucide-react';
import React from 'react';

const installCommand = 'npx create-next-app@latest -e https://github.com/knutkirkhorn/next-template';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-16 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-gray-900 dark:to-black">
			<header className="flex justify-end items-center w-full mb-8 sm:mb-0">
				<nav className="flex space-x-4">
					<ThemeSwitcherButton />
					<Button asChild>
						<a
							href="https://github.com/knutkirkhorn/next-template"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Github className="w-4 h-4" />
						</a>
					</Button>
					<Button asChild>
						<a
							href="https://twitter.com/knutkirkhorn"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Twitter className="w-4 h-4" />
						</a>
					</Button>
				</nav>
			</header>
			<div className="flex flex-col items-center space-y-4">
				<h1 className="text-4xl font-bold text-center mb-5 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500 dark:from-gray-500 dark:to-gray-200">Next.js Template</h1>
				<div className="flex flex-col">
					<p className="text-md mb-4">To install the template, run the following command:</p>
					<code className="p-3 font-mono bg-gray-800 rounded-md text-white flex items-center">
						{installCommand}
						<CopyButton textToCopy={installCommand} />
					</code>
				</div>
			</div>
		</main>
	);
}
