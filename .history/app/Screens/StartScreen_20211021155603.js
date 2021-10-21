import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import Background from '../components/Background'
import Button from '../components/Button'
import Logo from '../components/Logo'
import colors from '../config/colors'
import { ft, hp, wp } from '../config/const'

const MARGIN_HORIZONTAL = wp('5%')
const MARGIN_VERTICAL_TALL = hp('6%')
const MARGIN_VERTICAL_SHORT = hp('3%')

function StartScreen({ navigation }) {
	return (
		<Background>
			<View style={{ flex: 1 }}>
				<Logo style={styles.logo} />
			</View>
			<View style={styles.container}>
				<Text style={styles.title}>Water Delivery</Text>
				<Text style={styles.description}>
					We deliver water at any point of the Earth in 30
					minutes
				</Text>

				<Button
					color={colors.white}
					filled
					onPress={() => {
						navigation.navigate('Login')
					}}
					title='Log in'
				/>
				<Button
					color={colors.white}
					onPress={() => {
						navigation.navigate('Register')
					}}
					title='Sign up'
				/>
			</View>
		</Background>
	)
}

const styles = StyleSheet.create({
	description: {
		color: 'white',
		fontSize: ft(14),
		marginBottom: MARGIN_VERTICAL_TALL,
	},
	container: {
		justifyContent: 'center',
		marginHorizontal: MARGIN_HORIZONTAL,
		marginBottom:
			Platform.OS === 'ios'
				? MARGIN_VERTICAL_TALL
				: MARGIN_VERTICAL_SHORT,
	},
	logo: {
		// position: 'absolute',
		top:
			Platform.OS === 'ios'
				? MARGIN_VERTICAL_TALL
				: MARGIN_VERTICAL_SHORT,
		left: MARGIN_HORIZONTAL,
	},
	title: {
		color: 'white',
		fontSize: ft(28),
		marginBottom: MARGIN_VERTICAL_SHORT,
	},
})

export default StartScreen
