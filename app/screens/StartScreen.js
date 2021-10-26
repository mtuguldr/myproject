import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import Background from '../components/Background'
import Button from '../components/Button'
import Logo from '../components/Logo'
import colors from '../config/colors'
import { ft, hp, wp } from '../config/const'

const MARGIN_VERTICAL_TALL = hp(6)
const MARGIN_VERTICAL_SHORT = hp(3)

function StartScreen({ navigation }) {
    return (
        <Background style={styles.background}>
            <Logo />
            <View style={styles.container}>
                <Text style={styles.title}>Water Delivery</Text>
                <Text style={[styles.description, styles.container]}>
                    We deliver water at any point of the Earth in 30 minutes
                </Text>

                <Button
                    color={colors.white}
                    filled
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                    title='Log in'
                />
                <Button
                    color={colors.white}
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
        backgroundColor: colors.primary,
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
