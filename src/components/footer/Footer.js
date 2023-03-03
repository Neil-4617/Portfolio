
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
		</>
	)
}

export default Footer