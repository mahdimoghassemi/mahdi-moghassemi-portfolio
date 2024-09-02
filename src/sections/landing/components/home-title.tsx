import { Typography, Box } from '@mui/material';

// components
import { HyperText } from '@/components/magicui';

// ----------------------------------------------------------------------

export default function HomeTitle() {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Box sx={{ flex: 1 }}>
				<HyperText
					text='Hello World! '
					emoji='👋'
				/>
				<HyperText text={`I'm Mahdi Moghassemi \b`} />

				<Typography variant='h6'>
					A <strong>computer engineer</strong> and a seeker of knowledge.
				</Typography>

				<Typography variant='h6'>
					Passionate about building things and helping others.
				</Typography>

				<Typography variant='h6'>Forever learning and exploring.</Typography>
			</Box>
		</Box>
	);
}
