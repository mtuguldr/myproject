import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import DeviceInfo from 'react-native-device-info'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import colors from '../config/colors'
import { hp } from '../config/const'

function Header({ left, right, center }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.left}>{left}</View>
                <View style={styles.center}>{center}</View>
                <View style={styles.right}>{right}</View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // elevation: 10,
        // position: 'absolute',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        backgroundColor: colors.white,
        borderBottomColor: colors.lightest,
        borderBottomWidth: StyleSheet.hairlineWidth,
        top: 0,
        width: '100%',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: DeviceInfo.hasNotch() ? getStatusBarHeight() : 0,
        height: DeviceInfo.hasNotch() ? getStatusBarHeight() : hp(7),
    },
    left: {
        alignItems: 'flex-start',
        flex: 1,
    },
    center: {
        alignItems: 'center',
        flex: 1,
    },
    right: {
        alignItems: 'flex-end',
        flex: 1,
    },
})

export default Header
