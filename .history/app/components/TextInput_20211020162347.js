import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import colors from '../config/colors'
import { ft, wp } from '../config/const'

function AppTextInput({
	icon,
	color = colors.light,
	extraIcon,
	...otherProps
}) {
	return (
		<View style={[styles.container, { borderBottomColor: color }]}>
			{icon ? (
				<View style={{ width: wp('5%') }}>
					<FontAwesome
						style={styles.icon}
						name={icon}
						size={wp('5%')}
						color={color}
					/>
				</View>
			) : null}
			<TextInput
				style={[styles.text, { color: color }]}
				placeholderTextColor={color}
				{...otherProps}
			/>
			{extraIcon}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		borderBottomWidth: 1,
		flexDirection: 'row',
		//padding: 10,
		//paddingBottom: 14,
	},
	icon: {
		alignSelf: 'center',
	},
	text: {
		fontSize: ft(14),
		width: '85%',
	},
})

export default AppTextInput
