import React from 'react'
import { Image, View, StyleSheet, TouchableHighlight, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import colors from '../config/colors'
import { ft } from '../config/const'

function ListItem({ title, subTitle, image, IconComponent, onPress }) {
    return (
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} numberOfLines={1}>
                        {title}
                    </Text>
                    {subTitle && (
                        <Text style={styles.subTitle} numberOfLines={2}>
                            {subTitle}
                        </Text>
                    )}
                </View>
                <AntDesign color={colors.medium} name='right' size={15} />
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
    },
    detailsContainer: {
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: 'bold',
        fontSize: ft(14),
        color: colors.black,
    },
    subTitle: {
        color: colors.medium,
        fontSize: ft(12),
    },
})

export default ListItem
