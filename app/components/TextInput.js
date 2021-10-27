import React from 'react'
import { View, StyleSheet, TextInput, Platform } from 'react-native'

import colors from '../config/colors'
import { ft, hp, wp } from '../config/const'

function AppTextInput({
    Icon,
    color = colors.light,
    ExtraIcon,
    ...otherProps
}) {
    return (
        <View style={[styles.container, { borderBottomColor: color }]}>
            {Icon}
            <TextInput
                style={[styles.text, { color: color }]}
                placeholderTextColor={color}
                {...otherProps}
            />
            {ExtraIcon}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        fontSize: ft(14),
        marginHorizontal: wp(1),
        paddingVertical: hp(2),
    },
})

export default AppTextInput
