import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { hp, wp } from '../config/const'
import defaultStyles from '../config/styles'

function CardList({ Title, renderRightActions, onPress, ...otherProps }) {
    return (
        <View style={{ marginVertical: hp(1) }}>
            <Swipeable
                renderRightActions={renderRightActions}
                overshootRight={false}
                {...otherProps}
            >
                <TouchableOpacity onPress={onPress} style={styles.container}>
                    {Title}
                </TouchableOpacity>
            </Swipeable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#efefef', //defaultStyles.colors.lightest,
        height: hp(10),
        justifyContent: 'center',
        paddingHorizontal: defaultStyles.backgroundPadding,
    },
})

export default CardList
