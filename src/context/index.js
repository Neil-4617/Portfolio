import { createContext, useContext, useState } from 'react'

export const UIContext = createContext()
export const useUIContext = () => useContext(UIContext)

export const UIProvider = ({children}) => {
	const [showNavMenu, setShowNavMenu ] = useState(false)
	const value = { showNavMenu, setShowNavMenu }
	return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}