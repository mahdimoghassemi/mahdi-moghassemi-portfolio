// MUI
import { Container, Box } from '@mui/material';

// components
import { Meteors } from '@/components/magicui';
import { Description } from '../components';

// ----------------------------------------------------------------------

export default function AboutMeView() {
	return (
		<Box
			sx={{
				position: 'relative',
				backgroundColor: '#1e2a38',
				height: '100vh',
				overflow: 'hidden',
			}}>
			<Meteors number={30} />

			<Description />
		</Box>
	);
}
