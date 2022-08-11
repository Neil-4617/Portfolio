import Slide from '@mui/material/Slide'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

// Style
import { NavMenuContainer, NavButton } from '../../styles/appbar'

// Context
import { useUIContext } from '../../context'


const NavMenu = () => {

	const { showNavMenu, setShowNavMenu} = useUIContext()
	
	// Pages
	const pages = ["Home", "About", "Projects", "Blog"]

	return (
		<Slide direction = "down" in={showNavMenu} timeout={500} >
			<NavMenuContainer>
				{
					pages.map((page) => (
						<NavButton key={page}>{page}</NavButton>
					))
				}
				
				<IconButton
					sx={{ position: 'absolute', top: 10, right: 30 }} 
					onClick = {() => setShowNavMenu(false)} >
					<CloseIcon sx={{ fontSize: '2rem'}} />
				</IconButton>
			</NavMenuContainer>
		</Slide>
	)
}

export default NavMenu