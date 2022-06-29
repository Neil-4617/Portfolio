// Material UI
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// components
import AppbarDesktop from './AppbarDesktop'
import AppbarMobile from './AppbarMobile'



const Appbar = () => {
	// breakpoints
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<>
			{
				matches 
					? <AppbarMobile />
					: <AppbarDesktop />
			}
		</>
	)
}

export default Appbar