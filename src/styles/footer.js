import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import { Colors } from './theme'

export const FooterCard = styled(Box)(()=> ({
	flex: 1,
	background: Colors.primary,
	color: 'white',
}))

export const CustomTF = styled(TextField)(()=> ({
	'.MuiInputBase-root': {
		color: Colors.secondary,
	},
	'.MuiOutlinedInput-input': {
		color: 'white'
	}
}))