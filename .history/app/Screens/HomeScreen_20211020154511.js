import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import Background from '../components/Background'
import Button from '../components/Button'
import Logo from '../components/Logo'
import { ft, hp, wp } from '../config/const'

const MARGIN_HORIZONTAL = wp('5%')
const MARGIN_VERTICAL = hp('5%')

function HomeScreen() {
	return (
		<Background style={{ justifyContent: 'flex-end' }}>
			<Logo style={styles.logo} />
			<View style={styles.container}>
				<Text style={styles.title}>Hello</Text>

				<Button
					title='Log out'
					onPress={() => {
						console.log()
					}}
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

export default HomeScreen
