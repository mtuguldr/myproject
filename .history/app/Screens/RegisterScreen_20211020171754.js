import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Background from '../components/Background'
import Button from '../components/Button'
import Divider from '../components/Divider'
import FormInput from '../components/FormInput'
import AppTextInput from '../components/TextInput'
import colors from '../config/colors'
import { ft, hp, wp } from '../config/const'

const MARGIN_HORIZONTAL = wp('5%')
const MARGIN_VERTICAL_TALL = hp('6%')
const MARGIN_VERTICAL_SHORT = hp('3%')
const ICON_SIZE = wp('5%')

function RegisterScreen() {
	FontAwesome.loadFont()
	const [passwordVisible, setPasswordVisible] = useState(false)
	const [name, setName] = useState({ value: '', error: '' })
	const [email, setEmail] = useState({ value: '', error: '' })
	const [password, setPassword] = useState({ value: '', error: '' })

	function highlight(text) {
		const color = text.length > 0 ? colors.primary : colors.light
	}

	return (
		<Background>
			<View style={{ flex: 1 }}>
				<Text style={styles.title}>Create{'\n'}Account</Text>
			</View>
			<View style={styles.overlay}>
				<View style={styles.container}>
					<FormInput
						placeholder='Name'
						icon='user'
						color={
							name.value.length > 0
								? colors.primary
								: colors.light
						}
						onTextChange={(text) => {
							setName({ value: text, ...error })
						}}
						//value={name.value}
					/>
					<FormInput
						color={colors.light}
						icon='envelope'
						onTextChange={(text) => {
							setEmail({ value: text, ...error })
						}}
						placeholder='Email'
					/>
					<FormInput
						color={colors.light}
						extraIcon={
							<FontAwesome
								name={
									passwordVisible
										? 'eye-slash'
										: 'eye'
								}
								color={colors.light}
								size={ICON_SIZE}
								onPress={() => {
									setPasswordVisible(
										!passwordVisible
									)
								}}
							/>
						}
						icon='lock'
						onTextChange={(text) => {
							setPassword({ value: text, ...error })
						}}
						placeholder='Password'
						secureTextEntry={!passwordVisible}
					/>
					<View
						style={{ marginTop: MARGIN_VERTICAL_SHORT }}
					>
						<Button
							title='Sign up'
							color={colors.primary}
							filled
							onPress={() => {
								console.log()
							}}
						/>
						<Divider />
						<Button
							title='Log in'
							color={colors.light}
							onPress={() => {}}
						/>
					</View>
				</View>
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
		position: 'absolute',
		top: hp('3%'),
		left: MARGIN_HORIZONTAL,
	},
	overlay: {
		backgroundColor: colors.white,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	title: {
		color: 'white',
		fontSize: ft(28),
		top:
			Platform.OS === 'ios'
				? MARGIN_VERTICAL_TALL
				: MARGIN_VERTICAL_SHORT,
		left: MARGIN_HORIZONTAL,
	},
})

export default RegisterScreen
