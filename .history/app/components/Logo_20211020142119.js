import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ft } from '../config/const'

function Logo({ style }) {
    return (
        <View style={style}>
            <Text style={styles.text}>wwater</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: ft(22),
    },
})

export default Logo
