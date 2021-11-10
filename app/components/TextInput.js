import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

import defaultStyles from '../config/styles'
import { hp, wp } from '../config/const'

function AppTextInput({
    Left,
    color = defaultStyles.colors.light,
    Right,
    ...otherProps
}) {
    return (
        <View style={[styles.container, { borderColor: color }]}>
            {Left}
            <TextInput
                style={[defaultStyles.text, styles.text, { color: color }]}
                placeholderTextColor={color}
                {...otherProps}
            />
            {Right}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primaryLightTint,
        borderRadius: defaultStyles.borderRadius,
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
