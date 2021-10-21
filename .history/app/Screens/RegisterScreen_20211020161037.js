import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Background from '../components/Background'
import Button from '../components/Button'
import AppTextInput from '../components/TextInput'
import { ft, hp, wp } from '../config/const'

const MARGIN_HORIZONTAL = wp('5%')
const MARGIN_VERTICAL_TALL = hp('6%')
const MARGIN_VERTICAL_SHORT = hp('3%')

function RegisterScreen() {
	FontAwesome.loadFont()
	const [passwordVisible, setPasswordVisible] = useState(true)

	return (
		<Background>
			<Text style={styles.title}>Create{'\n'}Account</Text>
			<View style={styles.container}>
				<Text style={styles.description}>
					We deliver water at any point of the Earth in 30
					minutes
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
	},
})

export default RegisterScreen
