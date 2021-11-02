import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Fragment } from 'react/cjs/react.production.min'

import colors from '../config/colors'

function Background({ children, style, color = colors.white }) {
    return (
        <Fragment>
            <SafeAreaView style={[styles.screen, { backgroundColor: color }]}>
                <View style={[styles.view, style]}>{children}</View>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0, backgroundColor: colors.white }} />
        </Fragment>
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
