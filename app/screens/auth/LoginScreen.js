import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Button, FormInput } from '../../components'
import defaultStyles from '../../config/styles'
import {
    ft,
    hp,
    wp,
    emailValidator,
    passwordValidator,
} from '../../config/const'
import { Icon } from '../../components/Icon'

const HORIZONTAL_SPACE = wp(5)
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
            // console.log(`users`, users)
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

    const IconAlignCenter = ({ children }) => (
        <View style={{ width: ICON_SIZE, alignItems: 'center' }}>
            {children}
        </View>
    )

    const EmailIcon = () => (
        <IconAlignCenter>
            <Icon
                iconFamily='FA'
                color={email.color}
                name='envelope'
                size={ICON_SIZE}
            />
        </IconAlignCenter>
    )
    const EmailCheckIcon = () => (
        <IconAlignCenter>
            <Icon
                iconFamily='FA'
                name='check'
                color={email.color}
                size={ICON_SIZE}
            />
        </IconAlignCenter>
    )

    const PasswordIcon = () => (
        <IconAlignCenter>
            <Icon
                iconFamily='FA'
                color={password.color}
                name='lock'
                size={ICON_SIZE}
            />
        </IconAlignCenter>
    )
    const PasswordToggleIcon = () => (
        <IconAlignCenter>
            <Icon
                iconFamily='FA'
                color={password.color}
                name={passwordVisible ? 'eye-slash' : 'eye'}
                onPress={() => {
                    setPasswordVisible(!passwordVisible)
                }}
                size={ICON_SIZE}
            />
        </IconAlignCenter>
    )

    return (
        <View style={styles.background}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={defaultStyles.title}>Welcome Back</Text>
            </View>
            <View style={{ flex: 2 }}>
                <View style={styles.container}>
                    <FormInput
                        color={email.color}
                        error={email.error}
                        focusColor={defaultStyles.colors.primary}
                        ExtraIcon={<EmailCheckIcon />}
                        Icon={<EmailIcon />}
                        maxLength={30}
                        onChangeText={(text) => {
                            setEmail({
                                value: text,
                                error: '',
                                color:
                                    emailValidator(text) === '' &&
                                    text.length > 0
                                        ? defaultStyles.colors.primary
                                        : defaultStyles.colors.light,
                            })
                            setError('')
                        }}
                        placeholder='Email'
                        value={email.value}
                    />
                </View>
                <View style={styles.container}>
                    <FormInput
                        color={password.color}
                        error={password.error}
                        focusColor={defaultStyles.colors.primary}
                        ExtraIcon={<PasswordToggleIcon />}
                        Icon={<PasswordIcon />}
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
                    />
                </View>

                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ForgotPassword')
                        }}
                    >
                        <Text
                            style={[defaultStyles.text, { textAlign: 'right' }]}
                        >
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
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
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Register')
                        }}
                    >
                        <Text
                            style={[
                                defaultStyles.text,
                                {
                                    color: defaultStyles.colors.primary,
                                    fontWeight: 'bold',
                                },
                            ]}
                        >
                            {' '}
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: HORIZONTAL_SPACE,
        backgroundColor: '#fcfcfc',
    },
    container: {
        marginVertical: hp(1),
    },
    error: {
        height: hp(3),
        marginTop: hp(1),
        color: defaultStyles.colors.danger,
        alignSelf: 'center',
    },
})

export default LoginScreen
