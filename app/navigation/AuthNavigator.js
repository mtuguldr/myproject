import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import StartScreen from '../screens/StartScreen'
import Dashboard from '../screens/Dashboard'

const Stack = createStackNavigator()

const auth = async () => {
	const [isLoggedIn, setLoggedIn] = React.useState(false)

	try {
		let result = null
		await AsyncStorage.getItem('users').then((value) => {
			result = value
		})

		console.log(`result`, result)

		if (result === null) {
			return false
		}
		console.log(result)
		const users = JSON.parse(result)
		console.log(users)
		for (let i = 0; i < users.length; i++) {
			if (users[i].loggedIn === true) {
				console.log('true')
				return true
			}
		}
		return false
	} catch (err) {
		console.log(err)
	}
}

let isLoggedIn = auth().then((value) => {
	isLoggedIn = value
})

const AuthNavigator = () => {
	const [isLoggedIn, setLoggedIn] = React.useState(false)

	React.useEffect(() => {
		checkState()
	})

	checkState = async () => {
		try {
			let result = null
			await AsyncStorage.getItem('users').then((value) => {
				result = value
			})

			console.log(`result`, result)

			if (result === null) {
				return false
			}
			console.log(result)
			const users = JSON.parse(result)
			console.log(users)
			for (let i = 0; i < users.length; i++) {
				if (users[i].loggedIn === true) {
					console.log('true')
					// return true
					setLoggedIn(true)
				}
			}
			// return false
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{isLoggedIn ? (
				<Stack.Screen name='Dashboard' component={Dashboard} />
			) : (
				<>
					<Stack.Screen name='Start' component={StartScreen} />
					<Stack.Screen name='Login' component={LoginScreen} />
					<Stack.Screen name='Register' component={RegisterScreen} />
					<Stack.Screen name='Dashboard' component={Dashboard} />
				</>
			)}
		</Stack.Navigator>
	)
}

export default AuthNavigator
