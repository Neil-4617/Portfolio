import Box from '@mui/material/Box'

const Logo = () => {
	return (
		<Box	
						component="img"
						sx={{ 
							height:'50px',
							py: '4px',
						}}
							src="./assets/images/Navbrand-Portfolio.svg" 
							alt="Logo"
					/>
	)
}

export default Logo 