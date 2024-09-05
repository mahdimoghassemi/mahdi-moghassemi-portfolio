// MUI
import { Container, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const Description = () => {
	return (
		<Container
			sx={{
				height: { xs: '110vh', md: '100vh' },
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				padding: { xs: 2, sm: 3, md: 4 },
			}}>
			<Typography
				variant='h4'
				sx={{
					mb: { xs: 2, sm: 3, md: 4 },
					color: 'rgba(255, 255, 255, 0.7)',
					fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
				}}>
				ABOUT ME 👩‍💻
			</Typography>
			<Typography
				variant='h6'
				sx={{
					mb: { xs: 2, sm: 3, md: 4 },
					color: 'rgba(255, 255, 255, 0.5)',
					fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
				}}>
				AI & ML Enthusiast with a Strong Foundation in Front-End Development
			</Typography>
			<Typography
				variant='body1'
				sx={{
					mb: { xs: 1, sm: 2, md: 3 },
					color: 'rgba(255, 255, 255, 0.7)',
					lineHeight: 1.8,
					textAlign: 'justify',
					fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
				}}>
				From the early stages of my education, recognizing the expanding
				software industry and the increasing demand for software engineers in
				Iran, particularly in web development, I embarked on my career in this
				field. My journey began with an internship at Karin Payesh, where I
				engaged in front-end development using React. This experience marked the
				start of my professional path, which continued with roles at Soroush
				Educational Complex, 3Tex Exchange, and Pazh Tax Company. As a front-end
				developer and software engineer, I gained valuable experience with
				project management tools like Git and Jira, and developed soft skills
				such as problem-solving, teamwork, and time management. These
				experiences culminated in the development of a house rental website,
				HomeLand, as a full-stack developer for my thesis.
			</Typography>
			<Typography
				variant='body1'
				sx={{
					color: 'rgba(255, 255, 255, 0.7)',
					lineHeight: 1.8,
					textAlign: 'justify',
					fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
				}}>
				During my final year at university, I discovered a strong interest in
				machine learning. I collaborated on facial detection projects using
				neural networks and CNN, gaining hands-on experience with ML frameworks,
				vision algorithms, and large datasets. I also completed AI courses on
				Coursera to deepen my understanding. I further explored my interest
				through personal projects, including COVID-19 detection, handwriting
				recognition, and real estate pricing prediction, which solidified my
				dedication to advancing my expertise in AI.
			</Typography>
		</Container>
	);
};

export default Description;
