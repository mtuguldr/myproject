import React from 'react'
import { StyleSheet, Text } from 'react-native'
import defaultStyles from '../config/styles'
import { ft } from '../config/const'

function Logo({ color = defaultStyles.colors.white }) {
    return <Text style={[styles.text, { color: color }]}>shoppr</Text>
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: ft(22),
    },
})

export default Logo
