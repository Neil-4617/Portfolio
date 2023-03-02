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

const BannerDesktop = () => {
	return (
		<>
		{/*Hero Section*/}
		<Box
		sx={{
			minHeight: '80vh',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<Box 
				sx={{
				pr: '3rem',
				}}>
				<Typography variant='h4'>Hi Im Alister</Typography>
				<Typography variant='h5'>a full-stack web developer</Typography>
			</Box>
			<Box
				sx={{
					height: '30%',
					width: '20%',
					backgroundColor: 'primary.main',
				}}
			/>
			
		</Box>
		{/*end of Hero Section*/}

		{/*Skills*/}
		<Box
			sx={{
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
			{/*
				[x] html
				[x] css
				[x] js
				[x] bootstrap
				[x] react

				[x] php
				[x] laravel
				[x] mysql
				[x] express
				[x] nodejs
				[x] apollo 
				[x] mongoDB
				[x] grapql
				[x] git
				[x] gitlab
				[x] github
				[x] sublime text
				[x] figma

			*/}
				<List>
					<ListItem>
						<ListItemIcon
							sx={{
								p: '1rem',
								display:'flex',
								justifyContent:'space-evenly',
								gap: 4,
							}}>
							<Box component='img' src='../../assets/images/html-svgrepo-com.svg' alt='html image' height='60px'/>
							<Box component='img' src='../../assets/images/css-svgrepo-com.svg' alt='css image'height='60px'/>
							<Box component='img' src='../../assets/images/js-official-svgrepo-com.svg' alt='js image'height='60px'/>
							<Box component='img' src='../../assets/images/bootstrap-4-logo-svgrepo-com.svg' alt='bootstrap image'height='60px'/>
							<Box component='img' src='../../assets/images/material-ui-svgrepo-com.svg' alt='material ui image'height='60px'/>
							<Box component='img' src='../../assets/images/reactjs-svgrepo-com.svg' alt='reactjs image'height='60px'/>
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
							<Box component='img' src='../../assets/images/php-svgrepo-com.svg' alt='php image' height='60px'/>
							<Box component='img' src='../../assets/images/blade-svgrepo-com.svg' alt='laravel image' height='60px'/>
							<Box component='img' src='../../assets/images/mysql-logo-svgrepo-com.svg' alt='mySql image' height='60px'/>
							<Box component='img' src='../../assets/images/express-svgrepo-com.svg' alt='express image' height='60px' backgroundColor='white' p='2px'/>
							<Box component='img' src='../../assets/images/node-svgrepo-com.svg' alt='nodejs image' height='60px'/>
							<Box component='img' src='../../assets/images/apollographql-svgrepo-com.svg' alt='apollo image' height='60px'/>
							<Box component='img' src='../../assets/images/mongo-svgrepo-com.svg' alt='mongodb image' height='60px'/>
							<Box component='img' src='../../assets/images/graphql-svgrepo-com.svg' alt='graphQl image' height='60px'/>
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
							<Box component='img' src='../../assets/images/git-svgrepo-com.svg' alt='git image' height='60px'/>
							<Box component='img' src='../../assets/images/gitlab-svgrepo-com.svg' alt='gitlab image' height='60px'/>
							<Box component='img' src='../../assets/images/github-svgrepo-com.svg' alt='github image' height='60px'/>
							<Box component='img' src='../../assets/images/sublime-text-svgrepo-com.svg' alt='sublime text` image' height='60px'/>
							<Box component='img' src='../../assets/images/figma-svgrepo-com.svg' alt='figma image' height='60px'/>
						</ListItemIcon>
					</ListItem>
				</List>
		</Box>
		{/*end of Skills Section*/}

		{/*Project Section*/}
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				maxHeight: '100vh',
				alignItems: 'center',
				py: '1rem ',
				mb: '6rem'
			}}>
			<Typography my='3rem' variant='h4'>Projects</Typography>
			<Box 
				sx={{
					display: 'flex',
					justifyContent: 'space-evenly',
					width: '85vw',
				}}>
				<Card
					variant='outlined'
					sx={{
						width: '25%',
						minHeight: '80%',
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
					<CardActions>
						<Button size='small' variant='contained' >View</Button>
					</CardActions>
				</Card>
				<Card
					sx={{
						width: '25%',
						minHeight: '80%',
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
					<CardActions>
						<Button size='small' variant='contained' >View</Button>
					</CardActions>
				</Card>
				<Card
					sx={{
						width: '25%',
						minHeight: '80%',
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
					<CardActions>
						<Button size='small' variant='contained' >View</Button>
					</CardActions>
				</Card>

				
			</Box>
		</Box>
		{/*end of Project Section*/}
		</>
	) 
}

export default BannerDesktop