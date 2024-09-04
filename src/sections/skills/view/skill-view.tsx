// MUI
import { Box } from '@mui/material';

// components
import { SkillContainer } from '../components';
import { IconCloud, Particles } from '@/components/magicui';

// ----------------------------------------------------------------------

const slugs = [
	'html5',
	'css3',
	'typescript',
	'javascript',
	'react',
	'materialui',
	'nextdotjs',
	'tailwindcss',
	'bootstrap',
	'cypress',
	'jest',
	'axios',
	'figma',
	'c',
	'c++',
	'java',
	'python',
	'tensorflow',
	'pytorch',
	'opencv',
	'django',
	'flask',
	'opencv',
	'mysql',
	'postgresql',
	'git',
	'jira',
	'github',
	'gitlab',
	'rest',
	'postman',
	'visualstudiocode',
];

export default function SkillView() {
	return (
		<Box
			sx={{
				position: 'relative',
				backgroundColor: '#F5F5F5',
				overflow: 'hidden',
			}}>
			{/* <Particles
				className='absolute inset-0'
				quantity={200}
				ease={80}
				color={'#000000'}
				refresh
			/> */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '0 4rem',
				}}>
				<SkillContainer />
				<IconCloud iconSlugs={slugs} />
			</Box>
		</Box>
	);
}
