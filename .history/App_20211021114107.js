import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AuthNavigator from './app/navigation/AuthNavigator'=

function App(props) {
	return (
		<NavigationContainer>
			<AuthNavigator />
		</NavigationContainer>
	)
}

export default App
