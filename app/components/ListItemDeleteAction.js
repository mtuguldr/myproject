import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Icon } from './Icon'
import defaultStyles from '../config/styles'
import { wp } from '../config/const'

function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon
                iconFamily='AD'
                name='delete'
                size={wp(8)}
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
        width: wp(16),
    },
})

export default ListItemDeleteAction
