'use client';

import React from 'react';
import {DropdownMenu} from '@radix-ui/react-dropdown-menu';
import {
	ChevronDown,
	Github,
	Moon,
	Sun,
	Twitter,
} from 'lucide-react';
import {useTheme} from 'next-themes';
import {DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from './ui/dropdown-menu';
import {Button} from './ui/button';

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
					<Button size="sm"><ChevronDown className="w-4 h-4" /></Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem className="cursor-pointer" onClick={onChangeTheme}>
						{(theme === 'system' ? systemTheme : theme) === 'light' ? (
							<Moon className="w-4 h-4 mr-2" />
						) : (
							<Sun className="w-4 h-4 mr-2" />
						)}
						Switch theme
					</DropdownMenuItem>
					<DropdownMenuItem asChild className="cursor-pointer">
						<a
							href="https://github.com/knutkirkhorn/next-template"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Github className="w-4 h-4 mr-2" />
							GitHub repository
						</a>
					</DropdownMenuItem>
					<DropdownMenuItem asChild className="cursor-pointer">
						<a
							href="https://twitter.com/knutkirkhorn"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Twitter className="w-4 h-4 mr-2" />
							Twitter
						</a>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
