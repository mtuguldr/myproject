import React from 'react'
import { View, StyleSheet, TextInput, Platform } from 'react-native'

import defaultStyles from '../config/styles'
import { ft, hp, wp } from '../config/const'

function AppTextInput({
    Icon,
    color = defaultStyles.colors.light,
    ExtraIcon,
    ...otherProps
}) {
    return (
        <View style={[styles.container, { borderColor: color }]}>
            {Icon}
            <TextInput
                style={[defaultStyles.text, styles.text, { color: color }]}
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
        backgroundColor: defaultStyles.colors.white,
        borderBottomWidth: 1,
        borderRadius: defaultStyles.borderRadius,
        borderWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    text: {
        flex: 1,
        marginHorizontal: wp(1),
        paddingVertical: hp(2),
    },
})

export default AppTextInput
