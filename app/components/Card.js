import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { hp, wp } from '../config/const'
import defaultStyles from '../config/styles'

function Card({ title, renderRightActions }) {
    return (
        <Swipeable rightThreshold={70} renderRightActions={renderRightActions}>
            <TouchableOpacity style={styles.container}>
                <Text
                    style={[
                        defaultStyles.text,
                        defaultStyles.medium,
                        { textTransform: 'uppercase' },
                    ]}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#efefef', //defaultStyles.colors.lightest,
        height: hp(10),
        justifyContent: 'center',
        // marginVertical: hp(1),
        paddingHorizontal: defaultStyles.backgroundPadding,
    },
})

export default Card
