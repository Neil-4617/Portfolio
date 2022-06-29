// Dependencies
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

// Styles
import { Colors } from '../../styles/theme'

// Components
import Logo from './Logo'

// context
import { useUIContext } from '../../context'


const AppbarMobile = () => {

	const {setShowNavMenu} = useUIContext()

	return (
		
			<AppBar 
				position="static" 
				color="primary"
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
						<IconButton onClick = {() => setShowNavMenu(true) }>
							<MenuIcon sx={{ color: Colors.secondary}} />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
	)
}

export default AppbarMobile