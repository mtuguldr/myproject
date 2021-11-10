import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '../config/colors'
import { wp } from '../config/const'
import { Icon } from './Icon'

const ICON_SIZE = wp(10)

function NewProductButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View>
                <Icon
                    iconFamily='IO'
                    name='add'
                    color={colors.white}
                    size={ICON_SIZE}
                    style={{ marginLeft: 3 }}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: ICON_SIZE,
        // borderWidth: 10,
        bottom: ICON_SIZE / 2,
        height: ICON_SIZE * 1.5,
        justifyContent: 'center',
        width: ICON_SIZE * 1.5,

        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})

export default NewProductButton
