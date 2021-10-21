import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import AuthContainer from '../components/AuthContainer'
import Button from '../components/Button'
import Divider from '../components/Divider'
import FormInput from '../components/FormInput'
import colors from '../config/colors'
import {
	emailValidator,
	ft,
	highlightInput,
	hp,
	passwordValidator,
	wp,
} from '../config/const'

const MARGIN_VERTICAL_SHORT = hp('3%')
const ICON_SIZE = wp('5%')

function LoginScreen({ navigation }) {
	const [passwordVisible, setPasswordVisible] = useState(false)
	const [email, setEmail] = useState({ value: '', error: '' })
	const [password, setPassword] = useState({ value: '', error: '' })
	const [result, setResult] = useState('')

	function onPressLogin() {
		const emailError = emailValidator(email.value)
		const passwordError = passwordValidator(password.value)
		if (emailError || passwordError) {
			setEmail({ ...email, error: emailError })
			setPassword({ ...password, error: passwordError })
			return
		}

		if (loginCheck()) {
			navigation.reset({
				index: 0,
				routes: [{ name: 'Dashboard' }],
			})
		} else {
		}
	}

	function loginCheck() {
		try {
			AsyncStorage.clear()
			AsyncStorage.getItem('users').then((result) => {				)
				if (result !== null) {
					const parsed = JSON.parse(result)

					for (let i = 0; i < parsed.length; i++) {
						if (email.value === parsed[i].name) {
							if (
								password.value ===
								parsed[i].password
							) {
								parsed[i].loggedIn = true
								AsyncStorage.setItem(
									'users',
									JSON.stringify(parsed)
								)
								return true
							} else {
								setResult(
									'Password is incorrect'
								)
							}
						}
					}
					setResult("User doesn't exist")
					return false
				}
			})
		} catch (err) {
			console.log(err)
		}
	}

	const PasswordToggleIcon = () => {
		return (
			<FontAwesome
				name={passwordVisible ? 'eye-slash' : 'eye'}
				color={colors.light}
				size={ICON_SIZE}
				onPress={() => {
					setPasswordVisible(!passwordVisible)
				}}
			/>
		)
	}

	const EmailCheckIcon = () => {
		return (
			<FontAwesome
				name={
					emailValidator(email.value) === '' &&
					email.value.length > 0
						? 'check'
						: null
				}
				color={colors.light}
				size={ICON_SIZE}
			/>
		)
	}

	return (
		<AuthContainer title={'Welcome\nBack'} navigation={navigation}>
			<FormInput
				color={highlightInput(email.value)}
				error={email.error}
				extraIcon={<EmailCheckIcon />}
				icon='envelope'
				onChangeText={(text) => {
					setEmail({
						value: text,
						error: '',
					})
					setResult('')
				}}
				placeholder='Email'
				value={email.value}
			/>
			<FormInput
				color={highlightInput(password.value)}
				error={password.error}
				extraIcon={<PasswordToggleIcon />}
				icon='lock'
				onChangeText={(text) => {
					setPassword({
						value: text,
						error: '',
					})
				}}
				placeholder='Password'
				secureTextEntry={!passwordVisible}
				value={password.value}
			/>
			<TouchableOpacity>
				<Text
					style={{
						fontSize: ft(14),
						fontWeight: 'bold',
						textAlign: 'right',
						color: colors.primary,
						marginTop: hp('1%'),
					}}
				>
					Forgot Password?
				</Text>
			</TouchableOpacity>
			<View style={{ marginTop: MARGIN_VERTICAL_SHORT }}>
				<Button
					color={colors.primary}
					filled
					onPress={onPressLogin}
					title='Log in'
				/>
				<Divider />
				<Button
					color={colors.light}
					title='Sign up'
					onPress={() => {
						navigation.navigate('Register')
					}}
				/>
				{result !== '' ? (
					<Text style={styles.error}>{result}</Text>
				) : null}
			</View>
		</AuthContainer>
	)
}

const styles = StyleSheet.create({
	error: {
		color: colors.danger,
		fontSize: ft('14'),
		alignSelf: 'center',
	},
})

export default LoginScreen
