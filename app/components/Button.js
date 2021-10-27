import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import colors from '../config/colors'
import { ft, hp } from '../config/const'

function Button({
    backgroundColor = colors.white,
    borderTextColor = colors.black,
    filled = false,
    onPress,
    title,
}) {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                filled
                    ? {
                          backgroundColor: backgroundColor,
                          borderColor: backgroundColor,
                      }
                    : {
                          backgroundColor: 'transparent',
                          borderColor: borderTextColor,
                      },
            ]}
            onPress={onPress}
        >
            <Text style={[styles.text, { color: borderTextColor }]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        padding: hp(2),
        borderWidth: 1,
        marginVertical: hp(1),
    },
    text: {
        fontWeight: 'bold',
        fontSize: ft(14),
        alignSelf: 'center',
    },
})

export default Button
