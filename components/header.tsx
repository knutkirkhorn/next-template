import React from 'react';
import {Github} from 'lucide-react';
import ThemeSwitcherButton from './theme-switcher-button';
import {Button} from './ui/button';
import HeaderDropdown from './header-dropdown';
import {Icons} from './icons';

export default function Header() {
	return (
		<header className="flex justify-end items-center w-full mb-8 sm:mb-16">
			<HeaderDropdown />
			<nav className="hidden sm:flex space-x-4">
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
						<Icons.Twitter className="w-4 h-4 fill-current" />
					</a>
				</Button>
			</nav>
		</header>
	);
}
