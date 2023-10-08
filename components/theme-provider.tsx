'use client';

import * as React from 'react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {ThemeProviderProps} from 'next-themes/dist/types';

export function ThemeProvider({children, ...properties}: ThemeProviderProps) {
	return <NextThemesProvider {...properties}>{children}</NextThemesProvider>;
}
