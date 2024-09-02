'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HyperTextProps {
	text: string;
	duration?: number;
	framerProps?: Variants;
	className?: string;
	animateOnLoad?: boolean;
	emoji?: string;
}

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export default function HyperText({
	emoji,
	text,
	duration = 800,
	framerProps = {
		initial: { opacity: 0, y: -10 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 3 },
	},
	className,
	animateOnLoad = true,
}: HyperTextProps) {
	const [displayText, setDisplayText] = useState(text.split(''));
	const [trigger, setTrigger] = useState(false);
	const interations = useRef(0);
	const isFirstRender = useRef(true);

	const triggerAnimation = () => {
		interations.current = 0;
		setTrigger(true);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!animateOnLoad && isFirstRender.current) {
				clearInterval(interval);
				isFirstRender.current = false;
				return;
			}
			if (interations.current < text.length) {
				setDisplayText((t) =>
					t.map((l, i) =>
						l === ' '
							? l
							: i <= interations.current
							? text[i]
							: alphabets[getRandomInt(26)]
					)
				);
				interations.current = interations.current + 0.1;
			} else {
				setTrigger(true);
				clearInterval(interval);
			}
		}, duration / (text.length * 10));
		// Clean up interval on unmount
		return () => clearInterval(interval);
	}, [text, duration, trigger, animateOnLoad]);

	return (
		<div
			className='overflow-hidden flex cursor-default scale-100 items-center'
			onMouseEnter={triggerAnimation}>
			{emoji && (
				<span className='text-[1.5rem] md:text-[4rem] mr-2'>{emoji}</span>
			)}
			<AnimatePresence mode='wait'>
				{displayText.map((letter, i) => (
					<motion.h1
						key={i}
						className={cn(
							'text-[1.5rem] md:text-[4rem]',
							letter === ' ' ? 'w-3' : '',
							className
						)}
						{...framerProps}>
						{letter}
					</motion.h1>
				))}
			</AnimatePresence>
		</div>
	);
}
