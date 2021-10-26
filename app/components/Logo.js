import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../config/colors'
import { ft, wp } from '../config/const'

function Logo({ style, color = colors.white }) {
    return (
        <View style={style}>
            <Text style={[styles.text, { color: color }]}>wwater</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: ft(22),
        marginHorizontal: wp('5%'),
    },
})

export default Logo
