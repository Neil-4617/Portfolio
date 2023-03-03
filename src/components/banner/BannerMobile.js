// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';


// styles


const BannerMobile = () => {
	return(
		<>
		<Box
			sx={{
				width:'100%',
				display:'block',
			}}>
			{/*Hero Section*/}
			<Box
				sx={{
					height: '50vh',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Box
					sx={{
						mt: '3rem',
						padding: '4rem',
						height: '30%',
						width: '20%',
						backgroundColor: 'primary.main',
					}}
				/>			
				<Box 
					sx={{
						mx: 'auto',
						mt: '1rem',
						textAlign: 'center',
					}}>
					<Typography variant='h5'>Hi Im Alister</Typography>
					<Typography variant='h6'>a full-stack web developer</Typography>
				</Box>
			</Box>
			{/*end of Hero Section*/}
			
			{/*Skills*/}
			<Box
				sx={{
				height: 'auto',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'secondary.dark',
				textAlign: 'center',
				py: '1rem',
				}}>
				<Typography sx={{ color: 'white' }} variant='h6' my='1rem'>Technologies</Typography>
				<List>
					<ListItem>
						<ListItemIcon
						sx={{
							pb: '0.5rem',
							display:'flex',
							gap: 3,
							mx:'auto',
						}}>
							<Box component='img' src='../../assets/images/html-svgrepo-com.svg' alt='html image' height='30px'/>
							<Box component='img' src='../../assets/images/css-svgrepo-com.svg' alt='css image'height='30px'/>
							<Box component='img' src='../../assets/images/js-official-svgrepo-com.svg' alt='js image'height='30px'/>
							<Box component='img' src='../../assets/images/bootstrap-4-logo-svgrepo-com.svg' alt='bootstrap image'height='30px'/>
							<Box component='img' src='../../assets/images/material-ui-svgrepo-com.svg' alt='material ui image'height='30px'/>
							<Box component='img' src='../../assets/images/reactjs-svgrepo-com.svg' alt='reactjs image'height='30px'/>
						</ListItemIcon>
					</ListItem>
				</List>
				
				<List>
					<ListItem>
						<ListItemIcon
						sx={{
							pb: '0.5rem',
							display:'flex',
							gap: '0.75rem',
							mx:'auto',
						}}>
							<Box component='img' src='../../assets/images/php-svgrepo-com.svg' alt='php image' height='30px'/>
							<Box component='img' src='../../assets/images/blade-svgrepo-com.svg' alt='laravel image' height='30px'/>
							<Box component='img' src='../../assets/images/mysql-logo-svgrepo-com.svg' alt='mySql image' height='30px'/>
							<Box component='img' src='../../assets/images/express-svgrepo-com.svg' alt='express image' height='30px' backgroundColor='white' p='2px'/>
							<Box component='img' src='../../assets/images/node-svgrepo-com.svg' alt='nodejs image' height='30px'/>
							<Box component='img' src='../../assets/images/apollographql-svgrepo-com.svg' alt='apollo image' height='30px'/>
							<Box component='img' src='../../assets/images/mongo-svgrepo-com.svg' alt='mongodb image' height='30px'/>
							<Box component='img' src='../../assets/images/graphql-svgrepo-com.svg' alt='graphQl image' height='30px'/>
						</ListItemIcon>
					</ListItem>
				</List>
				<List>
					<ListItem>
						<ListItemIcon
							sx={{
								pb: '0.5rem',
								display:'flex',
								gap: 2,
								mx: 'auto',
							}}>
							<Box component='img' src='../../assets/images/git-svgrepo-com.svg' alt='git image' height='30px'/>
							<Box component='img' src='../../assets/images/gitlab-svgrepo-com.svg' alt='gitlab image' height='30px'/>
							<Box component='img' src='../../assets/images/github-svgrepo-com.svg' alt='github image' height='30px'/>
							<Box component='img' src='../../assets/images/sublime-text-svgrepo-com.svg' alt='sublime text` image' height='30px'/>
							<Box component='img' src='../../assets/images/figma-svgrepo-com.svg' alt='figma image' height='30px'/>
						</ListItemIcon>
					</ListItem>
				</List>
			</Box>
			{/*end of Skills Section*/}
			
			{/*Project Section*/}
			<Box
				sx={{
					height: 'auto',
					width: '100%',
					backgroundColor: '#EBEBEB',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					pt: '1rem ',
					pb: '6rem',
					mx: 'auto',
				}}>
				<Typography my='3rem' variant='h4'>Projects</Typography>
				<Box 
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-evenly',
						gap:4,
					}}>
					<Card
						variant='outlined'
						sx={{
							width: '80%',
							minHeight: '80%',
							mx: 'auto',
							pb: '1.5rem',
						}}>
						<CardMedia
							component='img'
							border='2px solid white'
							sx={{
								height: '120px',
								}}/>
						<CardContent height='auto' >
							<Typography mb='1rem' variant='h5'>Project 1</Typography>
							<Typography color='primary'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper. Sagittis orci a scelerisque purus semper eget duis. 
							</Typography>
						</CardContent>
						<CardActions sx={{justifyContent: 'center'}}>
							<Button size='large' variant='contained' fullWidth>View</Button>
						</CardActions>
					</Card>
					<Card
						sx={{
							width: '80%',
							minHeight: '80%',
							mx: 'auto',
						}}>
						<CardMedia
							component='img'
							border='2px solid white'
							sx={{
								height: '120px',
								}}/>
						<CardContent height='auto' >
							<Typography mb='1rem' variant='h5'>Project 2</Typography>
							<Typography color='primary'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper. Sagittis orci a scelerisque purus semper eget duis. 
							</Typography>
						</CardContent>
						<CardActions sx={{justifyContent: 'center'}}>
							<Button size='large' variant='contained' fullWidth>View</Button>
						</CardActions>
					</Card>
					<Card
						sx={{
							width: '80%',
							minHeight: '80%',
							mx: 'auto',
						}}>
						<CardMedia
							component='img'
							border='2px solid white'
							sx={{
								height: '120px',
								}}/>
						<CardContent height='auto' >
							<Typography mb='1rem' variant='h5'>Project 3</Typography>
							<Typography color='primary'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis orci a scelerisque purus semper. Sagittis orci a scelerisque purus semper eget duis. 
							</Typography>
						</CardContent>
						<CardActions sx={{justifyContent: 'center'}}>
							<Button size='large' variant='contained' fullWidth>View</Button>
						</CardActions>
					</Card>
				</Box>
			</Box>
			{/*end of Project Section*/}
		</Box>
		</>
	)
}

export default BannerMobile