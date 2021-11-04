import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import defaultStyles from '../config/styles'
import { ft, hp, wp } from '../config/const'

function Button({
    backgroundColor = defaultStyles.colors.white,
    borderTextColor = defaultStyles.colors.black,
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
            <Text
                style={[
                    defaultStyles.text,
                    styles.text,
                    { color: borderTextColor },
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: defaultStyles.borderRadius,
        borderWidth: 1,
    },
    text: {
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingVertical: hp(2),
        textTransform: 'uppercase',
    },
})

export default Button
