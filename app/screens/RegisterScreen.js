import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import AuthContainer from '../components/AuthContainer'
import Background from '../components/Background'
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

const MARGIN_HORIZONTAL = wp(5)
const MARGIN_VERTICAL_TALL = hp(6)
const MARGIN_VERTICAL_SHORT = hp(3)
const ICON_SIZE = wp(5)

function RegisterScreen({ navigation }) {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
    const [error, setError] = useState('')

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

            let result = await AsyncStorage.getItem('users')

            if (result === null) {
                AsyncStorage.setItem('users', JSON.stringify(newUser))
                return true
            }

            let users = JSON.parse(result)
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === email.value.toLowerCase()) {
                    setError('Email already registered')
                    return false
                } else {
                    let merged = users.concat(newUser[0])
                    AsyncStorage.setItem('users', JSON.stringify(merged))
                    return true
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    const onPressSignup = async () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (nameError || emailError || passwordError) {
            setName({ ...name, error: nameError })
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }

        const result = await registerUser()
        if (result) {
            setName({ value: '', error: '' })
            setEmail({ value: '', error: '' })
            setPassword({ value: '', error: '' })
            navigation.navigate('Login')
        }
    }

    return (
        <Background style={styles.background}>
            <View style={styles.container}>
                <FontAwesome
                    color={colors.white}
                    name='chevron-left'
                    size={ICON_SIZE}
                    style={styles.backButton}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />

                <Text style={styles.title}>Create{'\n'}Account</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.container}>
                    <FormInput
                        color={highlightInput(name.value)}
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
                        color={highlightInput(email.value)}
                        error={email.error}
                        icon='envelope'
                        onChangeText={(text) => {
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
                        {error ? (
                            <Text style={styles.error}>{error}</Text>
                        ) : null}
                    </View>
                </View>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    error: {
        color: colors.danger,
        fontSize: ft('14'),
        alignSelf: 'center',
    },
    error: {
        color: colors.danger,
        fontSize: ft('14'),
        alignSelf: 'center',
    },
    background: {
        backgroundColor: colors.primary,
        justifyContent: 'space-between',
    },
    backButton: {
        // top: MARGIN_VERTICAL_TALL,
    },
    container: {
        marginHorizontal: MARGIN_HORIZONTAL,
        // marginBottom:
        //     Platform.OS === 'ios'
        //         ? MARGIN_VERTICAL_TALL
        //         : MARGIN_VERTICAL_SHORT,
    },

    formContainer: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        color: colors.white,
        fontSize: ft(28),
        marginTop: hp(10),
        // marginTop: DeviceInfo.hasNotch()
        //     ? MARGIN_VERTICAL_TALL * 2
        //     : MARGIN_VERTICAL_SHORT,
    },
})

export default RegisterScreen
