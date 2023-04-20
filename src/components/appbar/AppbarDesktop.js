// Dependencies
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// Components
import Logo from './Logo'

// Pages
const pages = ["Home", "Projects", "Contact", "Blog"]

const AppbarDesktop = () => {
	return (
		<AppBar 
			position='relative' 
			sx={{
				px:'5rem', 
			}}>
			<Toolbar
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
				}}

				>
				<Logo alt="logo"/>
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
							>
							{page}
							</Button>
						))
					}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default AppbarDesktop