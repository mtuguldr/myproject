import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { ft, wp } from '../config/const'
import { Icon } from './Icon'
import defaultStyles from '../config/styles'

function DrawerItemCustom({ title, Left, onPress, Right }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {Left}
            <Text style={[defaultStyles.text, styles.text]}>{title}</Text>
            {Right}
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
        // fontSize: ft(12),
        marginHorizontal: 20,
        textTransform: 'uppercase',
    },
})

export default DrawerItemCustom
