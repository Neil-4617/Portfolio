// Dependencies
import { ThemeProvider } from '@mui/material/styles'

// Context
import { UIProvider } from '../context'


// Styles
import  theme  from '../styles/theme'

// Components
import Appbar from './appbar/Appbar'
import NavMenu from './appbar/NavMenu'




const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<UIProvider>
				<Appbar />
				<NavMenu />
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