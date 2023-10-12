// Dependencies
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

// Components
import Logo from './Logo'

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
				{/* <Box
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
				</Box> */}
			</Toolbar>
			
		</AppBar>
	)
}

export default AppbarDesktop