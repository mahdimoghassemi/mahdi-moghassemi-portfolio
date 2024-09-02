// MUI
import { Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function ImageContainer() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<img
				src='images/ME.jpg'
				alt='MahdiMoghassemi'
				style={{ width: '200px', height: '200px', borderRadius: '50%' }}
			/>

			<Typography
				sx={{ mt: 2, textAlign: 'center' }}
				variant='body1'>
				Tehran, Iran
			</Typography>
		</Box>
	);
}
