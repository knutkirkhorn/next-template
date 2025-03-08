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
					className="flex h-fit items-center rounded-md bg-gray-800 p-3 font-mono text-white shadow-md outline outline-1 outline-gray-500 hover:cursor-pointer hover:bg-gray-700"
					onClick={copyToClipboard}
				>
					<div className="m-2">
						<Terminal className="size-4" />
					</div>
					{textToCopy}
					<div className="m-2">
						{isCopied ? (
							<Check className="size-4" />
						) : (
							<Copy className="size-4" />
						)}
					</div>
				</Button>
			</TooltipTrigger>
			<TooltipContent>Copy to clipboard</TooltipContent>
		</Tooltip>
	);
}
