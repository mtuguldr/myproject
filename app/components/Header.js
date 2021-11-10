import React from 'react'
import { View, StyleSheet, StatusBar, Platform } from 'react-native'

import DeviceInfo from 'react-native-device-info'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import defaultStyles from '../config/styles'
import { hp } from '../config/const'

function Header({ left, right, center }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <View style={styles.content}>
                <View style={styles.left}>{left}</View>
                <View style={styles.center}>{center}</View>
                <View style={styles.right}>{right}</View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        flex: 1,
    },
    container: {
        backgroundColor: defaultStyles.colors.white,
        borderBottomColor: defaultStyles.colors.lightest,
        borderBottomWidth: 1, //StyleSheet.hairlineWidth,
        // elevation: 2,
        // position: 'absolute',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        // top: 0,
        // width: '100%',
    },
    content: {
        alignItems: 'center',
        flexDirection: 'row',
        height: DeviceInfo.hasNotch() ? getStatusBarHeight() : hp(7),
        marginTop: DeviceInfo.hasNotch() ? getStatusBarHeight() : 0,
    },
    left: {
        alignItems: 'flex-start',
        flex: 1,
    },
    right: {
        alignItems: 'flex-end',
        flex: 1,
    },
})

export default Header
