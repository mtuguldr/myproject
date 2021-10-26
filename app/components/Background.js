import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

function Background({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    view: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
    },
})

export default Background
