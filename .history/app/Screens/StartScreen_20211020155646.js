import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import Background from '../components/Background'
import Button from '../components/Button'
import Logo from '../components/Logo'
import colors from '../config/colors'
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
					color={colors.white}
					filled
					onPress={() => {}}
					title='Login'
				/>
				<Button
					title='Sign up'
					color={colors.white}
					onPress={() => {}}
				/>
			</View>
		</Background>
	)
}

const styles = StyleSheet.create({
	description: {
		color: 'white',
		fontSize: ft(14),
		marginBottom: MARGIN_VERTICAL,
	},
	container: {
		justifyContent: 'center',
		marginHorizontal: MARGIN_HORIZONTAL,
		marginBottom: Platform.OS === 'ios' ? hp('6%') : hp('3%'),
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
