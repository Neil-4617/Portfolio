import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'
import FacebookIcon from '@mui/icons-material/Facebook'
import MailIcon from '@mui/icons-material/Mail'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {Colors} from '../styles/theme'

import { FooterCard, CustomTF } from '../styles/footer'


const Footer = () => {
	return (
		<>
		<Box
			maWidth = 'md' 
			sx={{
				marginTop:'auto',
				display: 'flex',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				background: Colors.primary,
				gap: '1rem',
				p: '1rem',
				flex: 1
			}}>
			<FooterCard 
				padding = '80px' 
				sx={{

					fontSize: '3rem',
				}}>
				<Typography variant='h2'>
					Let's Work Together
				</Typography>
				<Box
					sx={{
						display:'flex',
						justifyContent:'space-evenly',
						alignItems: 'center',
						background: 'white'
					}} >
					<IconButton>
						<FacebookIcon/>
					</IconButton>
					<IconButton>
						<MailIcon />
					</IconButton>
					<IconButton>
						<LinkedInIcon />
					</IconButton>
					
				</Box>
			</FooterCard>
			<FooterCard padding = '80px' >
				<List>
					<ListItem>
						<Typography variant= "caption2">
							SiteMap
						</Typography>
					</ListItem>
					<ListItem>
						<Typography variant= "caption2">
							About Me
						</Typography>
					</ListItem>
					<ListItem>
						<Typography variant= "caption2">
							Projects
						</Typography>
					</ListItem>
					<ListItem>
						<Typography variant= "caption2">
							Blogs
						</Typography>
					</ListItem>
					<ListItem>
						<Typography variant= "caption2">
							Contact
						</Typography>
					</ListItem>
				</List>
			</FooterCard>
			<FooterCard padding = '80px' >
					<CustomTF placeholder='your@email.com' type='email' />
					<CustomTF
						variant='outlined'
						multiline
						rows={4}
						type = 'text'
						placeholder= 'Type your message here...' 
					/>
					<IconButton>
					<SendIcon />
					</IconButton>

			</FooterCard>
		</Box>
		<Box
			sx={{
				background:Colors.primary,
				color: 'white',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				py:'2rem',
				borderTop: `2px solid ${Colors.secondary} `
			}}>
			<Typography variant='subtitle2'>
				Copyright &copy; 2022
			</Typography>
		</Box>
		</>
	)
}

export default Footer