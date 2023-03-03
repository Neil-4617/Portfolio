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

const FooterDesktop = () => {
	return(
		<Box
			backgroundColor = 'primary.dark'
			sx={{
				marginTop:'auto',
				display: 'flex',
				alignItems: 'center',
				gap: '1rem',
				p: '1rem',
			}}>	
			<FooterCard 
				padding = '85px' 
				sx={{
					fontSize: '3rem',
				}}>
				<Typography variant='h4' >
					Let's Work Together
				</Typography>
				<Box
					sx={{
						width: '60%',
						display:'flex',
						justifyContent:'space-evenly',
						alignItems: 'center',
						marginTop: '1rem'
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
			<FooterCard padding = '5rem'>
					<CustomTF placeholder='your@email.com' type='email' />
					<CustomTF
						variant='outlined'
						multiline
						rows={4}
						type = 'text'
						placeholder= 'Type your message here...' 
					/>
					<Button variant='contained' color="secondary" endIcon={<SendIcon />} sx={{ marginTop:'1rem'}} >
        				Send
      				</Button>


					
			</FooterCard>
		</Box>
	)
}

export default FooterDesktop
