import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './app/navigation/AuthNavigator'
import StartScreen from './app/screens/StartScreen'

function App(props) {
	return (
		<NavigationContainer>
			<AuthNavigator />
		</NavigationContainer>
	)
}

export default App
