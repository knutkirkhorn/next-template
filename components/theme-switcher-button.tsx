'use client';

import React from 'react';
import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';
import {Button} from './ui/button';

export default function ThemeSwitcherButton() {
	const {theme, setTheme, systemTheme} = useTheme();

	const onChangeTheme = () => {
		const currentTheme = theme === 'system' ? systemTheme : theme;
		setTheme(currentTheme === 'light' ? 'dark' : 'light');
	};

	return (
		<Button title="Change theme" onClick={onChangeTheme}>
			{(theme === 'system' ? systemTheme : theme) === 'light' ? (
				<Moon className="w-4 h-4" />
			) : (
				<Sun className="w-4 h-4" />
			)}
		</Button>
	);
}
