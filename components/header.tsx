import React from 'react';

import HeaderDropdown from './header-dropdown';
import {Icons} from './icons';
import ThemeSwitcherButton from './theme-switcher-button';
import {Button} from './ui/button';
import {Tooltip, TooltipContent, TooltipTrigger} from './ui/tooltip';

function TooltipButton({
	children,
	tooltip,
}: {
	children: React.ReactNode;
	tooltip: string;
}) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button asChild>{children}</Button>
			</TooltipTrigger>
			<TooltipContent>{tooltip}</TooltipContent>
		</Tooltip>
	);
}

export default function Header() {
	return (
		<header className="mb-8 flex w-full items-center justify-end sm:mb-16">
			<HeaderDropdown />
			<nav className="hidden space-x-4 sm:flex">
				<ThemeSwitcherButton />
				<TooltipButton tooltip="Open GitHub repository">
					<a
						href="https://github.com/knutkirkhorn/next-template"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Icons.GitHub className="h-4 w-4" />
					</a>
				</TooltipButton>
				<TooltipButton tooltip="Open my profile on X">
					<a
						href="https://twitter.com/knutkirkhorn"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Icons.Twitter className="h-4 w-4 fill-current" />
					</a>
				</TooltipButton>
			</nav>
		</header>
	);
}
