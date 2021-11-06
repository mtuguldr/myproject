import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import defaultStyles from '../config/styles'

function TextButton({ title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[defaultStyles.text, styles.text]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: defaultStyles.colors.primary,
        fontWeight: 'bold',
    },
})

export default TextButton
