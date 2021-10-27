import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../config/colors'
import { ft, wp } from '../config/const'

function Logo({ color }) {
    return <Text style={[styles.text, { color: color }]}>wwater</Text>
}

const styles = StyleSheet.create({
    text: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: ft(22),
    },
})

export default Logo
