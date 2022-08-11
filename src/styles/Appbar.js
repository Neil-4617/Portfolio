import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import { Colors } from './theme'


export const AppbarContainer = styled(Box)(() =>({
	position: 'relative',
	background: Colors.primary,
	color: 'white'
}))

export const NavMenuContainer = styled(Box)(()=> ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '40%',
	background: Colors.secondary,
	display:'flex',
	flexDirection: 'column',
	justifyContent: 'space-evenly',
	zIndex: 9999,
	opacity: 0.9
}));

export const NavButton = styled(Box)(()=> ({
	color: Colors.primary,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: '3rem',
	maxHeight: '5rem',
	fontSize: '1.5rem'
}))

