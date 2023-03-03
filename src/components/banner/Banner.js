// Material UI
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// components
import BannerDesktop from './BannerDesktop'
import BannerMobile from './BannerMobile'



const Banner = () => {
	// breakpoints
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<>
			{
				matches 
					? <BannerMobile />
					: <BannerDesktop />
			}
		</>
	)
}

export default Banner