import React from 'react'
import { StyleSheet, Text } from 'react-native'
import colors from '../config/colors'
import { ft } from '../config/const'

function Logo({ color = colors.white }) {
    return <Text style={[styles.text, { color: color }]}>wwater</Text>
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: ft(22),
    },
})

export default Logo
