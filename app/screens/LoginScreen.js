import React, { useState } from 'react'
import { AppState, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [error, setError] = useState('')
    const [colorState, setColor] = React.useState('red')
    const [passwordVisible, setPasswordVisible] = useState(false)

    const onPressLogin = async () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }

        try {
            let result = await AsyncStorage.getItem('users')

            if (result === null) {
                setError("User doesn't exist")
                return false
            }
            const users = JSON.parse(result)
            console.log(`users`, users)
            for (let i = 0; i < users.length; i++) {
                if (email.value.toLowerCase() === users[i].email) {
                    if (password.value === users[i].password) {
                        users[i].loggedIn = true
                        AsyncStorage.setItem('users', JSON.stringify(users))

                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Dashboard' }],
                        })
                    } else {
                        setError('Password is incorrect')
                        return
                    }
                }
            }
            setError("User doesn't exist")
            return
        } catch (err) {
            console.log(err)
        }
    }

    const EmailIcon = () => (
        <FontAwesome
            color={highlightInput(email.value)}
            name='envelope'
            size={ICON_SIZE}
        />
    )
    const EmailCheckIcon = () => (
        <FontAwesome
            name={
                emailValidator(email.value) === '' && email.value.length > 0
                    ? 'check'
                    : null
            }
            color={colors.light}
            size={ICON_SIZE}
        />
    )

    const checkColor = (text) => {
        const color = text.length > 0 ? colors.primary : colors.light
        return color
    }

    const LockIcon = () => (
        <FontAwesome color={colorState} name='lock' size={ICON_SIZE} />
    )
    const PasswordToggleIcon = () => (
        <FontAwesome
            name={passwordVisible ? 'eye-slash' : 'eye'}
            color={highlightInput(password.value)}
            size={ICON_SIZE}
            onPress={() => {
                setPasswordVisible(!passwordVisible)
            }}
        />
    )

    return (
        <AuthContainer title={'Welcome\nBack'} navigation={navigation}>
            <FormInput placeholder='Test' icon='user' />

            <FormInput
                color={colorState}
                error={email.error}
                ExtraIcon={<EmailCheckIcon />}
                Icon={<EmailIcon />}
                onChangeText={(text) => {
                    if (text.length > 3) {
                        setColor('green')
                    } else {
                        setColor('red')
                    }
                    setEmail({
                        value: text,
                        error: '',
                    })
                    setError('')
                }}
                placeholder='Email'
                value={email.value}
            />

            <FormInput
                color={highlightInput(password.value)}
                error={password.error}
                ExtraIcon={<PasswordToggleIcon />}
                Icon={<LockIcon />}
                onChangeText={(text) => {
                    setPassword({
                        value: text,
                        error: '',
                    })
                    setError('')
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

export default LoginScreen
