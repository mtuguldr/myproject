import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../config/colors'
import { ft } from '../config/const'

function Logo({ style, icon, name }) {
	return (
		<View style={style}>
			<Text style={styles.text}>wwater</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		color: colors.white,
		fontWeight: 'bold',
		fontSize: ft(22),
	},
})

export default Logo
