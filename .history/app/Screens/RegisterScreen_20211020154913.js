import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Background from './app/components/Background'
import Button from './app/components/Button'
import Logo from './app/components/Logo'
import AppTextInput from './app/components/TextInput'
import { ft, hp, wp } from './app/config/const'

function RegisterScreen() {
	const [passwordVisible, setPasswordVisible] = useState(true)

	return (
		<Background style={{ justifyContent: 'flex-end' }}>
			<Logo style={styles.logo} />
			<View style={styles.container}>
				<Text style={styles.title}>Water Delivery</Text>
				<Text style={styles.description}>
					We deliver water at any point of the Earth in 30
					minutes aaas
				</Text>
				<AppTextInput icon='user' color='white' />
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
		</Background>
	)
}

const styles = StyleSheet.create({
	description: {
		color: 'white',
		fontSize: ft(14),
		marginBottom: MARGIN_VERTICAL,
	},
	container: {
		justifyContent: 'center',
		marginHorizontal: wp('5%'),
	},
	logo: {
		position: 'absolute',
		top: hp('3%'),
		left: wp('5%'),
	},
	title: {
		color: 'white',
		fontSize: ft(28),
	},
})

export default RegisterScreen
