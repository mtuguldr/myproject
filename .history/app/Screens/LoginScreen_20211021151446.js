import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Background from '../components/Background'
import Button from '../components/Button'
import Divider from '../components/Divider'
import FormInput from '../components/FormInput'
import colors from '../config/colors'
import { emailValidator, ft, hp, passwordValidator, wp } from '../config/const'

const MARGIN_HORIZONTAL = wp('5%')
const MARGIN_VERTICAL_TALL = hp('6%')
const MARGIN_VERTICAL_SHORT = hp('3%')
const ICON_SIZE = wp('5%')

function LoginScreen({ navigation }) {
	FontAwesome.loadFont()
	const [passwordVisible, setPasswordVisible] = useState(false)
	const [email, setEmail] = useState({ value: '', error: '' })
	const [password, setPassword] = useState({ value: '', error: '' })

	function highlight(text) {
		const color = text.length > 0 ? colors.primary : colors.light
		return color
	}
	function onPressLogin() {
		const emailError = emailValidator(email.value)
		const passwordError = passwordValidator(password.value)
		if (emailError || passwordError) {
			setEmail({ ...email, error: emailError })
			setPassword({ ...password, error: passwordError })
			return
		}

		// ..

		navigation.reset({
			index: 0,
			routes: [{ name: 'Dashboard' }],
		})
	}

	function userValidation() {
		try {
		} catch (err) {}
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
		<Background>
			<View style={{ flex: 1 }}>
				<FontAwesome
					style={styles.backButton}
					name='chevron-left'
					size={ICON_SIZE}
					color={colors.white}
				/>
				<Text style={styles.title}>Welcome{'\n'}Back</Text>
			</View>
			<View style={styles.overlay}>
				<View style={styles.container}>
					<FormInput
						color={highlight(email.value)}
						error={email.error}
						extraIcon={<EmailCheckIcon />}
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
					<View
						style={{ marginTop: MARGIN_VERTICAL_SHORT }}
					>
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
					</View>
				</View>
			</View>
		</Background>
	)
}

const styles = StyleSheet.create({
	backButton: {
		position: 'absolute',
		top:
			Platform.OS === 'ios'
				? MARGIN_VERTICAL_TALL
				: MARGIN_VERTICAL_SHORT,
		left: MARGIN_HORIZONTAL,
	},
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
