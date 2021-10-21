import React from 'react'
import { Text, StyleSheet } from 'react-native'
import colors from '../config/colors'
import { ft } from '../config/const'
import AppTextInput from './TextInput'

function FormInput({ error, ...otherProps }) {
	return (
		<>
			<AppTextInput {...otherProps} />
			{error && <Text style={styles.text}>{error} </Text>}
		</>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: ft(14),
		color: colors.danger,
		alignSelf: 'center',
	},
})

export default FormInput
