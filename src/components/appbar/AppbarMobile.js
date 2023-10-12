// Dependencies
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

// Styles

// Components
import Logo from './Logo'



const AppbarMobile = () => {


	return (
		
			<AppBar
				position="relative" 
				sx={{
					px: '1rem', 
				}} 
				>
				<Toolbar
					sx={{
						display: 'flex',
						alignItems:'center',
						justifyContent: 'space-between'
					}}
					>
					<Logo />
					{/* <Box>
						<IconButton color='secondary' sx={{visibility: showNavMenu ? 'hidden':'visible' }} onClick = {() => setShowNavMenu(!showNavMenu) }>
							<MenuIcon />
						</IconButton>
					</Box> */}
				</Toolbar>

			</AppBar>
	)
}

export default AppbarMobile