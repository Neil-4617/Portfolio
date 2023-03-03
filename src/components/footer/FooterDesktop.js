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
		<>
		<Box
			backgroundColor = 'primary.dark'
			sx={{
				marginTop:'auto',
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				gap: '1rem',
				p: '1rem',
			}}>	
			<FooterCard 
				sx={{
					p:'1rem 0 0 10rem',
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
			<FooterCard padding = '5rem 7rem 5rem 0'>
					<CustomTF placeholder='your@email.com' type='email' />
					<CustomTF
						variant='outlined'
						multiline
						rows={4}
						type = 'text'
						placeholder= 'Type your message here...' 
					/>
					<Button fullWidth variant='contained' color="secondary" endIcon={<SendIcon />} sx={{ marginTop:'1rem'}} >
        				Send
      				</Button>		
			</FooterCard>
		</Box>
			<Box
				backgroundColor= 'primary.dark'
				borderTop= '2px solid #00356F'
				sx={{
					marginTop: 'auto',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					py:'1.25rem',
				}}>
				<Typography variant='subtitle2' color='primary.light' >
					Copyright &copy; 2023
				</Typography>
			</Box>
			</>
	)
}

export default FooterDesktop
