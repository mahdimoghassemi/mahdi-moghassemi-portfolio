// MUI
import { SxProps, Theme } from '@mui/system';
import { Box, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const sections = [
	{
		title: 'Languages:',
		items: [
			'C++, C',
			'Java',
			'PHP',
			'Python',
			'JavaScript',
			'HTML',
			'CSS',
			'SQL',
		],
	},
	{
		title: 'Frameworks & Libraries:',
		items: [
			'React',
			'Redux',
			'Next.js',
			'Flask',
			'Material UI',
			'Bootstrap',
			'Tailwind CSS',
			'Axios',
			'React Hook Form',
			'Yup',
			'TensorFlow',
			'PyTorch',
			'Scikit-learn',
			'OpenCV',
			'NumPy',
			'Pandas',
			'Matplotlib',
			'Telethon',
			'Keras',
			'NetworkX',
		],
	},
	{
		title: 'Databases:',
		items: ['PostgreSQL', 'MySQL'],
	},
	{
		title: 'Tools & Technologies:',
		items: [
			'REST',
			'Jupyter',
			'MATLAB',
			'Octave',
			'LATEX',
			'Git (GitHub, GitLab)',
			'Jira',
			'Postman',
		],
	},
	{
		title: 'Areas of Expertise:',
		items: ['Web Development', 'Machine Learning (ML)', 'Computer Vision'],
	},
];

const styles: Record<string, SxProps<Theme>> = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
		height: '100vh',
		color: '#fff',
	},
	content: {
		textAlign: 'start',
		maxWidth: '800px',
		margin: '1rem 0 2rem 0',
	},
	lineContainer: {
		maxWidth: '800px',
		display: 'flex',
		flexDirection: 'row',
		gap: '2rem',
		marginBottom: '1rem',
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: '50%',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		position: 'absolute',
		right: '-10px',
		marginLeft: '2px',
	},
};

const gradients: string[] = [
	'linear-gradient(to right, #f44336, #ff5722)',
	'linear-gradient(to right, #9c27b0, #673ab7)',
	'linear-gradient(to right, #3f51b5, #2196f3)',
	'linear-gradient(to right, #ffeb3b, #ffc107)',
	'linear-gradient(to right, #4caf50, #8bc34a)',
	'linear-gradient(to right, #e91e63, #f44336)',
	'linear-gradient(to right, #00bcd4, #009688)',
	'linear-gradient(to right, #ff9800, #ff5722)',
];

const lineSegment = (width: string, gradient: string): SxProps<Theme> => ({
	width: width,
	height: 10,
	background: gradient,
	borderRadius: 4,
	display: 'flex',
	alignItems: 'center',
	position: 'relative',
});

const getRandomWidth = (): string =>
	`${Math.floor(Math.random() * 160 + 10)}px`;

const getRandomGradient = (): string =>
	gradients[Math.floor(Math.random() * gradients.length)];

const getRandomLineCount = (): number => Math.floor(Math.random() * 5 + 3);

const SkillContainer = () => {
	const top_rows = Array.from({ length: 2 }, () => getRandomLineCount());
	const bottom_rows = Array.from({ length: 3 }, () => getRandomLineCount());

	return (
		<Box sx={styles.container}>
			{top_rows.map((lineCount, rowIndex) => (
				<Box
					key={rowIndex}
					sx={styles.lineContainer}>
					{Array.from({ length: lineCount }).map((_, index) => (
						<Box
							key={index}
							sx={lineSegment(getRandomWidth(), getRandomGradient())}>
							{index % 2 === 0 && <Box sx={styles.dot} />}
						</Box>
					))}
				</Box>
			))}

			<Box sx={styles.content}>
				<Typography
					variant='h4'
					sx={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: 600, mb: 2 }}>
					SKILLS 🛠️
				</Typography>
				{sections.map((section, index) => (
					<Typography
						variant='body1'
						sx={{
							color: 'rgba(0, 0, 0, 0.7)',
							display: 'flex',
							flexWrap: 'wrap',
						}}>
						⭕ {section.items.join(', ')}
					</Typography>
				))}
			</Box>

			{bottom_rows.map((lineCount, rowIndex) => (
				<Box
					key={rowIndex}
					sx={styles.lineContainer}>
					{Array.from({ length: lineCount }).map((_, index) => (
						<Box
							key={index}
							sx={lineSegment(getRandomWidth(), getRandomGradient())}>
							{index % 2 !== 0 && <Box sx={styles.dot} />}
						</Box>
					))}
				</Box>
			))}
		</Box>
	);
};

export default SkillContainer;
