import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import defaultStyles from '../config/styles'
import { ft, hp, wp } from '../config/const'
import LikeButton from './LikeButton'

function Card({ image, title, subTitle, onPressIcon, onPress, style }) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <ImageBackground
                source={image}
                resizeMode='cover'
                style={styles.image}
            >
                <LikeButton onPress={onPressIcon} size={wp(5)} />
            </ImageBackground>
            <Text
                style={[defaultStyles.text, defaultStyles.small, styles.title]}
                ellipsizeMode='tail'
                numberOfLines={3}
            >
                {title}
            </Text>
            <Text style={[defaultStyles.text, styles.subTitle]}>
                {subTitle}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        marginVertical: hp(1),
    },
    image: {
        alignItems: 'flex-end',
        height: 200,
        justifyContent: 'flex-end',
        width: '100%',
    },
    subTitle: {
        color: defaultStyles.colors.medium,
        fontSize: ft(12),
        marginTop: 5,
    },
    title: {
        fontWeight: 'bold',
        marginTop: 10,
    },
})

export default Card
