'use client';

import React, {useState} from 'react';
import {Check, Copy, Terminal} from 'lucide-react';
import {Button} from './ui/button';
import {Tooltip, TooltipContent, TooltipTrigger} from './ui/tooltip';

export default function CopyCommandButton({textToCopy}: {textToCopy: string}) {
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(textToCopy);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 3000);
	};

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					className="p-3 font-mono bg-gray-800 hover:bg-gray-700 rounded-md text-white flex items-center shadow-md outline outline-gray-500 outline-1 hover:cursor-pointer"
					onClick={copyToClipboard}
				>
					<Terminal className="w-4 h-4 mr-3" />
					{textToCopy}
					<div className="m-3 ml-4">
						{isCopied ? (
							<Check className="w-4 h-4" />
						) : (
							<Copy className="w-4 h-4" />
						)}
					</div>
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				Copy to clipboard
			</TooltipContent>
		</Tooltip>
	);
}
