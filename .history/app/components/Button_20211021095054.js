import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import colors from '../config/colors'
import { ft, hp } from '../config/const'

function Button({ title, onPress, color = colors.primary, filled = true }) {
	return (
		<TouchableOpacity
			style={[
				styles.container,
				filled
					? {
							backgroundColor: color,
							borderColor: color,
					  }
					: {
							backgroundColor: 'transparent',
							borderColor: color,
					  },
			]}
			onPress={onPress}
		>
			<Text
				style={[
					styles.text,
					filled
						? {
								color: colors.primary,
						  }
						: {
								color: color,
						  },
				]}
			>
				{title}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		borderRadius: 10,
		padding: 15,
		borderWidth: 1,
		marginVertical: hp('1%'),
	},
	text: {
		fontWeight: 'bold',
		fontSize: ft(14),
		alignSelf: 'center',
	},
})

export default Button
