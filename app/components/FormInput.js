import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import defaultStyles from '../config/styles'
import { ft, hp, wp } from '../config/const'
import AppTextInput from './TextInput'

function FormInput({ error, ...otherProps }) {
    return (
        <View style={{ height: hp(8) }}>
            <AppTextInput {...otherProps} />
            {error !== '' ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: defaultStyles.colors.danger,
        fontSize: ft(10),
        paddingHorizontal: wp(4),
    },
})

export default FormInput
