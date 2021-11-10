import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { Button, FormInput, TextButton } from '../../components'
import { Icon } from '../../components/Icon'
import defaultStyles from '../../config/styles'
import {
    hp,
    wp,
    emailValidator,
    passwordValidator,
    nameValidator,
} from '../../config/const'

const ICON_SIZE = wp(5)

function RegisterScreen({ navigation }) {
    const [name, setName] = useState({
        value: '',
        error: '',
        color: defaultStyles.colors.light,
    })
    const [email, setEmail] = useState({
        value: '',
        error: '',
        color: defaultStyles.colors.light,
    })
    const [password, setPassword] = useState({
        value: '',
        error: '',
        color: defaultStyles.colors.light,
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

                    setName({
                        value: '',
                        error: '',
                        color: defaultStyles.colors.light,
                    })
                    setEmail({
                        value: '',
                        error: '',
                        color: defaultStyles.colors.light,
                    })
                    setPassword({
                        value: '',
                        error: '',
                        color: defaultStyles.colors.light,
                    })
                    navigation.navigate('Login')
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    const NameIcon = () => (
        <Icon
            iconFamily='IO'
            color={name.color}
            name='person-outline'
            size={ICON_SIZE}
            style={defaultStyles.inputIcon}
        />
    )
    const EmailIcon = () => (
        <Icon
            iconFamily='IO'
            name='mail-outline'
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
                    Create Account
                </Text>
            </View>
            <View style={{ flex: 2 }}>
                <FormInput
                    color={name.color}
                    error={name.error}
                    Left={<NameIcon />}
                    maxLength={20}
                    onChangeText={(text) => {
                        setName({
                            value: text,
                            error: '',
                            color:
                                nameValidator(text) === '' && text.length > 0
                                    ? defaultStyles.colors.primary
                                    : defaultStyles.colors.light,
                        })
                        setError('')
                    }}
                    placeholder='Name'
                    value={name.value}
                    style={styles.container}
                />

                <FormInput
                    color={email.color}
                    error={email.error}
                    Left={<EmailIcon />}
                    maxLength={20}
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
                    maxLength={20}
                    onChangeText={(text) => {
                        setPassword({
                            value: text,
                            error: '',
                            color:
                                passwordValidator(text) === '' &&
                                text.length > 0
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
            </View>
            <View style={{ flex: 1 }}>
                <Button
                    title='Sign up'
                    backgroundColor={defaultStyles.colors.primary}
                    borderTextColor={defaultStyles.colors.white}
                    filled
                    onPress={onPressSignup}
                />
                <Text style={[defaultStyles.text, styles.error]}>{error}</Text>

                <View
                    style={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                    <Text style={defaultStyles.text}>
                        Already have an account?
                    </Text>
                    <TextButton
                        title=' Sign in'
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: defaultStyles.colors.white,
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

export default RegisterScreen
