import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'


const Skills = () => {
	const arrSkills1 = ['html', 'css', 'js', 'bootstrap', 'materialUI']
	const arrSkills2 = [
		'php-svgrepo-com', 
		'blade-svgrepo-com', 
		'mysql-logo-svgrepo-com', 
		'node-svgrepo-com', 
		'apollographql-svgrepo-com', 
		'mongo-svgrepo-com', 
		'graphql-svgrepo-com'
		]
	const arrSkills3 = [
		'git-svgrepo-com',
		'gitlab-svgrepo-com',
		'github-svgrepo-com',
		'sublime-text-svgrepo-com',
		'figma-svgrepo-com'
		]

	return(
		<Box
			sx={{
			width: '100%',
			height: 'auto',
			backgroundColor: 'secondary.dark',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			py: '2rem',
			gap: 1,
			}}>
			<Typography sx={{ color: 'white' }} variant='h4' my='2rem'>Technologies</Typography>

				
				<List>
					<ListItem>
						<ListItemIcon
							sx={{
								p: '1rem',
								display:'flex',
								justifyContent:'space-evenly',
								gap: 4,
							}}>
							{ 
								arrSkills1.map(item =>
										<Box 
											key={item} 
											component='img' 
											src={`../../assets/images/${item}.svg`} 
											alt={item} 
											height='60px'/>
									)
							}
						</ListItemIcon>
					</ListItem>
				</List>
				<List>
					<ListItem>
						<ListItemIcon
							sx={{
								p: '1rem',
								display:'flex',
								justifyContent:'space-evenly',
								gap: 4,
							}}>
							{ 
								arrSkills2.map(item =>
										<Box 
											key={item} 
											component='img' 
											src={`../../assets/images/${item}.svg`} 
											alt={item} 
											height='60px'/>
									)
							}
							<Box component='img' src='../../assets/images/express-svgrepo-com.svg' alt='express image' height='60px' backgroundColor='white' p='2px'/>
						</ListItemIcon>
					</ListItem>
				</List>
				<List>
					<ListItem>
						<ListItemIcon
							sx={{
								p: '1rem',
								display:'flex',
								justifyContent:'space-evenly',
								gap: 4,
							}}>
							{ 
								arrSkills3.map(item =>
										<Box 
											key={item} 
											component='img' 
											src={`../../assets/images/${item}.svg`} 
											alt={item} 
											height='60px'/>
									)
							}
						</ListItemIcon>
					</ListItem>
				</List>			
		</Box>
	)
}

export default Skills