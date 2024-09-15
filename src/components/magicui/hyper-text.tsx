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

const alphabets =
	'01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101'.split(
		''
	);

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export default function HyperText({
	emoji,
	text,
	duration = 4000,
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
	const [finalText, setFinalText] = useState('');
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
				setFinalText(text); // Set the final text once the animation is complete
				clearInterval(interval);
			}
		}, duration / (text.length * 10));
		return () => clearInterval(interval);
	}, [text, duration, trigger, animateOnLoad]);

	return (
		<div
			className='overflow-hidden flex scale-100 items-center'
			onMouseEnter={triggerAnimation}>
			<AnimatePresence mode='wait'>
				{finalText ? ( // Check if the final text is ready
					<motion.h1
						className={cn('text-[1.5rem] md:text-[4rem]', className)}
						{...framerProps}>
						{finalText}
					</motion.h1>
				) : (
					displayText.map((letter, i) => (
						<motion.span
							key={i}
							className={cn(
								'text-[1.5rem] md:text-[4rem]',
								letter === ' ' ? 'w-3' : '',
								className
							)}
							{...framerProps}>
							{letter}
						</motion.span>
					))
				)}
			</AnimatePresence>
			{emoji && (
				<span className='text-[1.5rem] md:text-[4rem] mr-2'>{emoji}</span>
			)}
		</div>
	);
}
