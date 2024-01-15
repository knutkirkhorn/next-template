import React from 'react';
import {Github} from 'lucide-react';
import ThemeSwitcherButton from './theme-switcher-button';
import {Button} from './ui/button';
import HeaderDropdown from './header-dropdown';
import {Icons} from './icons';

export default function Header() {
	return (
		<header className="mb-8 flex w-full items-center justify-end sm:mb-16">
			<HeaderDropdown />
			<nav className="hidden space-x-4 sm:flex">
				<ThemeSwitcherButton />
				<Button asChild>
					<a
						href="https://github.com/knutkirkhorn/next-template"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Github className="h-4 w-4" />
					</a>
				</Button>
				<Button asChild>
					<a
						href="https://twitter.com/knutkirkhorn"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Icons.Twitter className="h-4 w-4 fill-current" />
					</a>
				</Button>
			</nav>
		</header>
	);
}
