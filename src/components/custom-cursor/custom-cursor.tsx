'use client';

import React, { useEffect, useRef, useState } from 'react';

// Define cursor colors
const CURSOR_COLORS: Record<string, string> = {
	default: 'rgba(0, 0, 0, 0.8)',
	canvas: 'rgba(160, 71, 71, 0.4)',
	span: 'rgba(160, 71, 71, 0.4)',
};

// Main CustomCursor component
const CustomCursor = () => {
	const cursorRef = useRef<HTMLDivElement>(null);
	const borderCursorRef = useRef<HTMLDivElement>(null);

	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [cursorColor, setCursorColor] = useState('rgba(0, 0, 0, 0.8)');
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		let animationFrameId: number;

		const handleMouseMove = (e: MouseEvent) => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
			animationFrameId = requestAnimationFrame(() => {
				setPosition({
					x: e.clientX,
					y: e.clientY,
				});
			});
		};

		const handleMouseDown = () => {
			setClicked(true);
			setTimeout(() => {
				setClicked(false);
			}, 800);
		};

		const handleMouseOver = (e: MouseEvent) => {
			const tagName = (e.target as HTMLElement).tagName.toLowerCase();
			setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS['default']);
		};

		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseover', handleMouseOver);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseover', handleMouseOver);
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, []);

	const cursorStyle = {
		backgroundColor: cursorColor,
		top: position.y,
		left: position.x,
	};

	const borderCursorStyle = {
		borderColor: cursorColor,
		top: position.y,
		left: position.x,
	};

	return (
		<>
			<div
				style={cursorStyle}
				ref={cursorRef}
				className={`fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50  rounded-full w-8 h-8`}
			/>
			<div
				style={borderCursorStyle}
				ref={borderCursorRef}
				className={`p-0 fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50  rounded-full w-10 h-10 border-2`}>
				<div
					className={`w-10 h-10 ${
						clicked ? 'scale-100 opacity-30' : 'scale-0 opacity-0'
					} -translate-x-[1px] -translate-y-[1px] rounded-full bg-${cursorColor}  -z-10`}
				/>
			</div>
		</>
	);
};

export default CustomCursor;
