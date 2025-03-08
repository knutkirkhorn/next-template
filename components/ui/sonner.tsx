'use client';

import {useTheme} from 'next-themes';
import {Toaster as Sonner, ToasterProps} from 'sonner';

const Toaster = ({...properties}: ToasterProps) => {
	const {theme = 'system'} = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className="toaster group"
			toastOptions={{
				classNames: {
					toast:
						'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-muted-foreground',
					actionButton:
						'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium',
					cancelButton:
						'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium',
				},
			}}
			{...properties}
		/>
	);
};

export {Toaster};
