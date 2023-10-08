'use client';

import React, {useState} from 'react';
import {Check, Copy} from 'lucide-react';
import {Button} from './ui/button';

export default function CopyButton({textToCopy}: {textToCopy: string}) {
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(textToCopy);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 3000);
	};

	return (
		<Button className="ml-4" size="sm" title="Copy to clipboard" onClick={copyToClipboard}>
			{isCopied ? (
				<Check className="w-4 h-4" />
			) : (
				<Copy className="w-4 h-4" />
			)}
		</Button>
	);
}
