import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { Button, FormInput } from '../../components'
import defaultStyles from '../../config/styles'
import { emailValidator, hp, wp } from '../../config/const'
import { Icon } from '../../components/Icon'

const ICON_SIZE = wp(5)

function ForgotScreen({ navigation }) {
    const [email, setEmail] = useState({
        value: '',
        error: '',
        color: defaultStyles.colors.light,
    })
    const [error, setError] = useState('')

    const onSubmitPress = async () => {
        const emailError = emailValidator(email.value)
        if (emailError) {
            setEmail({ ...email, error: emailError })
            return
        }
        setError(
            'Please check your email and reset your password using provided link'
        )
        // navigation.goBack()
    }

    const EmailIcon = () => (
        <Icon
            color={email.color}
            iconFamily='IO'
            name='mail-outline'
            size={ICON_SIZE}
            style={defaultStyles.inputIcon}
        />
    )
    return (
        <View style={styles.background}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={[defaultStyles.text, defaultStyles.large]}>
                    Reset password
                </Text>
            </View>
            <View style={{ flex: 2 }}>
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

                <Text style={[defaultStyles.text, styles.error]}>{error}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Button
                    title='Submit'
                    backgroundColor={defaultStyles.colors.primary}
                    borderTextColor={defaultStyles.colors.white}
                    filled
                    onPress={onSubmitPress}
                />
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
        color: defaultStyles.colors.success,
        marginTop: hp(1),
        textAlign: 'center',
    },
})

export default ForgotScreen
