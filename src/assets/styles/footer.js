import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'


export const FooterCard = styled(Box)(()=> ({
	display: 'flex',
	flexDirection: 'column',
	color: 'white',
}))

export const CustomTF = styled(TextField)(()=> ({
	margin: '0.5rem 0',
	'.MuiInputBase-root': {
		color: 'white',
	},
	'.MuiOutlinedInput-input': {
		color: 'white'
	}
}))