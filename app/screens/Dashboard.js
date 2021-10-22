import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import DeviceInfo from 'react-native-device-info'

import Background from '../components/Background'
import Button from '../components/Button'
import Logo from '../components/Logo'
import colors from '../config/colors'
import { ft, hp, wp } from '../config/const'

const MARGIN_HORIZONTAL = wp('5%')
const MARGIN_VERTICAL_TALL = hp('6%')
const MARGIN_VERTICAL_SHORT = hp('3%')

function Dashboard({ navigation }) {
	// const [name, setName] = useState('')

	const signoutUser = async () => {
		try {
			let result = null
			await AsyncStorage.getItem('users').then((value) => {
				result = value
			})
			let users = JSON.parse(result)
			for (let i = 0; i < users.length; i++) {
				if (users[i].loggedIn === true) {
					users[i].loggedIn = false
					AsyncStorage.setItem('users', JSON.stringify(users))

					return true
				}
			}
		} catch (err) {
			console.log(err)
		}
	}

	// const getName = async () => {
	// 	try {
	// 		let result = null
	// 		await AsyncStorage.getItem('users').then((value) => {
	// 			result = value
	// 		})
	// 		let users = JSON.parse(result)
	// 		for (let i = 0; i < users.length; i++) {
	// 			if (users[i].loggedIn === true) {
	// 				setName(users[i].name)
	// 			}
	// 		}
	// 	} catch (err) {
	// 		console.log(err)
	// 	}
	// }

	function onSignoutPress() {
		signoutUser().then((result) => {
			if (result === true) {
				// navigation.reset({
				// 	index: 0,
				// 	routes: [{ name: 'Start' }],
				// })
				console.log(`navigation`, navigation)
				navigation.pop()
			}
		})
	}

	return (
		<Background>
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Logo style={styles.logo} />
				<Text style={styles.title}>Hello{'\n'}</Text>
			</View>
			<View style={styles.container}>
				<Button title='Sign out' onPress={onSignoutPress} />
			</View>
		</Background>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		marginBottom: Platform.OS === 'ios' ? MARGIN_VERTICAL_TALL : MARGIN_VERTICAL_SHORT,
	},
	logo: {
		position: 'absolute',
		top: DeviceInfo.hasNotch() ? MARGIN_VERTICAL_TALL : MARGIN_VERTICAL_SHORT,
	},
	title: {
		color: colors.white,
		fontSize: ft(28),
		marginBottom: MARGIN_VERTICAL_SHORT,
	},
})

export default Dashboard
