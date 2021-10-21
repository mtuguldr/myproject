import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Background from '../components/Background'
import Button from '../components/Button'
import FormInput from '../components/FormInput'
import AppTextInput from '../components/TextInput'
import { ft, hp, wp } from '../config/const'

const MARGIN_HORIZONTAL = wp('5%')
const MARGIN_VERTICAL_TALL = hp('8%')
const MARGIN_VERTICAL_SHORT = hp('4%')

function RegisterScreen() {
	FontAwesome.loadFont()
	const [passwordVisible, setPasswordVisible] = useState(true)

	return (
		<Background>
			<View style={{ flex: 1 }}>
				<Text style={styles.title}>Create{'\n'}Account</Text>
			</View>
			<View>
				<View style={styles.container}>
					<FormInput
						placeholder='Name'
						icon='user'
						color='white'
					/>
					<AppTextInput
						icon='envelope'
						placeholder='Email'
						color='white'
						extraIcon={
							<FontAwesome
								name='check'
								color='white'
								size={20}
							/>
						}
					/>
					<AppTextInput
						icon='lock'
						placeholder='Password'
						color='white'
						extraIcon={
							<FontAwesome
								name={
									passwordVisible
										? 'eye-slash'
										: 'eye'
								}
								color='white'
								size={20}
								onPress={() => {
									setPasswordVisible(
										!passwordVisible
									)
								}}
							/>
						}
						secureTextEntry={!passwordVisible}
					/>
					<Button
						title='Login'
						onPress={() => {
							console.log()
						}}
					/>
					<Button
						title='Sign up'
						color='white'
						filled
						onPress={() => {}}
					/>
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
	},
	logo: {
		position: 'absolute',
		top: hp('3%'),
		left: MARGIN_HORIZONTAL,
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
