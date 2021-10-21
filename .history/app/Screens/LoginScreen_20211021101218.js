import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Background from '../components/Background'
import Button from '../components/Button'
import Divider from '../components/Divider'
import FormInput from '../components/FormInput'
import AppTextInput from '../components/TextInput'
import colors from '../config/colors'
import { emailValidator, ft, hp, wp } from '../config/const'

const MARGIN_HORIZONTAL = wp('5%')
const MARGIN_VERTICAL_TALL = hp('6%')
const MARGIN_VERTICAL_SHORT = hp('3%')

function LoginScreen() {
	FontAwesome.loadFont()

	const PasswordToggle = () => {
		return (
			<FontAwesome
				name={passwordVisible ? 'eye-slash' : 'eye'}
				color={colors.light}
				size={wp('5%')}
				onPress={() => {
					setPasswordVisible(!passwordVisible)
				}}
			/>
		)
	}

	const [passwordVisible, setPasswordVisible] = useState(false)
	const [email, setEmail] = useState({ value: '', error: '' })
	const [password, setPassword] = useState({ value: '', error: '' })

	return (
		<Background>
			<View style={{ flex: 1 }}>
				<Text style={styles.title}>Welcome{'\n'}Back</Text>
			</View>
			<View style={styles.overlay}>
				<View style={styles.container}>
					<FormInput
						icon='envelope'
						placeholder='Email'
						color={colors.light}
						extraIcon={
							<FontAwesome
								name={
									email.error === '' &&
									email.value.length > 0
										? 'check'
										: null
								}
								color={colors.light}
								size={wp('5%')}
							/>
						}
						onChangeText={(text) => {
							setEmail({
								value: text,
								error: emailValidator(
									email.value
								),
							})
							console.log(text)
						}}
						value={email.value}
					/>
					<FormInput
						icon='lock'
						placeholder='Password'
						color={colors.light}
						extraIcon={PasswordToggle}
						onChangeText={(text) => {
							setPassword({
								value: text,
								...password.error,
							})
						}}
						secureTextEntry={!passwordVisible}
						value={password.value}
					/>
					<View
						style={{ marginTop: MARGIN_VERTICAL_SHORT }}
					>
						<Button
							title='Log in'
							color={colors.primary}
							filled
							onPress={() => {
								console.log()
							}}
						/>
						<Divider />
						<Button
							title='Sign up'
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

export default LoginScreen
