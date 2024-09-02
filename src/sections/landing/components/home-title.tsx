import { Typography, Box } from '@mui/material';

// components
import { HyperText } from '@/components/magicui';

// ----------------------------------------------------------------------

export default function HomeTitle() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: { md: 'start', sm: 'center', xs: 'center' },
				mb: { sm: 2 },
			}}>
			<HyperText
				text='Hello World! '
				emoji='👋'
			/>

			<HyperText text={`I'm Mahdi Moghassemi \b`} />

			<Typography
				sx={{
					textAlign: { xs: 'center' },
					fontSize: { md: '1.5rem', xs: '1rem' },
				}}
				variant='h6'>
				A <strong>computer engineer</strong> and a seeker of knowledge.
			</Typography>

			<Typography
				sx={{
					textAlign: { xs: 'center' },
					fontSize: { md: '1.5rem', xs: '1rem' },
				}}
				variant='h6'>
				Passionate about building things and helping others.
			</Typography>

			<Typography
				sx={{
					textAlign: { xs: 'center' },
					fontSize: { md: '1.5rem', xs: '1rem' },
				}}
				variant='h6'>
				Forever learning and exploring.
			</Typography>
		</Box>
	);
}
