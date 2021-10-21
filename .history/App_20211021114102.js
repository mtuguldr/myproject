import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AuthNavigator from './app/navigation/AuthNavigator'
import Dashboard from './app/Screens/Dashboard'
import LoginScreen from './app/Screens/LoginScreen'
import RegisterScreen from './app/Screens/RegisterScreen'
import StartScreen from './app/Screens/StartScreen'

function App(props) {
	return <NavigationContainer>
        <AuthNavigator
    </NavigationContainer>
}

export default App
