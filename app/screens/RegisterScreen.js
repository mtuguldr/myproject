import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
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
	nameValidator,
	passwordValidator,
	wp,
} from '../config/const'

const MARGIN_VERTICAL_SHORT = hp('3%')
const ICON_SIZE = wp('5%')

function RegisterScreen({ navigation }) {
	const [name, setName] = useState({ value: '', error: ' ' })
	const [email, setEmail] = useState({ value: '', error: ' ' })
	const [password, setPassword] = useState({ value: '', error: ' ' })
	const [error, setError] = useState(' ')
	// AsyncStorage.clear()
	const [passwordVisible, setPasswordVisible] = useState(false)
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

	const registerUser = async () => {
		try {
			const newUser = [
				{
					name: name.value,
					email: email.value.toLowerCase(),
					password: password.value,
					loggedIn: false,
				},
			]

			let result = null
			await AsyncStorage.getItem('users').then((value) => {
				result = value
			})

			if (result === null) {
				AsyncStorage.setItem('users', JSON.stringify(newUser))
				return true
			}

			let users = JSON.parse(result)
			console.log(users)
			for (let i = 0; i < users.length; i++) {
				if (users[i].email === email.value.toLowerCase()) {
					setError('Email already registered')
					return false
				}
			}

			let merged = users.concat(newUser[0])
			AsyncStorage.setItem('users', JSON.stringify(merged))
			return true
		} catch (err) {
			console.log(err)
		}
	}

	function onPressSignup() {
		const nameError = nameValidator(name.value)
		const emailError = emailValidator(email.value)
		const passwordError = passwordValidator(password.value)
		if (nameError || emailError || passwordError) {
			setName({ ...name, error: nameError })
			setEmail({ ...email, error: emailError })
			setPassword({ ...password, error: passwordError })
			return
		}

		registerUser().then((result) => {
			console.log('registerUser(): ' + result)
			if (result === true) {
				setName({ value: '', error: ' ' })
				setEmail({ value: '', error: ' ' })
				setPassword({ value: '', error: ' ' })
				navigation.navigate('Login')
			}
		})
	}

	return (
		<AuthContainer title={'Create\nAccount'} navigation={navigation}>
			<FormInput
				color={highlightInput(name.value)}
				error={name.error}
				icon='user'
				onChangeText={(text) => {
					setName({
						value: text,
						error: ' ',
					})
				}}
				placeholder='Name'
				value={name.value}
			/>
			<FormInput
				color={highlightInput(email.value)}
				error={email.error}
				icon='envelope'
				onChangeText={(text) => {
					setEmail({
						value: text,
						error: ' ',
					})
					setError(' ')
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
						error: ' ',
					})
				}}
				placeholder='Password'
				secureTextEntry={!passwordVisible}
				value={password.value}
			/>
			<View style={{ marginTop: MARGIN_VERTICAL_SHORT }}>
				<Button
					title='Sign up'
					color={colors.primary}
					filled
					onPress={onPressSignup}
				/>
				<Divider />
				<Button
					title='Log in'
					color={colors.light}
					onPress={() => {
						navigation.navigate('Login')
					}}
				/>
				<Text style={styles.error}>{error}</Text>
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

export default RegisterScreen
