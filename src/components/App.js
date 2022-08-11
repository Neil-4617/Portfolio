// Dependencies
import { ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
// Context
import { UIProvider } from '../context'


// Styles
import theme  from '../styles/theme'

// Components
import Appbar from './appbar/Appbar'
import NavMenu from './appbar/NavMenu'
import Footer from './Footer'




const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<UIProvider>
				<Box			
					sx={{
						height: '100vh',
						display: 'flex',
						flexDirection: 'column'
					}} 
				>	
				<Box>
					<Appbar />
				</Box>
					<Footer />
					<NavMenu />
				</Box>
			</UIProvider>
		</ThemeProvider>
		
		/*
			Appbar
				Nav
			Main Content
			About
			Projects
			Blog
			Footer
		*/
	)
}

export default App