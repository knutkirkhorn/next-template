'use client';

import React from 'react';
import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';
import {Button} from './ui/button';
import {Tooltip, TooltipContent, TooltipTrigger} from './ui/tooltip';

export default function ThemeSwitcherButton() {
	const {theme, setTheme, systemTheme} = useTheme();

	const onChangeTheme = () => {
		const currentTheme = theme === 'system' ? systemTheme : theme;
		setTheme(currentTheme === 'light' ? 'dark' : 'light');
	};

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button onClick={onChangeTheme}>
					{(theme === 'system' ? systemTheme : theme) === 'light' ? (
						<Moon className="h-4 w-4" />
					) : (
						<Sun className="h-4 w-4" />
					)}
				</Button>
			</TooltipTrigger>
			<TooltipContent>Change theme</TooltipContent>
		</Tooltip>
	);
}
