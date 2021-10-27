import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Background from '../components/Background'
import Button from '../components/Button'
import FormInput from '../components/FormInput'
import colors from '../config/colors'
import { ft, hp, wp } from '../config/const'

const ICON_SIZE = wp(5)
const HORIZONTAL_SPACE = wp(5)
function ForgotPasswordScreen({ navigation }) {
    const IconAlignCenter = ({ children }) => (
        <View style={{ width: ICON_SIZE, alignItems: 'center' }}>
            {children}
        </View>
    )

    const EmailIcon = () => (
        <IconAlignCenter>
            <FontAwesome
                color={colors.white}
                name='envelope'
                size={ICON_SIZE}
            />
        </IconAlignCenter>
    )
    return (
        <Background color={colors.primary} style={styles.background}>
            <View style={{ flex: 1 }}>
                <FontAwesome
                    color={colors.white}
                    name='chevron-left'
                    size={ICON_SIZE}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
                <Text style={styles.title}>Forgot{'\n'}Password?</Text>
            </View>
            <View style={{ flex: 1 }}>
                <FormInput
                    Icon={<EmailIcon />}
                    color={colors.white}
                    placeholder='Email'
                />
                <Button
                    filled
                    backgroundColor={colors.white}
                    borderTextColor={colors.primary}
                    title='Submit'
                />
            </View>
            {/* <View style={styles.formContainer}>
                <View style={styles.container}></View>
            </View> */}
        </Background>
    )
}

const styles = StyleSheet.create({
    background: {
        justifyContent: 'space-between',
        paddingHorizontal: HORIZONTAL_SPACE,
    },
    container: {},

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

export default ForgotPasswordScreen
