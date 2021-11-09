import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import defaultStyles from '../config/styles'
import { wp } from '../config/const'
import { Icon } from './Icon'

function LikeButton({ size, onPress }) {
    const [liked, setLiked] = React.useState(false)
    return (
        <TouchableOpacity
            style={[
                styles.container,
                { height: size * 2, width: size * 2, borderRadius: size },
            ]}
            onPress={() => {
                setLiked(!liked)
                onPress
            }}
        >
            <Icon
                iconFamily='AD'
                name={liked ? 'heart' : 'hearto'}
                size={size}
                color={defaultStyles.colors.dark}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.shadowWhite,
        justifyContent: 'center',
    },
})

export default LikeButton
