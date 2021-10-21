import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import StartScreen from '../screens/StartScreen'

const Stack = createStackNavigator()

const AuthNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name='Welcome'
			component={StartScreen}
			options={{ headerShown: false }}
		/>
		<Stack.Screen name='Login' component={LoginScreen} />
		<Stack.Screen name='Register' component={RegisterScreen} />
	</Stack.Navigator>
)

export default AuthNavigator
