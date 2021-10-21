import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import Background from '../components/Background'
import Button from '../components/Button'
import Logo from '../components/Logo'
import { ft, hp, wp } from '../config/const'

const MARGIN_HORIZONTAL = wp('5%')
const MARGIN_VERTICAL = hp('5%')

function StartScreen() {
	return (
		<Background style={{ justifyContent: 'flex-end' }}>
			<Logo style={styles.logo} />
			<View style={styles.container}>
				<Text style={styles.title}>Water Delivery</Text>
				<Text style={styles.description}>
					We deliver water at any point of the Earth in 30
					minutes
				</Text>

				<Button
					title='Login'
					onPress={() => {
						console.log()
					}}
				/>
				<Button
					title='Sign up'
					color='white'
					filled
					onPress={() => {}}
				/>
			</View>
		</Background>
	)
}

const styles = StyleSheet.create({
	description: {
		fontSize: ft(14),
		marginBottom: MARGIN_VERTICAL,
	},
	container: {
		justifyContent: 'center',
		marginHorizontal: MARGIN_HORIZONTAL,
	},
	logo: {
		position: 'absolute',
		top: Platform.OS === 'ios' ? hp('6%') : hp('3%'),
		left: MARGIN_HORIZONTAL,
	},
	title: {
		color: 'white',
		fontSize: ft(28),
	},
})

export default StartScreen
