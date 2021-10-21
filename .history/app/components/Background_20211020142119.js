import React, { Children } from 'react'
import { View, StyleSheet } from 'react-native'

function Background({ children, style }) {
    return <View style={[styles.container, style]}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#006bff',
    },
})

export default Background
