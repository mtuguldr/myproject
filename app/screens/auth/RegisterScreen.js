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
        <View style={styles.background}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={[defaultStyles.text, defaultStyles.large]}>
                    Create Account
                </Text>
            </View>
            <View style={{ flex: 2 }}>
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
                                        ? defaultStyles.colors.primary
                                        : defaultStyles.colors.light,
                            })
                            setError('')
                        }}
                        placeholder='Name'
                        value={name.value}
                    />
                </View>
                <View style={styles.container}>
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
        justifyContent: 'space-evenly',
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
