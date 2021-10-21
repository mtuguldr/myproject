import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import AuthContainer from '../components/AuthContainer'
import Button from '../components/Button'
import Divider from '../components/Divider'
import FormInput from '../components/FormInput'
import colors from '../config/colors'
import {
	emailValidator,
	ft,
	hp,
	nameValidator,
	passwordValidator,
	wp,
} from '../config/const'

const MARGIN_HORIZONTAL = wp('5%')
const MARGIN_VERTICAL_TALL = hp('6%')
const MARGIN_VERTICAL_SHORT = hp('3%')
const ICON_SIZE = wp('5%')

function RegisterScreen({ navigation }) {
	FontAwesome.loadFont()

	const [passwordVisible, setPasswordVisible] = useState(false)
	const [name, setName] = useState({ value: '', error: '' })
	const [email, setEmail] = useState({ value: '', error: '' })
	const [password, setPassword] = useState({ value: '', error: '' })

	const PasswordToggle = () => {
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

	function highlight(text) {
		const color = text.length > 0 ? colors.primary : colors.light
		return color
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
		setName({ value: '', error: '' })
		setEmail({ value: '', error: '' })
		setPassword({ value: '', error: '' })
		navigation.navigate('Login')
	}

	return (
		<AuthContainer title={'Create\nAccount'}>
			<FormInput
				color={highlight(name.value)}
				error={name.error}
				icon='user'
				onChangeText={(text) => {
					setName({
						value: text,
						error: '',
					})
				}}
				placeholder='Name'
				value={name.value}
			/>
			<FormInput
				color={highlight(email.value)}
				error={email.error}
				icon='envelope'
				onChangeText={(text) => {
					setEmail({
						value: text,
						error: '',
					})
				}}
				placeholder='Email'
				value={email.value}
			/>
			<FormInput
				color={highlight(password.value)}
				error={password.error}
				extraIcon={<PasswordToggle />}
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
			</View>
		</AuthContainer>
	)
}

export default RegisterScreen
