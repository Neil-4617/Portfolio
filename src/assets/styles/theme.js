// Dependencies
import { createTheme } from '@mui/material/styles'


export const Colors = {
	primary: '#040F16', //dark
	// secondary: '#F39C12' //yellow
	// primary: '#006BA3', //blue
	secondary: '#00356F'// blue
}

const theme = createTheme({
	palette: {
    primary: {
      light: '#363f44',
      main: '#040F16',
      dark: '#020a0f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#335d8b',
      main: '#00356F',
      dark: '#00254d',
      contrastText: '#fff',
    },
  },
})

export default theme