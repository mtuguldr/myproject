import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { ft } from '../config/const'
import { Icon } from './Icon'
import defaultStyles from '../config/styles'

function DrawerItemCustom({ title, icon, onPress, switchComponent }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon
                color={defaultStyles.colors.medium}
                iconFamily='AD'
                name={icon}
                size={24}
            />
            <Text style={[defaultStyles.text, styles.text]}>{title}</Text>
            {switchComponent}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    text: {
        flex: 1,
        fontSize: ft(12),
        marginHorizontal: 20,
        textTransform: 'uppercase',
    },
})

export default DrawerItemCustom
