import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Icon } from './Icon'
import defaultStyles from '../config/styles'

function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon
                iconFamily='AD'
                name='delete'
                size={35}
                color={defaultStyles.colors.white}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.danger,
        justifyContent: 'center',
        paddingVertical: defaultStyles.backgroundPadding,
        width: 70,
    },
})

export default ListItemDeleteAction
