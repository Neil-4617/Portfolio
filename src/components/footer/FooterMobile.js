// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import MailIcon from '@mui/icons-material/Mail'
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import { FooterCard, CustomTF } from '../../assets/styles/footer'

const FooterMobile = () => {
	return(
		<>
			<Box
				backgroundColor = 'primary.dark'
				sx={{
					marginTop:'auto',
					display: 'flex',
					flexDirection: 'column',
					gap:1,
					p: '2.5rem 1.5rem 1rem 1.5rem'
				}}>	
					<Typography color='white' variant='h6' alignSelf="center">
						Let's Work Together
					</Typography>
				
				{/* <FooterCard>
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
				</FooterCard> */}
				
				<FooterCard 
					sx={{
						fontSize: '3rem',
						pt: '2rem',
						pb: '1rem',
					}}>
					<Box
						sx={{
							display:'flex',
							justifyContent: 'space-around',
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

export default FooterMobile
