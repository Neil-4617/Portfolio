// Material UI
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// components
import BannerDesktop from './BannerDesktop'



const Banner = () => {
	// breakpoints
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<>
			{
				matches 
					? <div>Mobile view</div>
					: <BannerDesktop />
			}
		</>
	)
}

export default Banner