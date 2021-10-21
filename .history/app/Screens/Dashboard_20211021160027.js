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

function Dashboard() {
	function onLogoutPress() {}

	return (
		<Background>
			<View style={{ flex: 1 }}>
				<Logo style={styles.logo} />
				<Text style={styles.title}>Hello</Text>
			</View>
			<View style={styles.container}>
				<Button title='Log out' onPress={onLogoutPress} />
			</View>
		</Background>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		marginHorizontal: MARGIN_HORIZONTAL,
		marginBottom:
			Platform.OS === 'ios'
				? MARGIN_VERTICAL_TALL
				: MARGIN_VERTICAL_SHORT,
	},
	logo: {
		position: 'absolute',
		top: DeviceInfo.hasNotch()
			? MARGIN_VERTICAL_TALL
			: MARGIN_VERTICAL_SHORT,
		left: MARGIN_HORIZONTAL,
	},
	title: {
		alignSelf: 'center',
		color: colors.white,
		fontSize: ft(28),
		marginBottom: MARGIN_VERTICAL_SHORT,
	},
})

export default Dashboard
