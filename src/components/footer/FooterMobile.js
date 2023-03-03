// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import FacebookIcon from '@mui/icons-material/Facebook'
import MailIcon from '@mui/icons-material/Mail'
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import { FooterCard, CustomTF } from '../../assets/styles/footer'

const FooterMobile = () => {
	return(
		<Box
			backgroundColor = 'primary.dark'
			sx={{
				marginTop:'auto',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap:1,
				pt: '2rem'
			}}>	
				<Typography color='white' variant='h6' >
					Let's Work Together
				</Typography>

			<FooterCard>
					<CustomTF placeholder='your@email.com' type='email' />
					<CustomTF
						variant='outlined'
						multiline
						rows={4}
						type = 'text'
						placeholder= 'Type your message here...' 
					/>
					<Button 
						variant='contained' 
						color="secondary" 
						endIcon={<SendIcon />} 
						sx={{ marginTop:'1rem'}} >
        				Send
      				</Button>				
			</FooterCard>
			<FooterCard 
				padding = '85px' 
				sx={{
					fontSize: '3rem',
				}}>
				<Box
					sx={{
						width: '100vw',
						display:'flex',
						justifyContent:'space-evenly',
						alignItems: 'center',
					}} >
					<IconButton color='secondary' >
						<FacebookIcon/>
					</IconButton>
					<IconButton color='secondary'>
						<MailIcon />
					</IconButton>
					<IconButton color='secondary'>
						<LinkedInIcon />
					</IconButton>
					
				</Box>
			</FooterCard>
		</Box>
	)
}

export default FooterMobile
