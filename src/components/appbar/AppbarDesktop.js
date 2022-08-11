// Dependencies
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// Styles
import { AppbarContainer } from '../../styles/appbar'

// Components
import Logo from './Logo'

// Pages
const pages = ["Home", "About", "Projects", "Blog"]

const AppbarDesktop = () => {
	return (
		<AppbarContainer>
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					mx: '5rem'
				}}

				>
				<Logo />
				<Box
					sx={{
						display:'flex',
						gap: '3rem'
					}}
					>
					{
						pages.map((page)=>(
							<Button
								key={page}
								variant= 'h5'
								color= 'white'
							>
							{page}
							</Button>
						))
					}
				</Box>
			</Toolbar>
		</AppbarContainer>
	)
}

export default AppbarDesktop