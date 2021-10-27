import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Background from '../components/Background'
import Button from '../components/Button'
import Divider from '../components/Divider'
import FormInput from '../components/FormInput'
import colors from '../config/colors'
import { emailValidator, ft, hp, passwordValidator, wp } from '../config/const'

const HORIZONTAL_SPACE = wp(5)
const ICON_SIZE = wp(5)

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState({
        color: colors.light,
        error: '',
        value: '',
    })
    const [password, setPassword] = useState({
        color: colors.light,
        error: '',
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
            console.log(`users`, users)
            for (let i = 0; i < users.length; i++) {
                if (
                    email.value.toLowerCase() === users[i].email &&
                    password.value === users[i].password
                ) {
                    users[i].loggedIn = true
                    AsyncStorage.setItem('users', JSON.stringify(users))

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Dashboard' }],
                    })
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
            <FontAwesome color={email.color} name='envelope' size={ICON_SIZE} />
        </IconAlignCenter>
    )
    const EmailCheckIcon = () => (
        <IconAlignCenter>
            <FontAwesome name='check' color={email.color} size={ICON_SIZE} />
        </IconAlignCenter>
    )

    const PasswordIcon = () => (
        <IconAlignCenter>
            <FontAwesome color={password.color} name='lock' size={ICON_SIZE} />
        </IconAlignCenter>
    )
    const PasswordToggleIcon = () => (
        <IconAlignCenter>
            <FontAwesome
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
        <Background color={colors.primary} style={styles.background}>
            <View style={styles.container}>
                <FontAwesome
                    color={colors.white}
                    name='chevron-left'
                    size={ICON_SIZE}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
                <Text style={styles.title}>Welcome{'\n'}Back</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.container}>
                    <FormInput
                        color={email.color}
                        error={email.error}
                        ExtraIcon={<EmailCheckIcon />}
                        Icon={<EmailIcon />}
                        maxLength={20}
                        onChangeText={(text) => {
                            setEmail({
                                value: text,
                                error: '',
                                color:
                                    emailValidator(text) === '' &&
                                    text.length > 0
                                        ? colors.primary
                                        : colors.light,
                            })
                            setError('')
                        }}
                        placeholder='Email'
                        value={email.value}
                    />
                    <FormInput
                        color={password.color}
                        error={password.error}
                        ExtraIcon={<PasswordToggleIcon />}
                        Icon={<PasswordIcon />}
                        maxLength={20}
                        onChangeText={(text) => {
                            setPassword({
                                value: text,
                                error: '',
                                color:
                                    passwordValidator(text) === ''
                                        ? colors.primary
                                        : colors.light,
                            })
                            setError('')
                        }}
                        placeholder='Password'
                        secureTextEntry={!passwordVisible}
                        value={password.value}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ForgotPassword')
                        }}
                    >
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
                    <View style={{ marginTop: HORIZONTAL_SPACE }}>
                        <Button
                            backgroundColor={colors.primary}
                            borderTextColor={colors.white}
                            filled
                            onPress={onPressLogin}
                            title='Log in'
                        />
                        <Divider />
                        <Button
                            borderTextColor={colors.light}
                            title='Sign up'
                            onPress={() => {
                                navigation.navigate('Register')
                            }}
                        />
                        <Text style={styles.error}>{error}</Text>
                    </View>
                </View>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    background: {
        justifyContent: 'space-between',
    },
    container: {
        marginHorizontal: HORIZONTAL_SPACE,
    },
    error: {
        color: colors.danger,
        fontSize: ft('14'),
        alignSelf: 'center',
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
    },
})

export default LoginScreen
