import React from 'react'
import { Platform, View, StyleSheet, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DeviceInfo from 'react-native-device-info'

import Background from './Background'
import colors from '../config/colors'
import { ft, hp, wp } from '../config/const'

const MARGIN_HORIZONTAL = wp(5)
const MARGIN_VERTICAL_TALL = hp(6)
const MARGIN_VERTICAL_SHORT = hp(3)
const ICON_SIZE = wp(5)

function AuthContainer({ title, children, navigation }) {
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

                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.container}>{children}</View>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
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

export default AuthContainer
