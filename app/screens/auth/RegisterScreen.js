import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Background, Button, Divider, FormInput } from '../../components'
import { Icon } from '../../components/Icon'
import colors from '../../config/colors'
import {
    ft,
    hp,
    wp,
    emailValidator,
    passwordValidator,
    nameValidator,
} from '../../config/const'

const HORIZONTAL_SPACE = wp(5)
const ICON_SIZE = wp(5)

function RegisterScreen({ navigation }) {
    const [name, setName] = useState({
        value: '',
        error: '',
        color: colors.light,
    })
    const [email, setEmail] = useState({
        value: '',
        error: '',
        color: colors.light,
    })
    const [password, setPassword] = useState({
        value: '',
        error: '',
        color: colors.light,
    })
    const [error, setError] = useState('')

    const [passwordVisible, setPasswordVisible] = useState(false)

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
                return
            }

            let users = JSON.parse(result)
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === email.value.toLowerCase()) {
                    setError('Email already registered')
                    return
                } else {
                    let merged = users.concat(newUser[0])
                    AsyncStorage.setItem('users', JSON.stringify(merged))

                    setName({ value: '', error: '', color: colors.light })
                    setEmail({ value: '', error: '', color: colors.light })
                    setPassword({ value: '', error: '', color: colors.light })
                    navigation.navigate('Login')
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    const IconAlignCenter = ({ children }) => (
        <View style={{ width: ICON_SIZE, alignItems: 'center' }}>
            {children}
        </View>
    )

    const NameIcon = () => (
        <IconAlignCenter>
            <Icon
                iconFamily='FA'
                color={name.color}
                name='user'
                size={ICON_SIZE}
            />
        </IconAlignCenter>
    )
    const EmailIcon = () => (
        <IconAlignCenter>
            <Icon
                iconFamily='FA'
                name='envelope'
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
        <Background color={colors.primary} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.title}>Create{'\n'}Account</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.container}>
                    <FormInput
                        color={name.color}
                        error={name.error}
                        Icon={<NameIcon />}
                        maxLength={20}
                        onChangeText={(text) => {
                            setName({
                                value: text,
                                error: '',
                                color:
                                    nameValidator(text) === '' &&
                                    text.length > 0
                                        ? colors.primary
                                        : colors.light,
                            })
                            setError('')
                        }}
                        placeholder='Name'
                        value={name.value}
                    />
                    <FormInput
                        color={email.color}
                        error={email.error}
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
                                    passwordValidator(text) === '' &&
                                    text.length > 0
                                        ? colors.primary
                                        : colors.light,
                            })
                            setError('')
                        }}
                        placeholder='Password'
                        secureTextEntry={!passwordVisible}
                        value={password.value}
                    />
                    <View style={{ marginTop: HORIZONTAL_SPACE }}>
                        <Button
                            title='Sign up'
                            backgroundColor={colors.primary}
                            borderTextColor={colors.white}
                            filled
                            onPress={onPressSignup}
                        />
                        <Divider />
                        <Button
                            title='Sign in'
                            borderTextColor={colors.light}
                            onPress={() => {
                                navigation.navigate('Login')
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
    error: {
        color: colors.danger,
        fontSize: ft('14'),
        alignSelf: 'center',
    },
    background: {
        justifyContent: 'space-between',
    },
    container: {
        marginHorizontal: HORIZONTAL_SPACE,
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

export default RegisterScreen
