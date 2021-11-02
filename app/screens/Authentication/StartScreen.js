import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import { Background, Button, Logo } from '../../components'
import colors from '../../config/colors'
import { ft, hp, wp } from '../../config/const'

const MARGIN_VERTICAL_TALL = hp(6)
const MARGIN_VERTICAL_SHORT = hp(3)

function StartScreen({ navigation }) {
    return (
        <Background color={colors.primary} style={styles.background}>
            <Logo />
            <View style={styles.container}>
                <Text style={styles.title}>Online Store</Text>
                <Text style={[styles.description, styles.container]}>
                    We deliver anything at any point of the Earth in 30 minutes
                </Text>

                <Button
                    backgroundColor={colors.white}
                    borderTextColor={colors.primary}
                    filled
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                    title='Log in'
                />
                <Button
                    borderTextColor={colors.white}
                    onPress={() => {
                        navigation.navigate('Register')
                    }}
                    title='Sign up'
                />
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    background: {
        // backgroundColor: colors.primary,
        paddingHorizontal: wp(5),
        justifyContent: 'space-between',
    },
    container: {
        marginVertical: MARGIN_VERTICAL_SHORT,
    },
    description: {
        color: colors.white,
        fontSize: ft(14),
    },
    title: {
        color: colors.white,
        fontSize: ft(28),
    },
})

export default StartScreen
