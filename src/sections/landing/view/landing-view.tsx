'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

// MUI
import { Box, Container, styled } from '@mui/material';

// components
import { Globe, DotPattern } from '@/components/magicui';
import { HomeTitle, ImageContainer, ButtonBox } from '../components';

// ----------------------------------------------------------------------

interface FadeInBoxProps {
	show: boolean;
}

const FadeInBox = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'show',
})<FadeInBoxProps>(({ show }) => ({
	opacity: show ? 1 : 0,
	transition: 'opacity 1s ease-in-out',
}));

export default function LandingView() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(true);
		}, 200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				overflow: 'hidden',
			}}>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					mt: 8,
				}}>
				<FadeInBox
					show={show}
					sx={{ width: 'auto' }}>
					<HomeTitle />
				</FadeInBox>
				<Box
					sx={{
						width: '25%',
						display: 'flex',
						flexDirection: 'column',
					}}>
					<FadeInBox
						show={show}
						sx={{ width: '100%' }}>
						<ImageContainer />
						<ButtonBox />
					</FadeInBox>
				</Box>
			</Container>

			<DotPattern
				className={cn(
					'[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]'
				)}
			/>
			<Box
				sx={{
					width: '100%',
					height: '47vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
					overflow: 'hidden',
					position: 'relative',
				}}>
				<FadeInBox
					show={show}
					sx={{ position: 'relative' }}>
					<Globe className='absolute bottom-[-280px] left-1/4 transform -translate-x-1/2' />
				</FadeInBox>
			</Box>
		</Box>
	);
}
