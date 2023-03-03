import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// components
import FooterDesktop from './FooterDesktop'
import FooterMobile from './FooterMobile'


const Footer = () => {
	// breakpoints
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<>
			
			{
				matches 
					? <FooterMobile />
					: <FooterDesktop />
			}
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

export default Footer