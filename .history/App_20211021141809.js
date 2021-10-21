import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './app/navigation/AuthNavigator'
import StartScreen from './app/Screens/StartScreen'

function App(props) {
	return (
		// <NavigationContainer>
		// 	<AuthNavigator />
		// </NavigationContainer>
		<StartScreen />
	)
}

export default App
