// Dependencies
import { createTheme } from '@mui/material/styles'


export const Colors = {
	// primary: '#040F16', //dark
	// secondary: '#F39C12'// yellow
	primary: '#006BA3', //blue
	secondary: '#FFFFFF'// yellow
}

const theme = createTheme({
	palette: {
		primary: {
			main: Colors.primary
		},
		secondary: {
			main: Colors.secondary
		}
	}
})

export default theme