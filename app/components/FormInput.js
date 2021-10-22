import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import { ft } from '../config/const'
import AppTextInput from './TextInput'

function FormInput({ error, ...otherProps }) {
	return (
		<>
			<AppTextInput {...otherProps} />
			{error !== '' ? <Text style={styles.error}>{error}</Text> : null}
		</>
	)
}

const styles = StyleSheet.create({
	error: {
		color: colors.danger,
		fontSize: ft(14),
	},
})

export default FormInput
