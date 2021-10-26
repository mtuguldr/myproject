import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import { ft, hp } from '../config/const'
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
        color: colors.danger,
        fontSize: ft(10),
    },
})

export default FormInput
