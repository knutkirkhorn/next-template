'use client';

import React from 'react';
import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';

import {Button} from './ui/button';
import {Tooltip, TooltipContent, TooltipTrigger} from './ui/tooltip';

export default function ThemeSwitcherButton() {
	const {resolvedTheme, setTheme} = useTheme();

	const onChangeTheme = () => {
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
	};

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button onClick={onChangeTheme}>
					<Moon className="size-4 dark:hidden" />
					<Sun className="hidden size-4 dark:block" />
				</Button>
			</TooltipTrigger>
			<TooltipContent>Change theme</TooltipContent>
		</Tooltip>
	);
}
