'use client';

import React from 'react';
import {DropdownMenu} from '@radix-ui/react-dropdown-menu';
import {ChevronDown, Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';

import {Icons} from './icons';
import {Button} from './ui/button';
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function HeaderDropdown() {
	const {theme, setTheme, systemTheme} = useTheme();

	const onChangeTheme = () => {
		const currentTheme = theme === 'system' ? systemTheme : theme;
		setTheme(currentTheme === 'light' ? 'dark' : 'light');
	};

	return (
		<div className="flex sm:hidden">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="sm" aria-label="Open dropdown">
						<ChevronDown className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem className="cursor-pointer" onClick={onChangeTheme}>
						{(theme === 'system' ? systemTheme : theme) === 'light' ? (
							<Moon className="mr-2 h-4 w-4" />
						) : (
							<Sun className="mr-2 h-4 w-4" />
						)}
						Switch theme
					</DropdownMenuItem>
					<DropdownMenuItem asChild className="cursor-pointer">
						<a
							href="https://github.com/knutkirkhorn/next-template"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Icons.GitHub className="mr-2 h-4 w-4" />
							GitHub repository
						</a>
					</DropdownMenuItem>
					<DropdownMenuItem asChild className="cursor-pointer">
						<a
							href="https://twitter.com/knutkirkhorn"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Icons.Twitter className="mr-2 h-4 w-4 fill-current" />
							Twitter
						</a>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
