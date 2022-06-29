// Dependencies
import { createTheme } from '@mui/material/styles'


export const Colors = {
	primary: '#040F16',
	secondary: '#F39C12'
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