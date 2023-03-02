// Dependencies
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

// Styles

// Components
import Logo from './Logo'

// context
import { useUIContext } from '../../context'


const AppbarMobile = () => {

	const {showNavMenu, setShowNavMenu} = useUIContext()

	return (
		
			<AppBar
				position="relative" 
				sx={{
					maxHeight:"10vh"
				}} 
				>
				<Toolbar
					sx={{
						mx: '1rem',
						display: 'flex',
						alignItems:'center',
						justifyContent: 'space-between'
					}}
					>
					<Logo />
					<Box>
						<IconButton color='secondary' sx={{visibility: showNavMenu ? 'hidden':'visible' }} onClick = {() => setShowNavMenu(!showNavMenu) }>
							<MenuIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
	)
}

export default AppbarMobile