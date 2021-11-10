import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Button, FormInput, TextButton } from '../../components'
import defaultStyles from '../../config/styles'
import { hp, wp, emailValidator, passwordValidator } from '../../config/const'
import { Icon } from '../../components/Icon'

const ICON_SIZE = wp(5)

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState({
        color: defaultStyles.colors.light,
        error: '',
        focused: false,
        value: '',
    })
    const [password, setPassword] = useState({
        color: defaultStyles.colors.light,
        error: '',
        focused: false,
        value: '',
    })
    const [error, setError] = useState('')
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
                return
            }
            const users = JSON.parse(result)
            for (let i = 0; i < users.length; i++) {
                if (
                    email.value.toLowerCase() === users[i].email &&
                    password.value === users[i].password
                ) {
                    users[i].loggedIn = true
                    AsyncStorage.setItem('users', JSON.stringify(users))

                    // navigation.reset({
                    //     index: 0,
                    //     routes: [{ name: 'Dashboard' }],
                    // })
                    return
                }
                setError('Email or password is incorrect')
                return
            }
            setError("User doesn't exist")
        } catch (err) {
            console.log(err)
        }
    }
    const EmailIcon = () => (
        <Icon
            iconFamily='IO'
            color={email.color}
            name='mail-outline'
            size={ICON_SIZE}
            style={defaultStyles.inputIcon}
        />
    )
    const EmailCheckIcon = () => (
        <Icon
            iconFamily='IO'
            name='checkmark'
            color={email.color}
            size={ICON_SIZE}
            style={defaultStyles.inputIcon}
        />
    )

    const PasswordIcon = () => (
        <Icon
            iconFamily='IO'
            color={password.color}
            name='lock-closed-outline'
            size={ICON_SIZE}
            style={defaultStyles.inputIcon}
        />
    )
    const PasswordToggleIcon = () => (
        <Icon
            iconFamily='IO'
            color={password.color}
            name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
            onPress={() => {
                setPasswordVisible(!passwordVisible)
            }}
            size={ICON_SIZE}
            style={defaultStyles.inputIcon}
        />
    )

    return (
        <View style={styles.background}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={[defaultStyles.text, defaultStyles.large]}>
                    Welcome Back
                </Text>
            </View>
            <View style={{ flex: 2 }}>
                <FormInput
                    color={email.color}
                    error={email.error}
                    Right={<EmailCheckIcon />}
                    Left={<EmailIcon />}
                    maxLength={30}
                    onChangeText={(text) => {
                        setEmail({
                            value: text,
                            error: '',
                            color:
                                emailValidator(text) === '' && text.length > 0
                                    ? defaultStyles.colors.primary
                                    : defaultStyles.colors.light,
                        })
                        setError('')
                    }}
                    placeholder='Email'
                    value={email.value}
                    style={styles.container}
                />

                <FormInput
                    color={password.color}
                    error={password.error}
                    Right={<PasswordToggleIcon />}
                    Left={<PasswordIcon />}
                    maxLength={30}
                    onChangeText={(text) => {
                        setPassword({
                            value: text,
                            error: '',
                            color:
                                passwordValidator(text) === ''
                                    ? defaultStyles.colors.primary
                                    : defaultStyles.colors.light,
                        })
                        setError('')
                    }}
                    placeholder='Password'
                    secureTextEntry={!passwordVisible}
                    value={password.value}
                    style={styles.container}
                />

                <View style={{ alignItems: 'flex-end' }}>
                    <TextButton
                        title='Forgot Password?'
                        onPress={() => {
                            navigation.navigate('ForgotPassword')
                        }}
                    />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Button
                    backgroundColor={defaultStyles.colors.primary}
                    borderTextColor={defaultStyles.colors.white}
                    filled
                    onPress={onPressLogin}
                    title='Sign in'
                />
                <Text style={[defaultStyles.text, styles.error]}>{error}</Text>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                    <Text style={defaultStyles.text}>
                        Don't have an account?
                    </Text>
                    <TextButton
                        title=' Sign up'
                        onPress={() => {
                            navigation.navigate('Register')
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: defaultStyles.colors.white, //'#fcfcfc',
        flex: 1,
        paddingHorizontal: defaultStyles.backgroundPadding,
    },
    container: {
        marginVertical: hp(1.5),
    },
    error: {
        alignSelf: 'center',
        color: defaultStyles.colors.danger,
        height: hp(3),
        marginTop: hp(1),
    },
})

export default LoginScreen
