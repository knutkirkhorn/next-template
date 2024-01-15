'use client';

import React, {useState} from 'react';
import {Check, Copy, Terminal} from 'lucide-react';
import {toast} from 'sonner';
import {Button} from './ui/button';
import {Tooltip, TooltipContent, TooltipTrigger} from './ui/tooltip';

export default function CopyCommandButton({textToCopy}: {textToCopy: string}) {
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(textToCopy);
		toast.success('Copied command to clipboard');
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 3000);
	};

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					className="p-3 h-fit font-mono bg-gray-800 hover:bg-gray-700 rounded-md text-white flex items-center shadow-md outline outline-gray-500 outline-1 hover:cursor-pointer"
					onClick={copyToClipboard}
				>
					<div className="m-2 mr-4">
						<Terminal className="w-4 h-4" />
					</div>
					{textToCopy}
					<div className="m-2 ml-4">
						{isCopied ? (
							<Check className="w-4 h-4" />
						) : (
							<Copy className="w-4 h-4" />
						)}
					</div>
				</Button>
			</TooltipTrigger>
			<TooltipContent>Copy to clipboard</TooltipContent>
		</Tooltip>
	);
}
