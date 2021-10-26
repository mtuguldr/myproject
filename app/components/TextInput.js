import React from 'react'
import { View, StyleSheet, TextInput, Platform } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import colors from '../config/colors'
import { ft, wp } from '../config/const'

const ICON_SIZE = wp(5)
function AppTextInput({
    Icon,
    color = colors.light,
    ExtraIcon,
    ...otherProps
}) {
    return (
        <View style={[styles.container, { borderBottomColor: color }]}>
            {Icon ? <View style={{ width: ICON_SIZE }}>{Icon}</View> : null}
            <TextInput
                style={[styles.text, { color: color }]}
                placeholderTextColor={colors.light}
                {...otherProps}
            />
            {ExtraIcon ? (
                <View style={{ width: ICON_SIZE }}>{ExtraIcon}</View>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingVertical: Platform.OS === 'ios' ? 14 : 0,
    },
    icon: {
        alignSelf: 'center',
    },
    text: {
        fontSize: ft(14),
        flex: 1,
        marginHorizontal: wp(1),
    },
})

export default AppTextInput
