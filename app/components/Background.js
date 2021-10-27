import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import colors from '../config/colors'

function Background({ children, style, color = colors.white }) {
    // alert(getStatusBarHeight())
    return (
        <SafeAreaView style={[styles.screen, { backgroundColor: color }]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    view: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
})

export default Background
